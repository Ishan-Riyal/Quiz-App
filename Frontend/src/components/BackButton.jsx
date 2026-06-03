import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="absolute top-6 left-6 flex items-center gap-2 bg-white border-4 border-slate-900 px-5 py-2 rounded-2xl font-black text-slate-900 uppercase italic tracking-wider shadow-[6px_6px_0px_0px_#7C3AED] hover:bg-[#7C3AED] hover:text-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:bg-[#6D28D9] transition-all z-50"
    >
      <span className="text-xl">⬅</span>
      <span>Home</span>
    </button>
  );
}

export default BackButton;
