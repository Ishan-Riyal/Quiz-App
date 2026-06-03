import mongoose from "mongoose";

// Schema for Multiple Choice Questions (MCQs)
const mcqSchema = new mongoose.Schema(
  {
    // Reference to the parent collection (e.g., JavaScript, Python)
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    category: { type: String, required: true },
    type: { type: String, default: "mcq" },
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctOption: { type: String, required: true },
    points: { type: Number, default: 10 },
    // Analytics for difficulty tracking
    totalAttempts: { type: Number, default: 0 },
    wrongAttempts: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export default mongoose.model("Mcq", mcqSchema, "mcq_questions");
