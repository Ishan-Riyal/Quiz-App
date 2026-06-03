import { Link } from "react-router-dom";

function TopicCard({ col, onDelete }) {
  const cId = col._id || col.id;
  if (!cId) return null;

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete && typeof onDelete === "function") {
      onDelete(cId);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleDelete}
        className="absolute bottom-4 right-4 z-30 bg-[#F43F5E] text-white border-4 border-slate-900 p-2.5 rounded-2xl shadow-[3px_3px_0px_0px_#1E1B4B] hover:scale-110 active:shadow-none transition-all"
      >
        🗑️
      </button>

      <Link to={`/admin/questions/${col.name}`} className="block">
        <div className="absolute inset-0 bg-[#7C3AED] rounded-4xl translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform border-2 border-slate-900"></div>

        <div className="bg-white border-4 border-slate-900 p-6 h-52 rounded-4xl relative flex flex-col justify-between hover:-translate-y-1 transition-all overflow-hidden">
          <span className="text-5xl group-hover:rotate-12 transition-transform duration-300">
            {col.icon || "📁"}
          </span>

          <div>
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 truncate">
              {col.name}
            </h2>
            <p className="text-[10px] font-black text-[#7C3AED] uppercase tracking-widest mt-1">
              View Collection →
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default TopicCard;
