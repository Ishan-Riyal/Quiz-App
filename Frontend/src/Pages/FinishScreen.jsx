import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { restartQuiz } from "../features/quiz/quizSlice";

function FinishScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    points,
    totalPoints,
    questions = [],
    allQuestions = [],
    mode,
    currentPart = 1,
    category,
  } = useSelector((state) => state.quiz);

  const isTheory = mode === "theory";

  const pageSize = mode === "coding" ? 10 : 50;
  const totalParts = Math.ceil(allQuestions.length / pageSize);
  const hasNextPart = currentPart < totalParts;

  // Safety redirect: If questions are cleared, go home.
  // The timeouts in the handlers below prevent this from firing too early.
  useEffect(() => {
    if (questions.length === 0) navigate("/");
  }, [questions, navigate]);

  const handleNextPart = () => {
    // 1. Move to the next screen first
    navigate(`/start/${category}`);

    // 2. Small delay before resetting state so this component unmounts safely
    setTimeout(() => {
      dispatch(restartQuiz());
    }, 50);
  };

  const handleReset = () => {
    // 1. Go home first
    navigate("/", { replace: true });

    // 2. Clear state after we are safely away from this screen
    setTimeout(() => {
      dispatch(restartQuiz());
    }, 100);
  };

  if (questions.length === 0) return null;

  return (
    <div className="flex items-center justify-center h-dvh bg-[#F5F3FF] p-4 font-bold overflow-hidden">
      <div
        className={`w-full max-w-4xl h-full max-h-130 border-4 border-slate-900 rounded-[40px] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] overflow-hidden flex flex-col md:flex-row bg-white ${
          isTheory ? "justify-center" : ""
        }`}
      >
        {/* LEFT SIDE: Score Panel */}
        {!isTheory && (
          <div className="flex-1 bg-[#7C3AED] p-6 flex flex-col justify-center items-center text-center border-b-4 md:border-b-0 md:border-r-4 border-slate-900">
            <div className="bg-white border-2 border-slate-900 px-4 py-1 rounded-full mb-4 -rotate-2 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
              <span className="text-xl font-black uppercase tracking-widest text-slate-900">
                TOTAL SCORE
              </span>
            </div>
            <h2 className="text-8xl md:text-[10rem] font-black text-white leading-none tracking-tighter drop-shadow-[6px_6px_0px_rgba(15,23,42,1)]">
              {totalPoints}
            </h2>
            <p className="text-sm uppercase font-black text-white/80 tracking-widest mt-2">
              Points Saved to Profile
            </p>
          </div>
        )}

        {/* RIGHT SIDE: Summary & Navigation */}
        <div
          className={`flex-1 p-8 flex flex-col justify-center bg-white ${
            isTheory ? "items-center text-center" : ""
          }`}
        >
          <h3 className="text-4xl font-black uppercase italic leading-none mb-2 text-slate-900">
            PART {currentPart} <br />{" "}
            <span className="text-[#7C3AED]">COMPLETE.</span>
          </h3>
          <div
            className={`w-16 h-2 bg-amber-500 rounded-full border-2 border-slate-900 mb-6 ${
              isTheory ? "mx-auto" : ""
            }`}
          ></div>

          {!isTheory && (
            <div className="bg-slate-50 p-4 rounded-2xl border-2 border-slate-900 mb-8">
              <p className="text-[10px] font-black uppercase text-slate-400">
                Section Score
              </p>
              <p className="text-2xl font-black text-slate-900">
                +{points} Points
              </p>
            </div>
          )}

          {isTheory && (
            <p className="mb-8 text-slate-600">
              Great job! You've completed the reading for this section.
            </p>
          )}

          <div className={`space-y-4 ${isTheory ? "w-full max-w-sm" : ""}`}>
            {hasNextPart && (
              <button
                onClick={handleNextPart}
                className="w-full bg-[#7C3AED] text-white py-4 rounded-2xl font-black border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1E1B4B] uppercase text-sm tracking-widest hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Pick Next Section ➡️
              </button>
            )}

            {!isTheory && (
              <button
                onClick={() => navigate("/result")}
                className="w-full bg-[#FBBF24] py-3.5 rounded-2xl font-black border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] uppercase text-xs tracking-widest"
              >
                Detailed Analysis 📊
              </button>
            )}

            <button
              onClick={handleReset}
              className="w-full bg-white text-slate-900 py-3.5 rounded-2xl font-black border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#7C3AED] uppercase text-xs tracking-widest"
            >
              Finish & Exit 🏠
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
