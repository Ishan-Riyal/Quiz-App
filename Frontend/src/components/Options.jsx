import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { newAnswer } from "../features/quiz/quizSlice";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

function Options({ currentQuestion }) {
  const dispatch = useDispatch();
  const { answer, serverCorrectOption } = useSelector((state) => state.quiz);

  if (!currentQuestion || !currentQuestion.options) return null;
  const hasAnswered = answer !== null;

  const checkAnswer = async (optionValue) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_BASE}/api/quiz/mcqs/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          questionId: currentQuestion._id,
          selectedOption: optionValue,
        }),
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      dispatch(
        newAnswer({ selected: optionValue, correct: data.correctOption }),
      );
    } catch (err) {
      console.error("Selection failed:", err);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2.5 w-full">
      {currentQuestion.options.map((option, idx) => {
        const isCurrentCorrect =
          hasAnswered &&
          String(option).trim() === String(serverCorrectOption).trim();

        const isSelected = option === answer;
        const isWrong = hasAnswered && isSelected && !isCurrentCorrect;

        return (
          <button
            key={idx}
            onClick={() => checkAnswer(option)}
            disabled={hasAnswered}
            className={`
              relative w-[95%] text-left p-3.5 rounded-xl font-black text-xs transition-all duration-300 border-2 flex items-center group
              ${!hasAnswered ? "bg-white border-slate-100 text-[#1E1B4B] hover:border-[#6366F1] hover:pl-6 hover:bg-indigo-50/30" : ""}
              ${isCurrentCorrect ? "bg-[#D1FAE5] border-[#10B981] text-[#064E3B] shadow-[3px_3px_0px_0px_#10B981]" : ""}
              ${isWrong ? "bg-[#FFE4E6] border-[#F43F5E] text-[#9F1239] shadow-[3px_3px_0px_0px_#F43F5E]" : ""}
              ${hasAnswered && !isCurrentCorrect && !isSelected ? "opacity-40 grayscale-[0.5] border-slate-100" : ""}
            `}
          >
            <span
              className={`
              mr-3 h-6 w-6 rounded-md flex items-center justify-center text-[10px] transition-colors shrink-0
              ${isCurrentCorrect ? "bg-[#10B981] text-white" : ""}
              ${isWrong ? "bg-[#F43F5E] text-white" : ""}
              ${!hasAnswered ? "bg-slate-100 text-[#6366F1]" : ""}
              ${hasAnswered && !isCurrentCorrect && !isSelected ? "bg-slate-200" : ""}
            `}
            >
              {idx + 1}
            </span>

            <span className="flex-1 uppercase tracking-tight truncate">
              {option}
            </span>

            {isCurrentCorrect && (
              <span className="ml-2 text-lg animate-bounce text-[#10B981]">
                ✓
              </span>
            )}
            {isWrong && (
              <span className="ml-2 text-lg animate-shake text-[#F43F5E]">
                ✕
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
