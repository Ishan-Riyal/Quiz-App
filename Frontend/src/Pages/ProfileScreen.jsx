import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfilePic } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function ProfileScreen() {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ best: 0, total: 0, avg: 0 });
  const [uploading, setUploading] = useState(false);

  const API_BASE = "http://localhost:8000";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/users/history`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data && data.length > 0) {
          const scores = data.map((item) => item.score || 0);
          setStats({
            best: Math.max(...scores),
            total: data.length,
            avg: Math.round(scores.reduce((a, b) => a + b, 0) / data.length),
          });
        }
      } catch (err) {
        console.error("Stats load failed:", err);
      }
    };
    if (token) fetchStats();
  }, [token]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const res = await fetch(`${API_BASE}/api/users/profile-pic`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(updateProfilePic(data.profilePic));
        toast.success("Profile Photo Updated! 📸");
      } else {
        toast.error(data.message || "Upload failed ❌");
      }
    } catch (err) {
      toast.error("Server error!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="h-screen bg-[#F5F3FF] p-4 flex flex-col items-center justify-center font-bold text-slate-900 overflow-hidden">
      <div className="w-full max-w-md mb-3">
        <button
          onClick={() => navigate("/")}
          className="bg-white border-2 border-slate-900 px-4 py-1.5 rounded-xl shadow-[3px_3px_0px_0px_#7C3AED] active:translate-y-0.5 active:shadow-none transition-all uppercase text-xs"
        >
          ← Back
        </button>
      </div>

      <div className="w-full max-w-md bg-white border-4 border-slate-900 rounded-[28px] p-6 shadow-[8px_8px_0px_0px_#0f172a] flex flex-col">
        <div className="text-center mb-6">
          <div className="relative w-20 h-20 mx-auto mb-3">
            {user?.profilePic ? (
              <img
                src={
                  user.profilePic.startsWith("http")
                    ? user.profilePic
                    : `${API_BASE}/${user.profilePic}`
                }
                alt="Profile"
                className="w-full h-full object-cover border-4 border-slate-900 rounded-3xl shadow-[3px_3px_0px_0px_#7C3AED] rotate-2"
                onError={(e) => {
                  e.target.src =
                    "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Lucky";
                }}
              />
            ) : (
              <div className="w-full h-full bg-[#FBBF24] border-4 border-slate-900 rounded-3xl flex items-center justify-center text-3xl shadow-[3px_3px_0px_0px_#7C3AED] rotate-3">
                👤
              </div>
            )}
            <label className="absolute -bottom-1 -right-1 bg-slate-900 text-white p-1.5 rounded-xl cursor-pointer hover:scale-110 transition-transform shadow-md border-2 border-white">
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
              <span className="text-xs">{uploading ? "⏳" : "📸"}</span>
            </label>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight italic leading-tight">
            {user?.name || "Player"}
          </h2>
          <p className="text-[#7C3AED] font-black text-[10px] uppercase tracking-widest opacity-70">
            {user?.email}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-purple-50 border-2 border-slate-900 p-4 rounded-xl flex justify-between items-center shadow-[3px_3px_0px_0px_#7C3AED]">
            <span className="uppercase text-[10px] tracking-widest font-black text-slate-500">
              Quizzes Played
            </span>
            <span className="text-2xl font-black">{stats.total}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border-2 border-slate-900 p-3 rounded-xl text-center shadow-[3px_3px_0px_0px_#FBBF24]">
              <p className="text-[9px] uppercase text-slate-400 font-black">
                Best
              </p>
              <p className="text-xl font-black">{stats.best}</p>
            </div>
            <div className="bg-white border-2 border-slate-900 p-3 rounded-xl text-center shadow-[3px_3px_0px_0px_#7C3AED]">
              <p className="text-[9px] uppercase text-slate-400 font-black">
                Avg
              </p>
              <p className="text-xl font-black">{stats.avg}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/history")}
          className="w-full py-3.5 bg-[#7C3AED] text-white rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] active:translate-y-1 active:shadow-none transition-all uppercase font-black tracking-widest text-xs"
        >
          View Full History 📜
        </button>
      </div>
    </div>
  );
}

export default ProfileScreen;
