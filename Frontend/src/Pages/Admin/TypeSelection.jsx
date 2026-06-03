import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import TypeOptionCard from "../../components/Admin/TypeOptionCard";

const SELECTION_OPTIONS = [
  { title: "MCQs", type: "mcqs", icon: "📝", color: "bg-[#7C3AED]" },
  { title: "Theory", type: "theory", icon: "📚", color: "bg-[#FBBF24]" },
  { title: "Coding", type: "coding", icon: "💻", color: "bg-[#10B981]" },
];

function TypeSelection() {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const collectionName = state?.name || "Collection";

  const handleNavigation = (type) => {
    navigate(`/admin/questions/${type}/${collectionId}`, {
      state: { name: collectionName },
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F3FF] p-6 md:p-12 font-bold flex flex-col items-center text-slate-900">
      <div className="max-w-5xl w-full">
        <header className="flex justify-between items-center mb-16">
          <div>
            <p className="text-[#7C3AED] uppercase tracking-widest text-xs mb-1">
              Resource Manager
            </p>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic leading-none">
              {collectionName}
              <span className="text-[#7C3AED]">.</span>
            </h1>
          </div>

          <Link
            to="/admin/dashboard"
            className="bg-white border-4 border-slate-900 px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_#7C3AED] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase text-sm tracking-tighter"
          >
            ← Back
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SELECTION_OPTIONS.map((opt) => (
            <TypeOptionCard
              key={opt.type}
              opt={opt}
              onSelect={() => handleNavigation(opt.type)}
            />
          ))}
        </div>

        <p className="mt-16 text-center text-slate-400 uppercase text-[10px] tracking-[0.3em]">
          Select a content type to manage questions
        </p>
      </div>
    </div>
  );
}

export default TypeSelection;
