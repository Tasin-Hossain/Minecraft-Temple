import { hashToken } from "../utils/hasToken.js";

export const hasRefreshToken = (user, refreshToken) => {
  const tokenHash = hashToken(refreshToken);
  return user.refreshTokens.some((t) => t.tokenHash === tokenHash);
};
