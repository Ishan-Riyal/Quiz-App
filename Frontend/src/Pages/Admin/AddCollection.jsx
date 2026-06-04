import { useState } from "react";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

function AddCollection({ refreshCategories, closeModal }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE}/api/collection/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        toast.success(`New Question Bank "${name}" Created!`);
        if (refreshCategories) refreshCategories();
        if (closeModal) closeModal();
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Failed to create!");
      }
    } catch (err) {
      toast.error("Network error!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 min-w-75">
      <h2 className="text-2xl font-black uppercase italic text-slate-900">
        Create New <span className="text-[#7C3AED]">Question Bank</span>
      </h2>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-black uppercase text-slate-500">
          Name
        </label>
        <input
          type="text"
          className="border-2 border-slate-900 p-3 rounded-xl font-bold outline-none focus:border-[#7C3AED] bg-slate-50"
          placeholder="e.g. REACT JS"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[#1E1B4B] text-white p-4 rounded-xl font-black border-2 border-slate-900 shadow-[4px_4px_0px_0px_#7C3AED] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
      >
        Create Question Bank
      </button>
    </form>
  );
}

export default AddCollection;
