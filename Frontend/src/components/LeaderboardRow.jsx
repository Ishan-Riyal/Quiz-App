const LeaderboardRow = ({ user, index }) => {
  const displayName = user.user?.name || user.user?.username || "Ghost";
  const scoreToShow = user.score || 0;

  return (
    <div className="flex justify-between items-center p-4 border-2 border-slate-900 rounded-2xl bg-white mb-3 shadow-[4px_4px_0px_0px_#7C3AED] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
      <div className="flex items-center gap-4">
        <span className="font-black text-[#7C3AED] w-6 italic">
          #{index + 1}
        </span>
        <span className="font-black uppercase text-sm truncate w-32 text-slate-900">
          {displayName}
        </span>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-[#7C3AED] uppercase leading-none tracking-tighter">
          Points
        </p>
        <p className="text-xl font-black text-slate-900 leading-tight">
          {scoreToShow}
        </p>
      </div>
    </div>
  );
};

export default LeaderboardRow;
