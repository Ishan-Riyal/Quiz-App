import React from "react";
import { toast } from "react-toastify";

const MultipleUploads = ({ type, refreshList }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        const token = localStorage.getItem("token");

        const res = await fetch(`/api/quiz/multiple-add/${type}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(jsonData),
        });

        if (res.ok) {
          toast.success(`${jsonData.length} Items added successfully! ✅`);
          if (refreshList) refreshList();
        } else {
          toast.error("Upload failed!");
        }
      } catch (err) {
        toast.error("Invalid JSON file format!");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="my-6">
      <label className="cursor-pointer bg-[#1E1B4B] text-white border-4 border-slate-900 px-6 py-3 rounded-2xl font-black text-sm shadow-[6px_6px_0px_0px_#7C3AED] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-flex items-center gap-3 active:bg-[#7C3AED]">
        <span className="text-xl">📤</span>
        <span className="tracking-tighter">
          MULTIPLE UPLOAD ({type.toUpperCase()})
        </span>
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
      <p className="text-[10px] text-[#7C3AED] mt-2 font-black uppercase tracking-widest">
        * Only .json files allowed
      </p>
    </div>
  );
};

export default MultipleUploads;
