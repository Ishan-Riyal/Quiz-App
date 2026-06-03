import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeScreen() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCollections = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/collection/all");
        const data = await res.json();
        setCollections(data);
      } catch (err) {
        console.log("Error fetching collections:", err);
      }
    };
    getCollections();
  }, []);

  const handleStart = (category) => {
    if (!isAuthenticated) return navigate("/login");
    navigate(`/select-mode/${category}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-indigo-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="text-left max-w-2xl">
            <h1 className="text-7xl md:text-8xl font-black text-[#1E1B4B] leading-[0.9] mb-8 tracking-tighter">
              MASTER <br />
              <span className="text-[#6366F1]">THE STACK.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">
              Don't just code. Master the logic. Professional assessments for
              MERN developers.
            </p>

            <button
              onClick={() => navigate("/leaderboard")}
              className="mt-10 bg-[#1E1B4B] text-white px-10 py-5 rounded-2xl shadow-[8px_8px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-3 font-black uppercase tracking-widest text-sm"
            >
              🏆 Global Leaderboard
            </button>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:flex w-80 h-80 bg-white border-[6px] border-[#1E1B4B] rounded-[50px] rotate-3 shadow-[20px_20px_0px_0px_rgba(30,27,75,1)] items-center justify-center relative">
            <div className="absolute inset-4 border-2 border-dashed border-indigo-200 rounded-[35px]"></div>
            <span className="text-9xl -rotate-3 group-hover:scale-110 transition-transform cursor-default">
              🚀
            </span>
          </div>
        </div>

        {/* TOPICS SECTION */}
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-black uppercase tracking-widest text-[#1E1B4B]">
              Select Technology
            </h2>
            <div className="h-0.5 flex-1 bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {collections.map((col) => (
              <div
                key={col._id}
                onClick={() => handleStart(col.name)}
                className="group cursor-pointer"
              >
                {/* Fixed height (h-64) keeps them all identical */}
                <div className="relative h-64 bg-white border-4 border-[#1E1B4B] p-10 rounded-[35px] shadow-[10px_10px_0px_0px_rgba(30,27,75,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  {/* Active Badge */}
                  <div className="absolute -top-4 -right-4 bg-[#F43F5E] text-white text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest border-2 border-[#1E1B4B]">
                    Active
                  </div>

                  {/* Category Name */}
                  <h3 className="text-3xl font-black text-[#1E1B4B] uppercase leading-tight line-clamp-2">
                    {col.name}
                  </h3>

                  {/* Start Link - Pushed to bottom by justify-between */}
                  <div className="flex items-center gap-2 text-[#6366F1] font-black uppercase text-[11px] tracking-widest group-hover:text-[#F43F5E] transition-colors">
                    Start Assessment <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
