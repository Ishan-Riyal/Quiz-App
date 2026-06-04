import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:8173",
      "https://quiz-app-phi-ochre.vercel.app",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  }),
);

// Routes setup
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/analytics", analyticsRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server on port:${port}`));
