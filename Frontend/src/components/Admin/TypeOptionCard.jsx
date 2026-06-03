function TypeOptionCard({ opt, onSelect }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="group relative cursor-pointer" onClick={onSelect}>
        <div className="absolute inset-0 bg-[#7C3AED] rounded-[2.5rem] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>

        <div className="bg-white border-4 border-slate-900 p-12 rounded-[2.5rem] relative flex flex-col items-center group-hover:-translate-y-1 transition-all">
          <span className="text-7xl mb-6 group-hover:scale-110 transition-transform">
            {opt.icon}
          </span>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">
            {opt.title}
          </h2>
        </div>
      </div>

      <button
        onClick={onSelect}
        className="bg-[#1E1B4B] text-white border-4 border-slate-900 px-6 py-4 rounded-2xl font-black uppercase italic tracking-widest shadow-[6px_6px_0px_0px_#7C3AED] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
      >
        📋 Manage {opt.title}
      </button>
    </div>
  );
}

export default TypeOptionCard;
