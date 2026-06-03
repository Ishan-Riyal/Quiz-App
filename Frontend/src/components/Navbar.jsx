import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#FAF9F6]/90 backdrop-blur-xl py-4 sticky top-0 z-100 border-b border-slate-200 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* --- LOGO --- */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black text-[#1E1B4B] tracking-tighter hover:scale-105 transition-transform duration-300"
        >
          MERN<span className="text-[#6366F1]">QUIZ.</span>
        </Link>

        {/* --- RIGHT SIDE --- */}
        <div className="flex items-center gap-6">
          {!isAuthenticated ? (
            <div className="flex gap-6 items-center">
              <Link
                to="/login"
                className="text-xs font-black text-[#1E1B4B] hover:text-[#6366F1] transition-all duration-300 uppercase tracking-widest"
              >
                Login
              </Link>
              <Link to="/register" className="relative group">
                <div className="absolute inset-0 bg-[#1E1B4B] rounded-xl translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative bg-[#6366F1] border-2 border-[#1E1B4B] px-6 py-2 rounded-xl text-xs font-black text-white uppercase tracking-widest active:scale-95 transition-transform">
                  Join Free
                </div>
              </Link>
            </div>
          ) : (
            /* --- PROFILE DROPDOWN --- */
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-3 group bg-white border-2 border-slate-200 pl-4 pr-2 py-1.5 rounded-2xl hover:border-[#6366F1] hover:shadow-lg transition-all duration-300">
                <div className="text-left hidden md:block">
                  <p className="text-[9px] font-black text-slate-400 uppercase leading-none mb-1">
                    player
                  </p>
                  <p className="text-sm font-black text-[#1E1B4B] uppercase tracking-tighter transition-colors group-hover:text-[#6366F1]">
                    {user?.name?.split(" ")[0]}
                  </p>
                </div>

                <div className="h-10 w-10 border-2 border-[#1E1B4B] rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_rgba(30,27,75,1)] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300">
                  {user?.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt="profile"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${user.name}&background=6366F1&color=fff`;
                      }}
                    />
                  ) : (
                    <div className="h-full w-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-black uppercase">
                      {user?.name?.charAt(0)}
                    </div>
                  )}
                </div>
              </button>

              {/* --- SMOOTH DROPDOWN MENU --- */}
              <div
                className={`absolute right-0 pt-3 w-56 z-50 transition-all duration-300 ease-out 
                ${isDropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}`}
              >
                <div className="bg-white border-[3px] border-[#1E1B4B] rounded-2xl shadow-[12px_12px_0px_0px_rgba(30,27,75,1)] overflow-hidden">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-5 py-4 text-xs font-black text-[#1E1B4B] border-b-2 border-slate-50 hover:bg-slate-50 hover:pl-7 transition-all duration-300 uppercase"
                  >
                    <span className="text-lg">👤</span> Profile Settings
                  </Link>

                  {isAdmin && (
                    <Link
                      to="/admin/dashboard"
                      className="flex items-center gap-3 px-5 py-4 text-xs font-black text-[#1E1B4B] border-b-2 border-slate-50 hover:bg-slate-50 hover:pl-7 transition-all duration-300 uppercase"
                    >
                      <span className="text-lg">📊</span> Admin Control
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-4 text-xs font-black text-[#F43F5E] hover:bg-rose-50 hover:pl-7 transition-all duration-300 uppercase text-left"
                  >
                    <span className="text-lg">🚪</span> Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
