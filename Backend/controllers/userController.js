import Mcq from "../models/McqModel.js";
import Theory from "../models/TheoryModel.js";
import Coding from "../models/CodingModel.js";
import User from "../models/UserModel.js";
import Score from "../models/ScoreModel.js";

// Helper to get correct model dynamically based on question type
const getModel = (type) => {
  const models = { mcqs: Mcq, theory: Theory, coding: Coding };
  return models[type] || null;
};

// Fetch questions for a specific collection and type
export const getQuestionsByCollection = async (req, res) => {
  try {
    const { collectionId } = req.params;
    const { type } = req.query;
    const Model = getModel(type);

    if (!Model)
      return res.status(400).json({ message: "Invalid question type" });

    const questions = await Model.find({ collectionId });
    res.status(200).json(questions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to load questions", error: err.message });
  }
};

// Save user quiz score and update high score history
export const saveScore = async (req, res) => {
  try {
    const { score, category, incorrectAnswers, type } = req.body;

    if (!req.user?._id)
      return res.status(401).json({ message: "Login required!" });

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Create a new score record in the database
    await Score.create({
      user: req.user._id,
      name: user.name,
      score: score,
      points: score,
      category: category || "Quiz",
      type: type || "coding",
      incorrectAnswers: incorrectAnswers || [],
    });

    // Determine which best score field to update based on type
    const scoreField =
      type === "mcq" || type === "mcqs" ? "bestScoreMcq" : "bestScoreCoding";

    // Update high score if current score is higher
    if (score > (user[scoreField] || 0)) {
      user[scoreField] = score;
      await user.save();
      return res
        .status(200)
        .json({ message: "History saved & New High Score!", success: true });
    }

    res.status(200).json({ message: "History saved!", success: true });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Fetch top scores for the leaderboard based on type and category
export const getLeaderboard = async (req, res) => {
  try {
    const { type, category } = req.query;

    const topScores = await Score.find({
      type: type || "mcqs",
      category: category,
    })
      .sort({ score: -1 })
      .limit(10)
      .populate("user", "name username");

    res.status(200).json(topScores);
  } catch (error) {
    res.status(500).json({ message: "Failed", error: error.message });
  }
};

// Fetch latest 10 quiz results for the logged-in user
export const getMyHistory = async (req, res) => {
  try {
    const history = await Score.find({ user: req.user._id })
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "History fetch failed" });
  }
};

// Get list of all unique quiz categories
export const getUniqueCategories = async (req, res) => {
  try {
    let categories = await Score.distinct("category");

    // Remove empty or null categories
    categories = categories.filter((cat) => cat && cat.trim() !== "");

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// Update user profile picture with Cloudinary URL
export const updateProfilePic = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { profilePic: req.file.path },
      { new: true },
    ).select("-password");

    res.json({
      message: "Profile updated",
      profilePic: updatedUser.profilePic,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed" });
  }
};
