import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuestions } from "../../hooks/useQuestions";

import { QuestionCard } from "../../components/Admin/ListComponents";
import ListControls from "../../components/Admin/ListControls";
import Loader from "../../components/Loader";

const AdminQuestionList = () => {
  const { type, collectionId: categoryName } = useParams();
  const navigate = useNavigate();

  const [selectedIds, setSelectedIds] = useState([]);

  const {
    filtered,
    loading,
    search,
    setSearch,
    cat,
    setCat,
    categories,
    handleDelete,
    exportToPDF,
  } = useQuestions(type, categoryName);

  const handleSelectAll = () => setSelectedIds(filtered.map((q) => q._id));
  const toggleSelect = (id) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#F5F3FF] p-4 md:p-8 font-bold text-slate-900">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">
              {categoryName} - <span className="text-[#7C3AED]">{type}</span>
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest">
              Admin Management
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={exportToPDF}
              className="bg-[#1E1B4B] text-white border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_#7C3AED] hover:translate-y-0.5 active:shadow-none transition-all font-black uppercase text-xs"
            >
              📄 PDF
            </button>

            <button
              onClick={() =>
                navigate(`/admin/add-question/${type}/${categoryName}`)
              }
              className="bg-[#10B981] text-white border-2 border-slate-900 px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_#064E3B] hover:translate-y-0.5 active:shadow-none transition-all font-black uppercase text-xs"
            >
              ➕ Add
            </button>
          </div>
        </header>

        <ListControls
          search={search}
          setSearch={setSearch}
          cat={cat}
          setCat={setCat}
          categories={categories}
        />

        <div className="flex gap-2 mb-6">
          <button
            onClick={handleSelectAll}
            className="bg-white border-2 border-slate-900 px-3 py-1 rounded-lg text-[10px] uppercase hover:bg-purple-50 transition-colors shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
          >
            Select All
          </button>
          <button
            onClick={() => setSelectedIds([])}
            className="bg-white border-2 border-slate-900 px-3 py-1 rounded-lg text-[10px] uppercase hover:bg-rose-50 transition-colors shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
          >
            Clear
          </button>
        </div>

        <div className="space-y-4 pb-32">
          {filtered.length > 0 ? (
            filtered.map((q) => (
              <div key={q._id} className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(q._id)}
                  onChange={() => toggleSelect(q._id)}
                  className="w-6 h-6 border-4 border-slate-900 rounded-lg accent-[#7C3AED] cursor-pointer shrink-0"
                />
                <div className="flex-1">
                  <QuestionCard
                    q={q}
                    type={type}
                    onEdit={(id) =>
                      navigate(`/admin/edit/${type}/${id}/${categoryName}`)
                    }
                    onDelete={() => handleDelete(q._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 border-4 border-dashed border-slate-300 rounded-[40px] text-slate-400 uppercase italic bg-white/50">
              No Questions Found
            </div>
          )}
        </div>

        {selectedIds.length > 0 && (
          <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 w-full max-w-xs px-4">
            <button
              onClick={() => {
                handleDelete(selectedIds);
                setSelectedIds([]);
              }}
              className="w-full bg-[#E11D48] text-white px-10 py-5 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_#4C0519] uppercase font-black hover:scale-105 active:scale-95 transition-all text-sm tracking-widest"
            >
              Delete Selected ({selectedIds.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminQuestionList;
