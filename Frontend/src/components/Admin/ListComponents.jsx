import { Link } from "react-router-dom";

export const ListHeader = ({ type, onAdd }) => (
  <div className="flex justify-between items-end mb-8 border-b-4 border-purple-100 pb-8 gap-4">
    <div>
      <Link
        to="/admin/dashboard"
        className="text-[10px] font-black uppercase text-purple-400 hover:text-[#7C3AED] tracking-widest transition-colors"
      >
        ← Back to Admin
      </Link>
      <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase italic tracking-tighter mt-2">
        {type} <span className="text-[#7C3AED] text-2xl md:text-3xl">List</span>
      </h1>
    </div>
    <button onClick={onAdd} className="relative group shrink-0">
      <div className="absolute inset-0 bg-slate-900 rounded-xl translate-x-1 translate-y-1 transition-all group-hover:translate-x-0 group-hover:translate-y-0"></div>
      <div className="relative bg-[#1E1B4B] text-white border-2 border-slate-900 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest">
        + Add {type}
      </div>
    </button>
  </div>
);

export const QuestionCard = ({ q, type, onEdit, onDelete }) => (
  <div className="relative group mb-4">
    <div className="absolute inset-0 bg-[#7C3AED] rounded-2xl translate-x-1.5 translate-y-1.5 transition-all group-hover:translate-x-0 group-hover:translate-y-0 border-2 border-slate-900"></div>

    <div className="relative bg-white border-4 border-slate-900 p-5 md:p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex-1 min-w-0 w-full">
        <span className="text-[9px] font-black bg-purple-50 text-[#7C3AED] px-3 py-1 rounded-full border-2 border-purple-100 uppercase mb-3 inline-block tracking-widest">
          {q.category}
        </span>
        <p className="font-black text-slate-800 text-sm md:text-lg italic leading-tight wrap-break-words line-clamp-2">
          {q.question || q.title}
        </p>
      </div>

      <div className="flex gap-3 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-purple-50">
        <button
          onClick={() => onEdit(q._id)}
          className="flex-1 md:flex-none bg-white hover:bg-purple-50 text-slate-900 px-5 py-2.5 rounded-xl border-2 border-slate-900 text-[10px] font-black uppercase shadow-[3px_3px_0px_0px_#1E1B4B] active:shadow-none active:translate-y-1 transition-all"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(q._id)}
          className="flex-1 md:flex-none bg-[#F43F5E] text-white px-5 py-2.5 rounded-xl border-2 border-slate-900 text-[10px] font-black uppercase shadow-[3px_3px_0px_0px_#1E1B4B] active:shadow-none active:translate-y-1 transition-all"
        >
          Del
        </button>
      </div>
    </div>
  </div>
);
