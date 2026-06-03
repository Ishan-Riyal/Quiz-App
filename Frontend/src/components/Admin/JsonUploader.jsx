import { useImportQuestions } from "../../hooks/useImportQuestions";

const JsonUploader = ({ type, activeId, category }) => {
  const { handleFileSelect } = useImportQuestions(type, activeId, category);

  return (
    <div className="mt-8 text-center border-4 border-dashed border-[#7C3AED]/30 p-12 rounded-[2.5rem] bg-[#F5F3FF]">
      <div className="text-5xl mb-4 animate-bounce">📄</div>
      <p className="mb-6 font-black uppercase text-xs text-[#1E1B4B] tracking-[0.2em]">
        Import JSON for <span className="text-[#7C3AED]">{type}</span>
      </p>

      <label className="bg-[#1E1B4B] text-white px-10 py-4 rounded-2xl font-black uppercase text-sm shadow-[6px_6px_0px_0px_#7C3AED] cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block border-2 border-slate-900">
        Choose JSON File
        <input
          type="file"
          accept=".json"
          onChange={handleFileSelect}
          className="hidden"
        />
      </label>

      <p className="mt-4 text-[9px] font-black text-[#7C3AED] uppercase tracking-widest opacity-60">
        * Structure must match {type} schema
      </p>
    </div>
  );
};

export default JsonUploader;
