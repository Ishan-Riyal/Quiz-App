import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import Loader from "../../components/Loader";

function UserManagement() {
  const { users, loading, deleteUser, toggleRole, toggleStatus } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#F5F3FF] p-4 md:p-10 font-bold">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black text-slate-900 uppercase italic">
            User <span className="text-[#7C3AED]">Management</span>
          </h1>
          <Link
            to="/admin/dashboard"
            className="bg-white border-4 border-slate-900 px-6 py-2 rounded-2xl shadow-[4px_4px_0px_0px_#7C3AED] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-sm"
          >
            ← BACK
          </Link>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full border-4 border-slate-900 p-4 rounded-2xl shadow-[6px_6px_0px_0px_#1E1B4B] outline-none font-bold focus:ring-4 ring-purple-200 bg-white transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white border-4 border-slate-900 rounded-[30px] overflow-hidden shadow-[10px_10px_0px_0px_#7C3AED]">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#1E1B4B] text-white">
              <tr>
                <th className="p-5 uppercase font-black tracking-widest text-xs">
                  User Info
                </th>
                <th className="p-5 uppercase font-black text-center tracking-widest text-xs">
                  Status
                </th>
                <th className="p-5 uppercase font-black text-center tracking-widest text-xs">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b-2 border-slate-100 hover:bg-purple-50 transition-colors"
                  >
                    <td className="p-5">
                      <div className="font-black text-slate-900 text-lg">
                        {user.name}
                      </div>
                      <div className="text-xs text-slate-500 mb-2">
                        {user.email}
                      </div>
                      <span
                        className={`text-[10px] px-3 py-1 rounded-full border-2 border-slate-900 font-black uppercase ${
                          user.role === "admin"
                            ? "bg-[#7C3AED] text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="p-5 text-center">
                      <span
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black border-2 border-slate-900 inline-block shadow-[3px_3px_0px_0px_#000] ${
                          user.isActive
                            ? "bg-[#10B981] text-white"
                            : "bg-[#F43F5E] text-white"
                        }`}
                      >
                        {user.isActive ? "● ACTIVE" : "● BANNED"}
                      </span>
                    </td>

                    <td className="p-5">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => toggleStatus(user._id)}
                          className={`px-3 py-2 rounded-xl border-2 border-slate-900 font-black shadow-[3px_3px_0px_0px_#000] text-[10px] uppercase transition-all active:translate-y-0.5 active:shadow-none ${
                            user.isActive ? "bg-[#FBBF24]" : "bg-[#34D399]"
                          }`}
                        >
                          {user.isActive ? "Deactivate" : "Activate"}
                        </button>

                        <button
                          onClick={() => toggleRole(user._id)}
                          className={`px-3 py-2 rounded-xl border-2 border-slate-900 font-black shadow-[3px_3px_0px_0px_#000] text-[10px] uppercase transition-all active:translate-y-0.5 active:shadow-none ${
                            user.role === "admin"
                              ? "bg-slate-200"
                              : "bg-[#7C3AED] text-white"
                          }`}
                        >
                          {user.role === "admin" ? "Make User" : "Make Admin"}
                        </button>

                        <button
                          onClick={() => deleteUser(user._id)}
                          className="bg-[#F43F5E] text-white px-3 py-2 rounded-xl border-2 border-slate-900 font-black shadow-[3px_3px_0px_0px_#000] text-[10px] uppercase hover:bg-rose-600 transition-all active:translate-y-0.5 active:shadow-none"
                        >
                          DELETE
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="p-20 text-center font-black text-slate-300 uppercase italic text-2xl tracking-widest"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
