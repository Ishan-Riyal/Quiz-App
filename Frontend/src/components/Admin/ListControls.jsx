function ListControls({ search, setSearch, cat, setCat, categories }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Search questions..."
        className="flex-1 border-4 border-slate-900 p-4 rounded-2xl font-black outline-none focus:bg-purple-50 focus:ring-4 ring-purple-100 transition-all shadow-[6px_6px_0px_0px_#1E1B4B]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        className="border-4 border-slate-900 p-4 rounded-2xl font-black bg-white focus:bg-purple-50 outline-none cursor-pointer transition-all shadow-[6px_6px_0px_0px_#7C3AED] uppercase text-xs tracking-widest"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListControls;
