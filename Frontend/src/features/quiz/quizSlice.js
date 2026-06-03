import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuizData = createAsyncThunk(
  "quiz/fetchCategory",
  async ({ category, type }, { rejectWithValue }) => {
    try {
      const res = await fetch(`/api/quiz/${category}?type=${type}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Fetch failed");
      }

      const data = await res.json();
      return { data, type, categoryName: category };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  allQuestions: [],
  questions: [],
  category: "",
  status: "loading",
  mode: null,
  index: 0,
  answer: null,
  userAnswers: [], // This will now hold answers for ALL questions
  serverCorrectOption: null,
  points: 0,
  totalPoints: 0,
  currentPart: 1,
  highScore: 0,
  time: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz(state, action) {
      const partNum = action.payload || 1;
      const pageSize = state.mode === "coding" ? 10 : 50;
      const start = (partNum - 1) * pageSize;
      const end = start + pageSize;

      state.questions = state.allQuestions.slice(start, end);
      state.status = "active";
      state.index = 0;
      state.currentPart = partNum;
      state.answer = null;
      state.serverCorrectOption = null;

      // FIX: Initialize userAnswers for ALL questions only once
      if (state.userAnswers.length === 0) {
        state.userAnswers = new Array(state.allQuestions.length).fill(null);
      }

      state.time =
        state.mode === "mcqs" ? 60 : state.mode === "theory" ? 120 : 1200;
      state.points = 0;
    },

    newAnswer(state, action) {
      const pageSize = state.mode === "coding" ? 10 : 50;
      // FIX: Calculate Global Index so Part 2 doesn't overwrite Part 1
      const globalIndex = (state.currentPart - 1) * pageSize + state.index;

      state.answer = action.payload.selected;
      state.serverCorrectOption = action.payload.correct;

      // Save to the specific spot in the big array
      state.userAnswers[globalIndex] = action.payload.selected;

      if (action.payload.selected === action.payload.correct) {
        const gain = state.questions[state.index].points || 10;
        state.points += gain;
        state.totalPoints += gain;
      }
    },

    nextQuestion(state) {
      state.index++;
      state.answer = null;
      state.serverCorrectOption = null;
      state.time =
        state.mode === "mcqs" ? 60 : state.mode === "theory" ? 120 : 1200;
    },

    tick(state) {
      if (state.time > 0) state.time--;
      if (state.time === 0 && state.status === "active") {
        const isLastQuestion = state.index === state.questions.length - 1;
        if (isLastQuestion) {
          state.status = "finish";
          state.highScore = Math.max(state.points, state.highScore);
        } else {
          state.index++;
          state.answer = null;
          state.serverCorrectOption = null;
          state.time =
            state.mode === "mcqs" ? 60 : state.mode === "theory" ? 120 : 1200;
        }
      }
    },

    finishQuiz(state) {
      state.status = "finish";
      state.highScore = Math.max(state.points, state.highScore);
    },

    restartQuiz(state) {
      return {
        ...initialState,
        allQuestions: state.allQuestions,
        category: state.category,
        mode: state.mode,
        status: "ready",
      };
    },

    goToLast(state) {
      if (state.questions?.length > 0) {
        state.index = state.questions.length - 1;
        state.answer = null;
        state.serverCorrectOption = null;
        state.time = 10;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.allQuestions = action.payload.data;
        state.questions = [];
        state.category = action.payload.categoryName;
        state.mode = action.payload.type;
        state.status = "ready";
        state.totalPoints = 0;
        state.currentPart = 1;
        // Pre-fill answers with null based on total question count
        state.userAnswers = new Array(action.payload.data.length).fill(null);
      })
      .addCase(fetchQuizData.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const {
  startQuiz,
  newAnswer,
  nextQuestion,
  tick,
  finishQuiz,
  restartQuiz,
  goToLast,
} = quizSlice.actions;

export default quizSlice.reducer;
