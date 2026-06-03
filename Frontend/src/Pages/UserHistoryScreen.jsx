import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function UserHistoryScreen() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await fetch("/api/users/history", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (response.ok) setHistory(data);
      } catch (err) {
        console.error("Load failed");
      } finally {
        setLoading(false);
      }
    };
    getHistory();
  }, [token]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#F5F3FF] p-6 font-bold text-slate-900">
      {/* --- HEADER --- */}
      <div className="max-w-md mx-auto mb-8 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-white border-2 border-slate-900 px-4 py-1.5 rounded-xl shadow-[3px_3px_0px_0px_#7C3AED] active:translate-y-0.5 active:shadow-none transition-all text-xs uppercase"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
          User <span className="text-[#7C3AED]">History</span>
        </h2>
        <div className="w-10"></div>
      </div>

      {/* --- HISTORY LIST --- */}
      <div className="max-w-md mx-auto space-y-4">
        {history.length > 0 ? (
          history.map((item) => (
            <div
              key={item._id}
              className="bg-white border-4 border-slate-900 p-5 rounded-3xl shadow-[6px_6px_0px_0px_#0f172a] flex justify-between items-center transition-transform hover:-translate-y-1"
            >
              <div>
                <p className="text-[10px] font-black text-[#7C3AED] uppercase mb-1 tracking-widest">
                  {new Date(item.createdAt).toLocaleDateString("en-GB")}
                </p>
                <p className="text-xl font-black text-slate-900 uppercase italic">
                  {item.category || "Quiz Session"}
                </p>
              </div>
              <div className="text-right bg-purple-50 border-2 border-slate-900 px-4 py-2 rounded-2xl shadow-[3px_3px_0px_0px_#FBBF24]">
                <p className="text-2xl font-black leading-none">
                  {item.score || 0}
                </p>
                <p className="text-[8px] uppercase font-black text-slate-400 mt-1">
                  Score
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white border-4 border-dashed border-slate-200 rounded-4xl">
            <p className="font-black text-slate-300 uppercase tracking-widest text-xl">
              No History Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserHistoryScreen;
