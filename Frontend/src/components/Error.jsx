import React from "react";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6 bg-[#F5F3FF]">
      <div className="bg-white border-4 border-slate-900 p-10 rounded-[40px] shadow-[12px_12px_0px_0px_#7C3AED]">
        <span className="text-7xl block mb-2">🚫</span>
        <h2 className="text-3xl font-black text-slate-900 mt-4 uppercase italic">
          Oops! <span className="text-[#E11D48]">System Error.</span>
        </h2>
        <p className="text-slate-500 font-bold mt-2 max-w-xs mx-auto">
          We couldn't fetch the data. Please check your connection or server
          status.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-8 py-3 bg-[#1E1B4B] text-white font-black rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#7C3AED] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase tracking-widest"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Error;
