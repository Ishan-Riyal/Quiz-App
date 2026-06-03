import Mcq from "../models/McqModel.js";
import Theory from "../models/TheoryModel.js";
import Coding from "../models/CodingModel.js";
import Score from "../models/ScoreModel.js";
import Collection from "../models/CollectionModel.js";

// Helper to return model based on type string
const getModel = (type) => {
  if (type === "mcqs") return Mcq;
  if (type === "theory") return Theory;
  if (type === "coding") return Coding;
  return null;
};

// Fisher-Yates algorithm to shuffle array elements
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Fetch questions by collection name and shuffle both questions and options
export const getQuestionsByCollection = async (req, res) => {
  try {
    const { category } = req.params;
    const { type } = req.query;

    const collection = await Collection.findOne({ name: category });
    if (!collection)
      return res.status(404).json({ message: "Collection not found!" });

    const Model = getModel(type);
    if (!Model) return res.status(400).json({ message: "Invalid type!" });

    // Use lean() for performance and to allow object modification
    const questions = await Model.find({ collectionId: collection._id })
      .select("-correctOption")
      .lean();

    let shuffledQuestions = shuffleArray(questions);

    // Shuffle options for MCQ type and ensure correctOption is hidden
    if (type === "mcqs") {
      shuffledQuestions = shuffledQuestions.map((q) => {
        return {
          ...q,
          options: shuffleArray(q.options),
          correctOption: undefined,
        };
      });
    }

    res.status(200).json(shuffledQuestions);
  } catch (error) {
    res.status(500).json({ message: "Fetch fail", error: error.message });
  }
};

// Validate MCQ answer by comparing option text instead of index
export const checkMcqAnswer = async (req, res) => {
  const { questionId, selectedOption } = req.body;
  try {
    const question = await Mcq.findById(questionId);
    if (!question)
      return res.status(404).json({ message: "Question not found" });

    // Convert stored index to actual text value
    const actualCorrectText = question.options[question.correctOption];
    const isCorrect = actualCorrectText === selectedOption;

    // Update analytics counters
    await Mcq.findByIdAndUpdate(questionId, {
      $inc: {
        totalAttempts: 1,
        wrongAttempts: isCorrect ? 0 : 1,
      },
    });

    res.json({ isCorrect, correctOption: actualCorrectText });
  } catch (error) {
    res.status(500).json({ message: "Error checking answer" });
  }
};

// Get top 5 questions with most wrong attempts
export const getHardestQuestions = async (req, res) => {
  try {
    const questions = await Mcq.find({ totalAttempts: { $gt: 0 } })
      .sort({ wrongAttempts: -1 })
      .limit(5);

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

// Reveal theory answer
export const getTheoryReveal = async (req, res) => {
  try {
    const question = await Theory.findById(req.params.id);
    res.json({ answer: question.answer });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

// Save user quiz score
export const saveScore = async (req, res) => {
  try {
    const { name, score, type } = req.body;
    const newScore = new Score({ name, score, category: type });
    await newScore.save();
    res.status(201).json({ message: "Saved" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

// Fetch correct options for a list of questions
export const getReviewQuestions = async (req, res) => {
  try {
    const { questionIds } = req.body;
    const questions = await Mcq.find({ _id: { $in: questionIds } });

    // Send back the TEXT of the answer
    const answers = questionIds.map((id) => {
      const q = questions.find((quest) => quest._id.toString() === id);
      return q ? q.options[q.correctOption] : null;
    });

    res.status(200).json({ answers });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};
