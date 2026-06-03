import mongoose from "mongoose";

// Schema to record quiz results and user performance history
const scoreSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  // Distinguishes between quiz types like 'mcqs' or 'coding'
  type: { type: String, default: "coding" },
  // Tracks IDs of questions answered incorrectly
  incorrectAnswers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mcq" }],
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Score = mongoose.models.Score || mongoose.model("Score", scoreSchema);
export default Score;
