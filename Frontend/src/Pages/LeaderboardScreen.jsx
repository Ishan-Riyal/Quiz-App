import { useNavigate } from "react-router-dom";
import { useLeaderboard } from "../hooks/useLeaderboard";
import LeaderboardRow from "../components/LeaderboardRow";
import Loader from "../components/Loader";

function LeaderboardScreen() {
  const navigate = useNavigate();
  const {
    leaderboard,
    loading,
    activeTab,
    setActiveTab,
    category,
    setCategory,
    categories,
  } = useLeaderboard();

  return (
    <div className="h-screen bg-[#FAF9F6] p-6 flex flex-col items-center overflow-hidden font-sans">
      {/* 1. Header Section */}
      <div className="w-full max-w-md flex flex-col gap-6 mb-6 shrink-0">
        <div className="flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-[#6366F1] hover:text-[#1E1B4B] transition-colors"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">
              ←
            </span>{" "}
            Back to Arena
          </button>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#1E1B4B] text-center leading-none">
          HALL OF <span className="text-[#6366F1]">FAME.</span>
        </h1>
      </div>

      {/* 2. Category Selector */}
      <div className="w-full max-w-md mb-6 shrink-0 relative">
        <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-2 tracking-widest">
          Filter by Technology
        </label>
        <div className="relative group">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 rounded-[20px] border-[3px] border-[#1E1B4B] font-black bg-white shadow-[8px_8px_0px_0px_rgba(30,27,75,1)] outline-none cursor-pointer text-xs appearance-none hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))
            ) : (
              <option>Fetching Stack...</option>
            )}
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6366F1] font-bold">
            ▼
          </div>
        </div>
      </div>

      {/* 3. Mode Tabs */}
      <div className="flex gap-4 mb-8 w-full max-w-md shrink-0 justify-center">
        {["mcqs", "coding"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 rounded-2xl font-black border-[3px] border-[#1E1B4B] uppercase text-[10px] tracking-[0.2em] transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#6366F1] text-white shadow-[6px_6px_0px_0px_rgba(30,27,75,1)] -translate-y-1"
                  : "bg-white text-[#1E1B4B] hover:bg-indigo-50"
              }`}
          >
            {tab === "mcqs" ? "Quiz 📝" : "Coding 💻"}
          </button>
        ))}
      </div>

      {/* 4. Main List Container */}
      <div className="bg-white border-4 border-[#1E1B4B] w-full max-w-md rounded-[40px] shadow-[15px_15px_0px_0px_rgba(30,27,75,1)] p-5 mb-6 flex-1 overflow-hidden flex flex-col relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full z-0 opacity-50"></div>

        <div className="overflow-y-auto px-2 py-2 no-scrollbar flex-1 relative z-10">
          <div className="space-y-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader />
                <p className="text-[10px] font-black text-slate-400 uppercase animate-pulse">
                  Ranking Legends...
                </p>
              </div>
            ) : leaderboard.length > 0 ? (
              leaderboard.map((user, i) => (
                <div
                  key={user._id || i}
                  className="animate-in fade-in slide-in-from-bottom-3 duration-500"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <LeaderboardRow user={user} index={i} activeTab={activeTab} />
                </div>
              ))
            ) : (
              <div className="text-center py-24">
                <p className="text-5xl mb-4">🏆</p>
                <p className="font-black text-[#1E1B4B] text-[11px] uppercase tracking-[0.2em]">
                  The podium is empty. <br />
                  <span className="text-[#6366F1]">Be the first legend!</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardScreen;
