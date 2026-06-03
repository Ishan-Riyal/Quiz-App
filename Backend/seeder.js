import mongoose from "mongoose";
import dotenv from "dotenv";

import Mcq from "./models/McqModel.js";
import Theory from "./models/TheoryModel.js";
import Coding from "./models/CodingModel.js";
import Score from "./models/ScoreModel.js";

import connectDB from "./config/db.js";

import mcqQuestions from "./data/mcq.js";
import theoryQuestions from "./data/theory.js";
import codingQuestions from "./data/coding.js";

dotenv.config();

const importData = async () => {
  try {
    await connectDB();

    await Mcq.deleteMany();
    await Theory.deleteMany();
    await Coding.deleteMany();
    await Score.deleteMany();

    await Mcq.insertMany(mcqQuestions);
    await Theory.insertMany(theoryQuestions);
    await Coding.insertMany(codingQuestions);

    console.log("Data & Scores Reset Successfully! 🚀");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
