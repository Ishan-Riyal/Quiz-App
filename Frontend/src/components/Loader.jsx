import React from "react";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F3FF]">
      <div className="w-16 h-16 border-8 border-slate-200 border-t-[#7C3AED] rounded-full animate-spin shadow-lg"></div>

      <p className="mt-6 font-black text-[#1E1B4B] tracking-[0.3em] animate-pulse text-sm uppercase italic">
        Syncing Data...
      </p>
    </div>
  );
}

export default Loader;
