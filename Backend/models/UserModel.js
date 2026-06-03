import mongoose from "mongoose";

// Schema for user accounts and their performance stats
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    // Stores the URL of the image from Cloudinary
    profilePic: { type: String, default: "" },
    bestScoreMcq: { type: Number, default: 0 },
    bestScoreCoding: { type: Number, default: 0 },
    username: { type: String },
    // Used for blocking or deactivating user access
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
