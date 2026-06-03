import mongoose from "mongoose";

// Schema to organize questions into specific topics or groups
const collectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },

    // Updated: Added "all" and set it as the default value
    baseType: {
      type: String,
      enum: ["mcqs", "theory", "coding", "all"],
      default: "all",
      required: false,
    },

    // Assuming you have a user reference for who created it
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Collection = mongoose.model("Collection", collectionSchema);

// This default export matches your controller import
export default Collection;
