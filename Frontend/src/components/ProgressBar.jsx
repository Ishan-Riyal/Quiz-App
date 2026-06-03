import { useSelector } from "react-redux";

function ProgressBar() {
  const { index, questions, points, answer, mode } = useSelector(
    (state) => state.quiz,
  );
  const numQuestions = questions.length;
  const progressPercentage =
    ((index + Number(answer !== null)) / numQuestions) * 100;

  return (
    <header className="w-full mx-auto px-1 shrink-0">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black text-[#1E1B4B] tracking-tighter">
            {index + 1}
          </span>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
            / {numQuestions} Questions
          </span>
        </div>
        {mode !== "theory" && (
          <div className="relative group scale-75 md:scale-90 origin-right">
            <div className="absolute inset-0 bg-[#1E1B4B] rounded-lg translate-x-1 translate-y-1"></div>
            <div className="relative bg-white border-2 border-[#1E1B4B] px-4 py-1.5 rounded-lg font-black text-[10px] text-[#1E1B4B] tracking-widest flex items-center gap-2">
              SCORE <span className="text-[#6366F1] text-base">{points}</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <div
          className="h-full bg-linear-to-r from-[#6366F1] to-[#818CF8] transition-all duration-700 ease-out rounded-full shadow-[0px_0px_10px_rgba(99,102,241,0.3)]"
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="w-full h-full bg-white/20 absolute inset-0 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
}

export default ProgressBar;
