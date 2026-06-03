import { Link } from "react-router-dom";

function EmptyState({
  icon = "📂",
  title = "No Questions Found",
  message = "This section is empty.",
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-5">
      <div className="text-7xl">{icon}</div>
      <h2 className="text-3xl font-black uppercase text-slate-900">{title}</h2>
      <p className="text-slate-500 max-w-sm font-bold">{message}</p>
      <Link
        to="/"
        className="bg-[#1E1B4B] text-white px-8 py-3 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#7C3AED] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-widest"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default EmptyState;
