function CodeEditor({ userCode, setUserCode, output, setOutput }) {
  return (
    <div className="flex-1 md:w-3/5 w-full flex flex-col bg-[#1e1e1e] rounded-[30px] overflow-hidden shadow-[8px_8px_0px_0px_#7C3AED] border-4 border-slate-900 h-full">
      <textarea
        className="flex-1 w-full bg-transparent text-purple-400 font-mono text-sm outline-none resize-none p-6 custom-scroll"
        value={userCode}
        onChange={(e) => setUserCode(e.target.value)}
        spellCheck="false"
      />

      <div className="h-40 bg-[#121212] border-t-4 border-slate-900 overflow-y-auto p-4 font-mono text-sm shrink-0">
        <div className="flex justify-between items-center mb-2">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">
            Console Output
          </p>
          {output.length > 0 && (
            <button
              onClick={() => setOutput([])}
              className="text-[10px] text-slate-500 hover:text-white uppercase font-bold"
            >
              [ Clear ]
            </button>
          )}
        </div>

        {output.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("Error") ? "text-red-400" : "text-purple-400"
            }
          >
            <span className="text-slate-700 mr-2">❯</span>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeEditor;
