import mongoose from "mongoose";

// Schema for descriptive/theoretical questions and answers
const theorySchema = new mongoose.Schema(
  {
    // Reference to the main topic collection
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    category: { type: String, required: true },
    type: { type: String, default: "theory" },
    title: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true },
);

// Exports model with a specific collection name in MongoDB
export default mongoose.model("Theory", theorySchema, "theory_questions");
