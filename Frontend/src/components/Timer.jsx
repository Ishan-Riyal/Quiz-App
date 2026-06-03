import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tick } from "../features/quiz/quizSlice";

function Timer() {
  const dispatch = useDispatch();
  const { time } = useSelector((state) => state.quiz);

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  useEffect(() => {
    const id = setInterval(() => dispatch(tick()), 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  const isUrgent = time < 15;

  return (
    <div
      className={`flex items-center gap-1.5 font-black transition-all duration-500 px-3 py-1 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white
      ${isUrgent ? "text-[#F43F5E] scale-110 border-[#F43F5E] shadow-[#F43F5E]" : "text-[#1E1B4B]"}`}
    >
      <span className={`text-sm ${isUrgent ? "animate-bounce" : ""}`}>
        {isUrgent ? "⚡" : "⏱️"}
      </span>

      <span className="text-xs md:text-sm font-mono tracking-widest">
        {mins < 10 ? `0${mins}` : mins}
        <span className={isUrgent ? "animate-pulse" : ""}>:</span>
        {secs < 10 ? `0${secs}` : secs}
      </span>
    </div>
  );
}

export default Timer;
