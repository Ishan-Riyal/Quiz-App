import express from "express";
import { upload } from "../config/cloudinary.js";

import { protect } from "../middleware/authMiddleware.js";
import {
  getQuestionsByCollection,
  saveScore,
  getLeaderboard,
  getMyHistory,
  getUniqueCategories,
  updateProfilePic,
} from "../controllers/userController.js";

const router = express.Router();

// --- Questions ---

// Fetch questions for a specific collection and content type
router.get("/collection/:collectionId", protect, getQuestionsByCollection);

// --- Scoring & Stats ---

router.post("/save-score", protect, saveScore);
router.get("/leaderboard", protect, getLeaderboard);
router.get("/categories", getUniqueCategories);

// --- User Profile ---

router.get("/history", protect, getMyHistory);
// Upload profile picture to Cloudinary
router.post("/profile-pic", protect, upload.single("image"), updateProfilePic);

export default router;
