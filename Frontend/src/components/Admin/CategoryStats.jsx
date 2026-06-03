import { useAdminData } from "../../hooks/useAdminData";

function CategoryStats() {
  const { chartData = [], loading } = useAdminData();

  if (loading) {
    return (
      <div className="bg-white border-4 border-slate-900 p-6 rounded-4xl shadow-[10px_10px_0px_0px_#7C3AED] flex justify-center items-center h-48">
        <p className="font-black animate-pulse italic uppercase text-[#7C3AED]">
          Loading Analytics...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-slate-900 p-8 rounded-4xl shadow-[10px_10px_0px_0px_#7C3AED]">
      <h2 className="text-2xl font-black mb-8 italic uppercase text-slate-900">
        📊 Avg <span className="text-[#7C3AED]">Scores</span>
      </h2>

      <div className="space-y-8">
        {chartData && chartData.length > 0 ? (
          chartData.map((col) => {
            const score = col.avgScore || 0;
            return (
              <div key={col._id || col.name} className="group">
                <div className="flex justify-between mb-3">
                  <span className="font-black text-[11px] uppercase tracking-widest text-[#1E1B4B]">
                    {col.name}
                  </span>
                  <span className="font-black text-[11px] text-[#7C3AED] bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-100">
                    {score}% Avg
                  </span>
                </div>

                <div className="w-full h-7 bg-slate-50 border-4 border-slate-900 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#1E1B4B]">
                  <div
                    className="h-full bg-[#7C3AED] border-r-4 border-slate-900 transition-all duration-1000 ease-in-out"
                    style={{ width: `${score}%` }}
                  >
                    <div className="w-full h-full bg-white/10"></div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-[10px] font-black text-purple-200 uppercase italic py-8 tracking-widest">
            No data available yet...
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryStats;
