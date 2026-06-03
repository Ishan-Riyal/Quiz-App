import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

// Middleware to verify JWT and protect routes
export const protect = async (req, res, next) => {
  let token;

  // Extract token from Authorization header or Cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify token validity
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user details excluding the password
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User no longer exists" });
    }

    // Ensure the user account is not blocked
    if (user.isBlocked) {
      return res
        .status(403)
        .json({ message: "Account is blocked. Contact admin." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);

    // Specific handling for expired tokens
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Session expired, please login again" });
    }

    res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

// Middleware to restrict access to admin users only
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") next();
  else res.status(403).json({ message: "Admin access only" });
};
