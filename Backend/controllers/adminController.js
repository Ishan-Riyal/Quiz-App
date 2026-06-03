import Mcq from "../models/McqModel.js";
import Theory from "../models/TheoryModel.js";
import Coding from "../models/CodingModel.js";
import User from "../models/UserModel.js";
import Collection from "../models/CollectionModel.js";
import Score from "../models/ScoreModel.js";

// Helper to get the correct model based on type
const getModel = (type) => {
  const models = {
    mcqs: Mcq,
    theory: Theory,
    coding: Coding,
  };
  return models[type] || null;
};

// Fetch questions for a specific collection and type
export const getQuestionsByCollection = async (req, res) => {
  try {
    const { type, category } = req.params;

    // Find collection by name with case-insensitive search
    const collection = await Collection.findOne({
      name: { $regex: new RegExp(`^${category}$`, "i") },
    });

    if (!collection)
      return res.status(404).json({ message: "Topic not found!" });

    const Model = getModel(type);
    if (!Model) return res.status(400).json({ message: "Invalid type!" });

    const questions = await Model.find({ collectionId: collection._id }).sort({
      createdAt: -1,
    });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Fetch failed", error: error.message });
  }
};

// Add a single question to a collection
export const addQuestion = async (req, res) => {
  try {
    const { type } = req.params;
    const { collectionName, collectionId, ...data } = req.body;
    const Model = getModel(type);

    let finalId = collectionId;
    if (!finalId && collectionName) {
      const col = await Collection.findOne({ name: collectionName });
      finalId = col?._id;
    }

    if (!finalId || finalId === "undefined") {
      return res
        .status(400)
        .json({ message: "Valid Collection (ID or Name) is required!" });
    }

    const question = await Model.create({ ...data, collectionId: finalId });
    res.status(201).json({ message: "Added successfully", question });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all questions of a certain type
export const getAllQuestions = async (req, res) => {
  try {
    const { type } = req.params;
    const Model = getModel(type);
    const data = await Model.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get one question by ID
export const getSingleQuestion = async (req, res) => {
  try {
    const { type, id } = req.params;
    const Model = getModel(type);
    const question = await Model.findById(id);
    if (!question) return res.status(404).json({ message: "Not found" });
    res.json(question);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed" });
  }
};

// Update a question by ID
export const updateQuestion = async (req, res) => {
  try {
    const { type, id } = req.params;
    const Model = getModel(type);
    const updated = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ message: "Updated", updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a question by ID
export const deleteQuestion = async (req, res) => {
  try {
    const { type, id } = req.params;
    const Model = getModel(type);
    await Model.findByIdAndDelete(id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: "Delete failed" });
  }
};

// Get counts for admin dashboard
export const getAdminStats = async (req, res) => {
  try {
    const [u, m, t, c] = await Promise.all([
      User.countDocuments(),
      Mcq.countDocuments(),
      Theory.countDocuments(),
      Coding.countDocuments(),
    ]);
    res.json({ users: u, mcqs: m, theory: t, coding: c });
  } catch (err) {
    res.status(500).json({ message: "Stats error" });
  }
};

// Get list of all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "User fetch failed" });
  }
};

// Remove a user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user?.role === "admin")
      return res.status(400).json({ message: "Cannot delete admin" });
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};

// Switch user role between admin and user
export const updateUserRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.role = user.role === "admin" ? "user" : "admin";
    await user.save();
    res.json({ message: "Role updated", role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Role update failed" });
  }
};

// Add multiple questions via JSON import
export const addMultipleQuestions = async (req, res) => {
  try {
    const { type } = req.params;
    const { questions, collectionName } = req.body;

    const col = await Collection.findOne({ name: collectionName });
    if (!col) return res.status(404).json({ message: "Collection not found" });

    const Model = getModel(type);

    const finalData = questions.map((q) => {
      const base = {
        collectionId: col._id,
        category: (q.category || "GENERAL").toUpperCase(),
      };

      if (type === "mcqs") {
        return {
          ...base,
          question: q.question || q.title,
          options: q.options || [],
          correctOption: Number(q.correctOption) || 0,
        };
      }

      if (type === "theory") {
        return {
          ...base,
          title: q.title || q.question,
          answer: q.answer || "",
        };
      }

      if (type === "coding") {
        return {
          ...base,
          title: q.title || q.question,
          description: q.description || "",
          codeSnippet: q.codeSnippet || "",
        };
      }

      return { ...base, ...q };
    });

    await Model.insertMany(finalData);
    res.status(201).json({ message: "Bulk added!", success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete multiple questions by IDs
export const deleteMultipleQuestions = async (req, res) => {
  try {
    const { type } = req.params;
    const { ids } = req.body;
    const Model = getModel(type);
    await Model.deleteMany({ _id: { $in: ids } });
    res.json({ message: "Bulk delete success!", success: true });
  } catch (err) {
    res.status(500).json({ message: "Bulk delete failed" });
  }
};

// Calculate performance stats per collection
export const getDashboardStats = async (req, res) => {
  try {
    const collections = await Collection.find().lean();
    if (!collections) return res.status(200).json([]);

    const stats = await Promise.all(
      collections.map(async (col) => {
        const result = await Score.aggregate([
          {
            $match: {
              category: { $regex: new RegExp(`^${col.name}$`, "i") },
            },
          },
          {
            $group: {
              _id: null,
              avgRawScore: { $avg: "$score" },
              totalAttempts: { $sum: 1 },
            },
          },
        ]);

        const maxPossibleScore = 10;
        const rawAvg = result.length > 0 ? result[0].avgRawScore : 0;
        const percentage = Math.round((rawAvg / maxPossibleScore) * 100);

        return {
          _id: col._id,
          name: col.name,
          avgScore: percentage > 100 ? 100 : percentage,
          totalAttempts: result.length > 0 ? result[0].totalAttempts : 0,
        };
      }),
    );

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Enable or disable a user account
export const toggleUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.status(200).json({
      message: `User is now ${user.isActive ? "Active" : "Deactivated"}`,
      isActive: user.isActive,
    });
  } catch (error) {
    res.status(500).json({ message: "Status update failed" });
  }
};
