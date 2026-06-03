import Score from "../models/ScoreModel.js";
import Mcq from "../models/McqModel.js";

// Fetch top 5 questions with the highest failure rate
export const getHardestQuestions = async (req, res) => {
  try {
    const report = await Score.aggregate([
      // Deconstruct incorrectAnswers array
      { $unwind: "$incorrectAnswers" },

      // Group by question ID and count occurrences
      {
        $group: {
          _id: "$incorrectAnswers",
          failCount: { $sum: 1 },
        },
      },

      // Sort by fail count in descending order and limit to 5
      { $sort: { failCount: -1 } },
      { $limit: 5 },

      // Join with mcqs collection to fetch question text
      {
        $lookup: {
          from: "mcqs",
          localField: "_id",
          foreignField: "_id",
          as: "details",
        },
      },

      // Flatten the details array
      { $unwind: "$details" },

      // Select specific fields for the response
      {
        $project: {
          _id: 1,
          failCount: 1,
          question: "$details.question",
          category: "$details.category",
        },
      },
    ]);

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

// Fetch correct answers for specific questions in the provided order
export const getReviewQuestions = async (req, res) => {
  try {
    const { questionIds } = req.body;

    // Fetch all relevant questions
    const questions = await Mcq.find({ _id: { $in: questionIds } });

    // Map correct options to match the sequence of provided IDs
    const sortedAnswers = questionIds.map((id) => {
      const foundQuestion = questions.find(
        (q) => q._id.toString() === id.toString(),
      );
      return foundQuestion ? foundQuestion.correctOption : null;
    });

    res.status(200).json({ answers: sortedAnswers });
  } catch (err) {
    res.status(500).json({ message: "Server Error: Could not sort answers" });
  }
};
