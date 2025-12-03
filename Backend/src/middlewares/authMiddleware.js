import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.split(" ")[1] : null;

    if (!token) return res.status(401).json({ message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    // Retrieve the user but exclude sensitive fields
    const user = await User.findById(decoded.id).select("-password -refreshTokens");
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;  // Attach user to the request object for further usage
    next();  // Move to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};

export const adminOnly = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Not authorized" });
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin only" });
  next();  // Allow admin users to continue to the next middleware or route handler
};
