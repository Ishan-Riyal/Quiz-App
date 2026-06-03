function SaveScore({ userName, setUserName, onSave, saving }) {
  return (
    <div className="bg-white border-4 border-slate-900 p-6 rounded-[30px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] w-full max-w-2xl mb-8 text-center">
      <h2 className="text-xl font-black mb-4 uppercase italic">
        Save and See Leaderboard 🏆
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Name..."
          className="flex-1 p-4 border-2 border-slate-900 rounded-xl font-bold outline-none"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          disabled={saving}
          onClick={onSave}
          className="bg-emerald-400 px-6 py-4 rounded-xl font-black border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:translate-y-1 active:shadow-none disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Score"}
        </button>
      </div>
    </div>
  );
}

export default SaveScore;
