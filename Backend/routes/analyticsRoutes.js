import express from "express";
import { getHardestQuestions } from "../controllers/analyticsController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route to fetch questions with high failure rates, protected by authentication
router.get("/hardest", protect, getHardestQuestions);

export default router;
