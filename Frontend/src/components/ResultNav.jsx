import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { restartQuiz } from "../features/quiz/quizSlice";

const ResultNav = ({ category, onExport }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-black tracking-tight uppercase">
          {category} <span className="text-[#7C3AED]">Analytics</span>
        </h1>
        <div className="flex gap-3">
          <button
            onClick={onExport}
            className="bg-rose-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-rose-600 transition-all flex items-center gap-2"
          >
            📄 PDF Report
          </button>
          <button
            onClick={() => {
              dispatch(restartQuiz());
              navigate("/");
            }}
            className="bg-[#7C3AED] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-200"
          >
            New Quiz
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ResultNav;
