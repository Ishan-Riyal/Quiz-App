const QuizCard = ({ item, onClick }) => (
  <button onClick={onClick} className="group relative w-full">
    <div className="absolute inset-0 bg-[#7C3AED] rounded-2xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform border-2 border-slate-900"></div>

    <div
      className={`relative ${item.color || "bg-[#1E1B4B]"} text-white border-4 border-slate-900 px-4 py-8 md:py-10 rounded-2xl font-black text-sm md:text-base tracking-widest flex flex-col items-center transition-all group-active:translate-x-1 group-active:translate-y-1`}
    >
      <span className="uppercase italic">{item.label}</span>

      <span className="text-[10px] mt-2 bg-black/20 px-3 py-0.5 rounded-full text-white uppercase font-black tracking-widest">
        {item.info}
      </span>
    </div>
  </button>
);

export default QuizCard;
