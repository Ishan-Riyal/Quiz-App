import { useSelector } from "react-redux";
import { useReveal } from "../hooks/useReveal";
import Options from "./Options";

function Question() {
  const { questions, index, mode } = useSelector((state) => state.quiz);
  const question = questions[index];
  const { revealedData, loading, handleReveal } = useReveal(
    question?._id,
    mode,
  );

  if (!question) return null;

  return (
    <div className="w-full h-full flex flex-col animate-in fade-in duration-500">
      <div className="mb-3 shrink-0 flex items-center gap-2">
        <span className="bg-indigo-50 text-[#6366F1] border border-indigo-100 font-black text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full">
          {question.category || mode}
        </span>
        <div className="h-px flex-1 bg-slate-100"></div>
      </div>

      <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#1E1B4B] mb-6 leading-tight tracking-tight shrink-0">
        {mode === "mcqs" ? question.question : question.title}
      </h2>

      <div className="w-full flex-1 overflow-y-auto no-scrollbar">
        {mode === "mcqs" && (
          <div className="animate-in slide-in-from-bottom-2 duration-500 pb-2">
            <Options currentQuestion={question} />
          </div>
        )}

        {mode === "theory" && (
          <div className="mt-2">
            {!revealedData ? (
              <button
                onClick={handleReveal}
                disabled={loading}
                className="group relative w-[95%]"
              >
                <div className="absolute  inset-0 bg-[#1E1B4B] rounded-xl translate-x-1 translate-y-1"></div>
                <div className="relative  bg-[#6366F1] text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest border-2 border-[#1E1B4B]">
                  {loading ? "Fetching..." : "Reveal Answer"}
                </div>
              </button>
            ) : (
              <div className="p-4 rounded-2xl border-2 border-slate-50 bg-[#F5F3FF] text-[#1E1B4B] text-md leading-relaxed whitespace-pre-wrap italic animate-in zoom-in-95">
                {revealedData}
              </div>
            )}
          </div>
        )}

        {mode === "coding" && (
          <div className="p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200">
            <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
              {question.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
