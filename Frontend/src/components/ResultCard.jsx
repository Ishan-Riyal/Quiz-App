import React from "react";

const ResultCard = ({ item }) => {
  // Logic to handle if index is -1 or missing
  const correctText =
    item.correctIdx !== -1 ? item.options[item.correctIdx] : "N/A";

  return (
    <div className="bg-white p-6 rounded-4xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_#7C3AED] mb-6">
      {/* Header with Number and Status */}
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-10 flex items-center justify-center bg-[#1E1B4B] text-white rounded-xl text-xs font-black border-2 border-slate-900">
          {item.originalNo}
        </span>
        <span
          className={`text-[10px] px-3 py-1 rounded-full border-2 border-slate-900 font-black uppercase ${
            item.isCorrect
              ? "bg-[#10B981] text-white"
              : item.isSkipped
                ? "bg-amber-400 text-slate-900"
                : "bg-[#E11D48] text-white"
          }`}
        >
          {item.isCorrect
            ? "● Correct"
            : item.isSkipped
              ? "● Skipped"
              : "● Incorrect"}
        </span>
      </div>

      <h4 className="text-xl font-black text-slate-900 mb-6 italic leading-tight">
        {item.question}
      </h4>

      <div className="space-y-4">
        {/* ALWAYS SHOW: Correct Answer */}
        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border-2 border-[#10B981]">
          <span className="text-[10px] font-black text-[#064E3B] uppercase tracking-widest">
            Correct Answer:
          </span>
          <span className="text-sm font-black text-emerald-900">
            {correctText}
          </span>
        </div>

        {/* ALWAYS SHOW: Your Selection */}
        <div
          className={`flex items-center justify-between p-4 rounded-2xl border-2 ${
            item.isCorrect
              ? "bg-emerald-50 border-[#10B981]" // Green if correct
              : item.isSkipped
                ? "bg-amber-50 border-amber-400" // Amber if skipped
                : "bg-rose-50 border-[#E11D48]" // Red if wrong
          }`}
        >
          <span
            className={`text-[10px] font-black uppercase tracking-widest ${
              item.isCorrect
                ? "text-[#064E3B]"
                : item.isSkipped
                  ? "text-amber-700"
                  : "text-rose-700"
            }`}
          >
            Your Selection:
          </span>
          <span
            className={`text-sm font-black ${
              item.isCorrect
                ? "text-emerald-900"
                : item.isSkipped
                  ? "text-amber-900"
                  : "text-rose-900"
            }`}
          >
            {item.isSkipped ? "Skipped" : item.userSelected || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
