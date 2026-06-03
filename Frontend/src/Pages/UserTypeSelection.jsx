import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchQuizData } from "../features/quiz/quizSlice";
import Navbar from "../components/Navbar";

function UserTypeSelection() {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModeSelect = (mode) => {
    dispatch(fetchQuizData({ category: category, type: mode }));
    navigate(`/${mode}/${category}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F3FF] px-4 selection:bg-indigo-100">
      <Navbar />
      <div className="grow flex flex-col items-center justify-center text-center py-10">
        <button
          onClick={() => navigate("/")}
          className="mb-8 font-black uppercase text-md tracking-[0.2em] text-[#7C3AED] hover:text-[#1E1B4B] transition-colors flex items-center gap-2"
        >
          <span className="text-2xl">←</span> Back to Topics
        </button>

        <div className="mb-12">
          <p className="text-[#7C3AED] font-black uppercase tracking-[0.3em] text-xs mb-2">
            Selected Topic
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-[#1E1B4B] uppercase tracking-tighter leading-none">
            {category}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          <SelectionCard
            title="MCQ Quiz"
            desc="Timed assessment"
            accentColor="bg-[#7C3AED]"
            onClick={() => handleModeSelect("mcqs")}
          />
          <SelectionCard
            title="Theory"
            desc="Knowledge Base"
            accentColor="bg-[#F43F5E]"
            onClick={() => handleModeSelect("theory")}
          />
          <SelectionCard
            title="Coding"
            desc="Live Practical"
            accentColor="bg-[#10B981]"
            onClick={() => handleModeSelect("coding")}
          />
        </div>
      </div>
    </div>
  );
}

const SelectionCard = ({ title, desc, accentColor, onClick }) => (
  <div
    onClick={onClick}
    className="group relative bg-white border-4 border-slate-900 p-10 cursor-pointer shadow-[12px_12px_0px_0px_#1E1B4B] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-[40px] overflow-hidden"
  >
    <div
      className={`absolute top-0 right-0 w-16 h-16 ${accentColor} opacity-10 rounded-bl-full group-hover:opacity-100 transition-opacity duration-500`}
    ></div>

    <div
      className={`w-12 h-12 ${accentColor} border-[3px] border-slate-900 rounded-2xl mb-6 shadow-[4px_4px_0px_0px_#1E1B4B] group-hover:rotate-12 transition-transform`}
    ></div>

    <h2 className="text-3xl font-black text-[#1E1B4B] uppercase leading-none">
      {title}
    </h2>
    <p className="text-slate-400 font-black text-[10px] uppercase mt-3 tracking-widest group-hover:text-slate-900 transition-colors">
      {desc}
    </p>

    <div className="mt-8 flex items-center gap-2 text-[#7C3AED] font-black text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
      Select Mode <span className="text-lg">→</span>
    </div>
  </div>
);

export default UserTypeSelection;
