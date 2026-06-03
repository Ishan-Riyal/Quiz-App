import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion, finishQuiz } from "../features/quiz/quizSlice";

function NextButton() {
  const dispatch = useDispatch();
  const { answer, index, questions } = useSelector((state) => state.quiz);
  const numQuestions = questions.length;
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    setTimerDone(false);
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  const isLast = index === numQuestions - 1;
  const hasAnswered = answer !== null;
  const canShow = hasAnswered || timerDone;

  if (!canShow) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl">
        <div className="h-1.5 w-1.5 bg-slate-300 rounded-full animate-ping"></div>
        <span className="text-slate-400 font-black text-[8px] uppercase tracking-widest">
          Wait...
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={() => dispatch(isLast ? finishQuiz() : nextQuestion())}
      className="group relative"
    >
      <div
        className={`absolute inset-0 rounded-xl translate-x-0.5 translate-y-0.5
        ${isLast ? "bg-[#9F1239]" : "bg-[#1E1B4B]"}`}
      ></div>

      <div
        className={`relative border-2 px-5 py-2 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all active:scale-95
        ${
          isLast
            ? "bg-[#F43F5E] border-[#1E1B4B] text-white"
            : "bg-[#6366F1] border-[#1E1B4B] text-white"
        }`}
      >
        <span className="flex items-center gap-2">
          {isLast ? "Finish" : "Next"}
          <span>{isLast ? "🏁" : "→"}</span>
        </span>
      </div>
    </button>
  );
}

export default NextButton;
