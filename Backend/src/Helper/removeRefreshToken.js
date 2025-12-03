import { hashToken } from "../utils/hasToken.js";

export const removeRefreshToken = async (user, refreshToken) => {
  const tokenHash = hashToken(refreshToken);
  user.refreshTokens = user.refreshTokens.filter(
    (t) => t.tokenHash !== tokenHash
  );
  await user.save();
};
