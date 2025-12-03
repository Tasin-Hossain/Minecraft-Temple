import { hashToken } from "../utils/hasToken.js";

export const storeRefreshToken = async (user, refreshToken, meta = {}) => {
  const tokenHash = hashToken(refreshToken);
  user.refreshTokens.push({
    tokenHash,
    createdAt: new Date(),
    userAgent: meta.userAgent || "",
    ip: meta.ip || "",
  });
  await user.save();
};
