import { useState } from "react";
import { Link } from "react-router-dom";

import { useAdminData } from "../../hooks/useAdminData";

import Loader from "../../components/Loader";
import TopicCard from "../../components/Admin/TopicCards";
import AddCollection from "../Admin/AddCollection";
import HardestQuestions from "../../components/HardestQuestions";
import AdminLeaderboard from "../../components/Admin/AdminLeaderboard";
import CategoryStats from "../../components/Admin/CategoryStats";

function AdminDashboard() {
  const { users, collections, loading, refresh, deleteCollection } =
    useAdminData();
  const [showModal, setShowModal] = useState(false);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#F5F3FF] p-4 md:p-10 font-bold text-slate-900">
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-slate-900 p-8 rounded-[40px] relative shadow-[12px_12px_0px_0px_#7C3AED] w-full max-w-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 bg-[#7C3AED] text-white w-10 h-10 rounded-full border-4 border-slate-900 font-black hover:bg-[#6D28D9] transition-colors"
            >
              ✕
            </button>
            <AddCollection
              refreshCategories={refresh}
              closeModal={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="text-[#7C3AED] uppercase tracking-[0.2em] text-sm mb-1 font-black">
              Control Panel
            </p>
            <h1 className="text-6xl font-black uppercase italic leading-none text-slate-900">
              Admin<span className="text-[#7C3AED]">.</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <Link
              to="/admin/users"
              className="bg-white border-4 border-slate-900 px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_#7C3AED] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              👥 USERS ({users?.length || 0})
            </Link>
            <Link
              to="/"
              className="bg-[#1E1B4B] text-white px-6 py-3 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#FBBF24] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              HOME
            </Link>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Active Topics
              </h2>
              <div className="h-1 flex-1 mx-4 bg-[#EDE9FE] rounded-full border-b border-slate-300"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {collections.map((col) => (
                <TopicCard
                  key={col._id}
                  col={col}
                  onDelete={deleteCollection}
                />
              ))}
              <button
                onClick={() => setShowModal(true)}
                className="group border-4 border-dashed border-slate-300 h-full min-h-45 rounded-[30px] flex flex-col items-center justify-center hover:border-[#7C3AED] hover:bg-purple-50 transition-all shadow-sm hover:shadow-[8px_8px_0px_0px_#7C3AED]"
              >
                <span className="text-4xl text-slate-300 group-hover:text-[#7C3AED] mb-2">
                  +
                </span>
                <span className="text-slate-400 group-hover:text-[#7C3AED] uppercase text-sm">
                  Add New Topic
                </span>
              </button>
            </div>
          </div>

          <aside className="lg:w-95 shrink-0">
            <div className="sticky top-10 space-y-8">
              <CategoryStats />
              <HardestQuestions />
              <AdminLeaderboard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
