import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy";
import qrcode from "qrcode";
import User from "../models/User.js";
import { sendEmail } from "../utils/sendEmail.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateTempToken,
} from "../utils/generateToken.js";
import { verificationEmail, welcomeEmail } from "../utils/emailTemplates.js";
import { hashToken } from "../utils/hasToken.js";
import { storeRefreshToken } from "../Helper/storeRefreshToken.js";
import { removeRefreshToken } from "../Helper/removeRefreshToken.js";
import { hasRefreshToken } from "../Helper/hasRefreshToken.js";


// Register
export const register = async (req, res) => {
  try {
    const { username, email, password, receiveUpdates, agreedToTerms } =
      req.body;

    if (!username || !email || !password)
      return res.status(400).json({ message: "Missing fields" });

    // must accept terms
    if (!agreedToTerms)
      return res.status(400).json({
        message: "You must agree to the terms & privacy policy.",
        success: false,
      });

    // user exists
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const emailVerificationToken = crypto.randomBytes(32).toString("hex");
    const emailVerificationTokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15m

    // user create
    const user = await User.create({
      username,
      email,
      password: hashed,
      emailVerificationToken: emailVerificationToken,
      emailVerificationTokenExpires: emailVerificationTokenExpires,
      receiveUpdates: receiveUpdates || false,
      agreedToTerms: agreedToTerms || false,
    });

    // send verification email
    const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailVerificationToken}&id=${user._id}`;
    const template = verificationEmail({ name: user.username, verifyUrl });
    await sendEmail({ to: user.email, template });

    // ONLY IF user selected "Receive updates"
    if (receiveUpdates) {
      const welcome = welcomeEmail({ name: username });
      await sendEmail({ to: user.email, template: welcome });
    }

    return res.status(201).json({
      message: "Registered successfully. Check your email to verify!!",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Server error",
      success: false,
    });
  }
};

// Verify email
export const verifyEmail = async (req, res) => {
  try {
    const { token, id } = req.query;

    if (!token || !id) {
      return res.status(400).json({
        message: "Invalid request",
      });
    }

    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified) return res.json({ message: "User already verified" });

    if (
      user.emailVerificationToken !== token ||
      !user.emailVerificationTokenExpires ||
      new Date() > user.emailVerificationTokenExpires
    ) {
      return res.status(400).json({
        message: "Verification token invalid or expired",
      });
    }

    user.isVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationTokenExpires = null;

    await user.save();

    return res.json({
      message: "Email verified successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Server error",
      success: false,
    });
  }
};

// Resend Verify email
export const resendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email)
      return res.status(400).json({ message: "Email is required", success: false });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found", success: false });

    if (user.isVerified)
      return res.status(400).json({ message: "Email already verified", success: false });

    // Generate new verification token
    const emailVerificationToken = crypto.randomBytes(32).toString("hex");
    const emailVerificationTokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    user.emailVerificationToken = emailVerificationToken;
    user.emailVerificationTokenExpires = emailVerificationTokenExpires;
    await user.save();

    // Send verification email
    const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailVerificationToken}&id=${user._id}`;
    const template = verificationEmail({ name: user.username, verifyUrl });

    await sendEmail({ to: user.email, template });

    return res.status(200).json({
      message: "Verification email resent successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message || "Server error",
      success: false,
    });
  }
};

//Login
export const login = async (req, res) => {
  try {
    const { emailOrUsername, password, stayLoggedIn } = req.body;

    if (!emailOrUsername || !password)
      return res.status(400).json({ message: "Missing fields" });

    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.status !== "active")
      return res.status(403).json({ message: "Account not active" });

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) return res.status(400).json({ message: "Invalid Password" });

    // If 2FA enabled
    if (user.twoFactor?.enabled) {
      const tempToken = generateTempToken(user._id);
      return res.json({
        message: "2FA required",
        need2FA: true,
        tempToken,
        user: user.twoFactor
      });
    }

    // create tokens
    const accessToken = generateAccessToken(user._id);

    let refreshToken;
    if (stayLoggedIn) {
      // stayLogin = true → 30 days
      refreshToken = generateRefreshToken(user._id, "30d");

      await storeRefreshToken(user, refreshToken, {
        userAgent: req.get("User-Agent"),
        ip: req.ip,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      user.stayLoggedIn = true;
    } else {
      // stayLogin = false → 1 day
      refreshToken = generateRefreshToken(user._id, "1d");

      await storeRefreshToken(user, refreshToken, {
        userAgent: req.get("User-Agent"),
        ip: req.ip,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
      });

      user.stayLoggedIn = false;
    }
    user.isLoggedIn = true;
    user.lastLogin = new Date();
    await user.save();

    // Send safe user data
    const { password: pwd, ...userData } = user._doc;

    res.json({
      message: "Login successful",
      success: true,
      accessToken,
      refreshToken: stayLoggedIn ? refreshToken : null,
      stayLoggedIn: stayLoggedIn,
      user: userData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// POST /2fa/verify?tempToken=XYZ
export const verify2fa = async (req, res) => {
  try {
    const tempToken = req.query.tempToken; // query param
    const { code } = req.body;

    if (!tempToken || !code)
      return res.status(400).json({ message: "Missing tempToken or code" });

    let payload;
    try {
      payload = jwt.verify(tempToken, process.env.JWT_TEMP_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid temp token" });
    }

    const user = await User.findById(payload.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Secret exist check
    if (!user.twoFactor?.secret)
      return res.status(400).json({
        success: false,
        message: "2FA is not properly set up for this account.",
      });

    // Verify TOTP code
    const ok = speakeasy.totp.verify({
      secret: user.twoFactor.secret,
      encoding: "base32",
      token: code,
      window: 1,
    });

    if (!ok) return res.status(400).json({ message: "Invalid 2FA code" });

    // Issue real tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await storeRefreshToken(user, refreshToken, {
      userAgent: req.get("User-Agent"),
      ip: req.ip,
    });

    // Set refresh token cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    // SUCCESS RESPONSE (Important!)
    return res.json({
      success: true,
      message: "2FA verification successful",
      accessToken,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------- ENABLE 2FA (generate secret + QR)
export const enable2fa = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const secret = speakeasy.generateSecret({
      name: `MiniTasin Studio (${user.email})`,
    });

    const qr = await qrcode.toDataURL(secret.otpauth_url);

    user.twoFactor.secret = secret.base32;
    user.twoFactor.enabled = false;

    await user.save();

    res.json({
      qrCode: qr,
      secret: secret.base32,
      message: "Scan QR using Google Authenticator",
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------- CONFIRM ENABLE 2FA (user submits TOTP to enable)
export const confirmEnable2fa = async (req, res) => {
  try {
    const { code } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // 🚫 Stop if already enabled
    if (user.twoFactor.enabled) {
      return res.status(400).json({ message: "2FA already enabled" });
    }

    const ok = speakeasy.totp.verify({
      secret: user.twoFactor.secret,
      encoding: "base32",
      token: code,
      window: 1,
    });

    if (!ok) return res.status(400).json({ message: "Invalid 2FA code" });

    // ✅ Enable now
    user.twoFactor.enabled = true;
    await user.save();

    res.json({ message: "2FA Enabled Successfully!", user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------- DISABLE 2FA (requires current password and TOTP)
export const disable2fa = async (req, res) => {
  try {
    const { password, code } = req.body;
    if (!password || !code) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ message: "Invalid password" });

    const verified = speakeasy.totp.verify({
      secret: user.twoFactor.secret,
      encoding: "base32",
      token: code,
      window: 1,
    });

    if (!verified) return res.status(400).json({ message: "Invalid 2FA code" });

    user.twoFactor.enabled = false;
    user.twoFactor.secret = "";
    await user.save();

    // Just return updated user, no new JWT
    res.json({
      message: "2FA disabled successfully",
      user: {
        ...user._doc,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ----------------- REFRESH TOKEN
export const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: "No refresh token" });

    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const user = await User.findById(payload.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!hasRefreshToken(user, refreshToken)) {
      user.refreshTokens = []; // security clean
      await user.save();
      return res
        .status(401)
        .json({ message: "Refresh token revoked or not recognized" });
    }

    // Remove old refresh token
    await removeRefreshToken(user, refreshToken);

    // Generate new refresh token
    const newRefreshToken = generateRefreshToken(user._id);
    await storeRefreshToken(user, newRefreshToken, {
      userAgent: req.get("User-Agent"),
      ip: req.ip,
    });

    // Generate new access token
    const accessToken = generateAccessToken(user._id);

    // Set new cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const refreshChecker = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "No refresh token" });

  try {
    jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return res.status(200).json({ message: "Refresh token valid" });
  } catch (err) {
    return res.status(401).json({ message: "Refresh token invalid" });
  }
};

// ----------------- LOGOUT (revoke refresh token)
export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (refreshToken) {
      const tokenHash = hashToken(refreshToken);

      const user = await User.findOne({
        "refreshTokens.tokenHash": tokenHash,
      });

      if (user) {
        user.refreshTokens = user.refreshTokens.filter(
          (t) => t.tokenHash !== tokenHash
        );
        user.stayLoggedIn = false;
        user.isLoggedIn = false;
        await user.save();
      }
    }

    // refresh cookie delete
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false, // localhost হলে false
      sameSite: "lax",
      path: "/",
    });

    return res.json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
