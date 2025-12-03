import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET, { expiresIn: "15m" });

export const generateRefreshToken = (userId, expiry = "30d") => {
  return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: expiry,
  });
};

export const generateTempToken = (userId) =>
  jwt.sign({ id: userId, temp: true }, process.env.JWT_TEMP_SECRET, { expiresIn: "5m" });

export const generateEmailToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_EMAIL_SECRET, { expiresIn: "1d" });
