function ScoreHeader({ points, total }) {
  return (
    // Shadow ko Purple (#7C3AED) kiya aur rounded corners badhaye
    <div className="bg-white border-4 border-slate-900 p-10 rounded-[40px] shadow-[10px_10px_0px_0px_#7C3AED] w-full max-w-2xl text-center mb-8">
      {/* Score color Amber se badal kar Purple (#7C3AED) kiya */}
      <div className="text-7xl font-black text-[#7C3AED] italic tracking-tighter">
        {points}
        <span className="text-slate-900">/</span>
        {total}
      </div>

      {/* Label ko Indigo/Slate mix kiya */}
      <p className="font-black text-[#1E1B4B] uppercase mt-4 tracking-[0.3em] text-xs">
        Final Score
      </p>
    </div>
  );
}

export default ScoreHeader;
