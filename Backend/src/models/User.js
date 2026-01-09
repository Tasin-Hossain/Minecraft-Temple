import mongoose from "mongoose";

// Embedded 2FA Schema
const TwoFASchema = new mongoose.Schema(
  {
    enabled: { type: Boolean, default: false },
    secret: { type: String }, // base32 encoded secret for TOTP
    backupCodes: [{ type: String }], // optional: for recovery codes
  },
  { _id: false }
);

// Refresh Token Schema (for blacklisting/revoking)
const RefreshTokenSchema = new mongoose.Schema(
  {
    tokenHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 60 * 60 * 24 * 30 }, // auto-expire after 30 days
    userAgent: { type: String },
    ip: { type: String },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [30, "Username too long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
    },

    // Password reset
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },

    // Profile
    avatar: {
      type: String,
      default: "", // can store filename or external URL
    },
    // Role & Status
    role: {
      type: String,
      enum: ["member", "moderator", "admin"],
      default: "member",
    },
    status: {
      type: String,
      enum: ["active", "suspended", "banned"],
      default: "active",
    },

    // Auth State
    isLoggedIn: { type: Boolean, default: false },

    // Email verification
    isVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String, default: null },
    emailVerificationTokenExpires: { type: Date, default: null },

    // 2FA
    twoFactor: { type: TwoFASchema, default: () => ({}) },

    // Refresh Tokens (for JWT revocation)
    refreshTokens: { type: [RefreshTokenSchema], default: [] },

    // Economy
    balance: {
      type: Number,
      default: 0,
      min: [0, "Balance cannot be negative"],
    },

    // Stats
    resourcesCount: { type: Number, default: 0 },
    totalEarnings: { type: Number, default: 0 },

    // Badges & Profile Reference
    // profile: { type: ObjectId, ref: "Profile" },
    // badges: [{ type: ObjectId, ref: "Badge" }],

    // Activity
    lastLogin: { type: Date },

    // Settings / Preferences (from your new fields)
    receiveUpdates: {
      type: Boolean,
      default: false, // email notifications, newsletters
    },
    agreedToTerms: {
      type: Boolean,
      default: false, // must be true after registration
    },
    stayLoggedIn: {
      type: Boolean,
      default: false, // "Keep me logged in" option
    },
    // Social login
    oauthProviders: [
      {
        provider: { type: String, enum: ["google", "discord", "github"] },
        providerId: { type: String },
      },
    ],
  },
  { timestamps: true }
);
// Indexes for performance
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ role: 1 });
userSchema.index({ status: 1 });
userSchema.index({ "refreshTokens.tokenHash": 1 });

// Virtual for avatar URL (if stored locally)
userSchema.virtual("avatarUrl").get(function () {
  if (!this.avatar) return null;
  if (this.avatar.startsWith("http")) return this.avatar;
  return `/uploads/avatars/${this.avatar}`;
});
export default mongoose.model("User", userSchema);
