import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  addQuestion,
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
  getAdminStats,
  getAllUsers,
  deleteUser,
  updateUserRole,
  addMultipleQuestions,
  deleteMultipleQuestions,
  getQuestionsByCollection,
  getDashboardStats,
  toggleUserStatus,
} from "../controllers/adminController.js";

const router = express.Router();

// Middleware to ensure all routes are protected and restricted to admins
router.use(protect, admin);

// --- Question Management ---

// Fetch questions by type and category name
router.get("/collection/:type/:category", getQuestionsByCollection);

router.post("/add/:type", addQuestion);
router.get("/get/:type", getAllQuestions);
router.get("/get-single/:type/:id", getSingleQuestion);
router.put("/update/:type/:id", updateQuestion);
router.delete("/delete/:type/:id", deleteQuestion);

// --- Bulk Operations ---
router.post("/multiple-add/:type", addMultipleQuestions);
router.post("/multiple-delete/:type", deleteMultipleQuestions);

// --- Admin Dashboard & Users ---
router.get("/stats", getAdminStats);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/role/:id", updateUserRole);
router.get("/analytics", getDashboardStats);

// Update user active/inactive status
router.patch("/toggle-status/:id", toggleUserStatus);

export default router;
