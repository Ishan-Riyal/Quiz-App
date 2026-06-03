import ScoreHeader from "./ScoreHeader";
import SaveScore from "./SaveScore";

const ResultSidebar = ({
  points,
  total,
  userName,
  setUserName,
  onSave,
  saving,
  filter,
  setFilter,
}) => {
  const filterOptions = ["all", "correct", "wrong", "skipped"];

  return (
    <div className="w-full lg:w-1/3 space-y-6">
      {/* Score & Save Section */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <ScoreHeader points={points} total={total} />
        <div className="mt-8 pt-8 border-t border-slate-100">
          <SaveScore
            userName={userName}
            setUserName={setUserName}
            onSave={onSave}
            saving={saving}
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
        <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">
          Filters
        </h3>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                filter === t
                  ? "bg-purple-50 border-purple-200 text-[#7C3AED]"
                  : "bg-white border-slate-100 text-slate-500"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultSidebar;
