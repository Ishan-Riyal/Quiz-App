import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Added this
import { startQuiz } from "../features/quiz/quizSlice";

function StartScreen() {
  const { allQuestions, mode, category } = useSelector((state) => state.quiz); // Added category
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const pageSize = mode === "coding" ? 10 : 50;
  const totalParts = Math.ceil(allQuestions.length / pageSize);
  const parts = Array.from({ length: totalParts }, (_, i) => i + 1);

  // Function to handle clicking a part
  const handleSelectPart = (num) => {
    dispatch(startQuiz(num));

    // This part moves the user to the actual quiz screen
    if (mode === "mcqs") navigate(`/mcqs/${category}`);
    if (mode === "theory") navigate(`/theory/${category}`);
    if (mode === "coding") navigate(`/coding/${category}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-10">
      <h1 className="text-4xl font-black uppercase italic text-slate-900 mb-2">
        Ready to <span className="text-[#7C3AED]">Start?</span>
      </h1>
      <p className="text-slate-500 font-bold mb-8">
        Total {allQuestions.length} questions found. Select a part to begin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {parts.map((num) => {
          const startRange = (num - 1) * pageSize + 1;
          const endRange = Math.min(num * pageSize, allQuestions.length);

          return (
            <button
              key={num}
              onClick={() => handleSelectPart(num)} // Changed to our new function
              className="group relative bg-white border-4 border-slate-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_#1E1B4B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-left"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="block text-sm font-black text-[#7C3AED] uppercase">
                    Section {num}
                  </span>
                  <span className="text-2xl font-black text-slate-900">
                    Part {num}
                  </span>
                </div>
                <div className="bg-slate-100 px-3 py-1 border-2 border-slate-900 rounded-lg text-xs font-black">
                  Q {startRange} - {endRange}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default StartScreen;
