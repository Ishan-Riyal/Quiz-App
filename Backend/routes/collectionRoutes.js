import express from "express";

import {
  createCollection,
  getAllCollections,
  deleteCollection,
} from "../controllers/collectionController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route to fetch all collections
router.get("/all", getAllCollections);

// Protect all following routes: requires valid token and admin role
router.use(protect, admin);

router.post("/add", createCollection);
router.delete("/:id", deleteCollection);

export default router;
