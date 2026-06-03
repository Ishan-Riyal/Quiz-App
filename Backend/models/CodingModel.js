import mongoose from "mongoose";

// Schema for coding challenges/questions
const codingSchema = new mongoose.Schema(
  {
    // Reference to the parent collection
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    category: { type: String, required: true },
    type: { type: String, default: "coding" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    codeSnippet: { type: String },
    points: { type: Number, default: 20 },
  },
  { timestamps: true }, // Automatically manages createdAt and updatedAt
);

// Exporting the model with a specific collection name
export default mongoose.model("Coding", codingSchema, "coding_challenges");
