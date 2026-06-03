import express from "express";
import {
  getQuestionsByCollection,
  checkMcqAnswer,
  getTheoryReveal,
  saveScore,
  getReviewQuestions,
  getHardestQuestions,
} from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Fetch questions with high failure rates for analytics
router.get("/analytics/hardest", protect, getHardestQuestions);

// Routes for quiz participation and scoring
router.post("/mcq/all-answers", protect, getReviewQuestions);
router.get("/:category", protect, getQuestionsByCollection);
router.post("/mcqs/check", protect, checkMcqAnswer);
router.get("/theory/reveal/:id", protect, getTheoryReveal);
router.post("/save-score", protect, saveScore);

export default router;
