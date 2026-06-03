import { useLeaderboard } from "../../hooks/useLeaderboard";

function AdminLeaderboard() {
  const {
    leaderboard,
    activeTab,
    setActiveTab,
    category,
    setCategory,
    categories,
  } = useLeaderboard();

  return (
    <div className="w-full max-w-md bg-white border-4 border-slate-900 p-6 rounded-4xl shadow-[10px_10px_0px_0px_#7C3AED] mt-8">
      <h2 className="text-2xl font-black uppercase mb-4 text-slate-900 italic">
        🏆 Top{" "}
        <span className="text-[#7C3AED] underline decoration-4 underline-offset-4">
          Legends
        </span>
      </h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-6 p-3 border-4 border-slate-900 rounded-2xl font-black text-[10px] uppercase outline-none bg-white focus:ring-4 ring-purple-100 transition-all cursor-pointer shadow-[4px_4px_0px_0px_#1E1B4B]"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="flex gap-3 mb-6">
        {["mcqs", "coding"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2.5 rounded-xl border-2 border-slate-900 font-black uppercase text-[10px] tracking-widest transition-all ${
              activeTab === tab
                ? "bg-[#7C3AED] text-white shadow-[3px_3px_0px_0px_#1E1B4B] -translate-y-0.5"
                : "bg-white text-slate-500 hover:bg-purple-50"
            }`}
          >
            {tab === "mcqs" ? "Quiz" : "Coding"}
          </button>
        ))}
      </div>

      <div className="space-y-3 max-h-87.5 overflow-y-auto pr-2 custom-scrollbar">
        {leaderboard && leaderboard.length > 0 ? (
          leaderboard.map((item, i) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-3 bg-white border-2 border-slate-900 rounded-2xl shadow-[3px_3px_0px_0px_#7C3AED] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="font-black text-[#7C3AED] text-xs italic">
                  #{i + 1}
                </span>
                <p className="font-black text-slate-900 uppercase text-[11px] truncate w-24 tracking-tighter">
                  {item.user?.name || item.user?.username || "Guest"}
                </p>
              </div>
              <span className="bg-[#1E1B4B] text-white px-3 py-1 rounded-lg font-black text-[10px] border-2 border-slate-900 shadow-[2px_2px_0px_0px_#7C3AED]">
                {item.score || 0} PTS
              </span>
            </div>
          ))
        ) : (
          <div className="text-center py-10 bg-slate-50 border-4 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] italic">
              No Legends Found Yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLeaderboard;
