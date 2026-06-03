import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import {
  register,
  login,
  getMe,
  logout,
} from "../controllers/authController.js";

const router = express.Router();

// Routes for user registration and authentication
router.post("/register", register);
router.post("/login", login);
// Protected route to get current user profile
router.get("/me", protect, getMe);
router.post("/logout", logout);

export default router;
