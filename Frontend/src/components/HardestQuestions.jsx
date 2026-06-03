import { useHardestQuestions } from "../hooks/useHardestQuestions";
import Loader from "./Loader";

function HardestQuestions() {
  const { questions, loading } = useHardestQuestions();

  if (loading) return <Loader />;

  return (
    <div className="w-full max-w-md bg-white border-4 border-slate-900 p-6 rounded-4xl shadow-[10px_10px_0px_0px_#7C3AED]">
      <h2 className="text-2xl font-black uppercase mb-6 text-slate-900 italic flex items-center gap-2">
        🔥 Top{" "}
        <span className="text-[#7C3AED] underline decoration-4 underline-offset-4">
          Killers
        </span>
      </h2>

      <div className="space-y-4 max-h-112.5 overflow-y-auto pr-2 custom-scrollbar">
        {questions && questions.length > 0 ? (
          questions.map((item, index) => (
            <div
              key={item._id}
              className="bg-white border-2 border-slate-900 p-4 rounded-2xl hover:bg-purple-50 transition-colors group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#1E1B4B] text-white px-2 py-0.5 rounded-lg text-[10px] font-black uppercase border-2 border-slate-900 shadow-[2px_2px_0px_0px_#7C3AED]">
                  Failed {item.wrongAttempts || 0} Times
                </span>
                <span className="font-black text-slate-200 text-lg group-hover:text-purple-200 transition-colors">
                  #0{index + 1}
                </span>
              </div>

              <p className="font-bold text-slate-800 text-sm leading-tight">
                {item.question}
              </p>

              {item.category && (
                <div className="mt-2">
                  <span className="text-[9px] bg-purple-50 text-purple-400 px-2 py-0.5 rounded font-black uppercase border border-purple-100">
                    {item.category}
                  </span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="border-4 border-dashed border-purple-100 rounded-3xl p-8 text-center bg-purple-50/30">
            <p className="text-purple-300 font-black uppercase text-[10px] tracking-widest">
              No data yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HardestQuestions;
