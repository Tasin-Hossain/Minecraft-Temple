import crypto from "crypto";

/**
 * Hash a token using SHA256
 * @param {string} token
 * @returns {string} hex hash
 */
export const hashToken = (token) => {
  return crypto.createHash("sha256").update(token).digest("hex");
};
