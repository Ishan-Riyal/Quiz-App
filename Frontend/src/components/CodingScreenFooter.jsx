import Timer from "./Timer";
import NextButton from "./NextButton";

function CodingScreenFooter({ onRun }) {
  return (
    <div className="px-6 py-6 shrink-0">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4">
        <div className="flex-1 flex justify-start">
          <Timer />
        </div>
        <div className="flex-1 flex justify-center">
          <NextButton />
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={onRun}
            className="bg-[#FBBF24] text-slate-900 px-8 py-3 rounded-xl font-black shadow-[4px_4px_0px_0px_#7C3AED] border-2 border-slate-900 active:translate-y-1 active:shadow-none transition-all uppercase text-xs tracking-widest whitespace-nowrap"
          >
            Run Code ⚡
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodingScreenFooter;
