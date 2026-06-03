import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";
import Footer from "../components/Footer";
import FinishScreen from "./FinishScreen";
import Loader from "../components/Loader";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";
import StartScreen from "./StartScreen";

function TheoryScreen() {
  const { status, questions, allQuestions } = useSelector(
    (state) => state.quiz,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "loading") {
      const timer = setTimeout(() => navigate("/"), 2000);
      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  // Global screen states
  if (status === "finish") return <FinishScreen />;
  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F5F3FF] px-4 py-8 overflow-hidden font-bold text-slate-900">
      <div className="w-full md:max-w-3xl flex flex-col gap-6 h-full">
        {/* 1. Selection State: Show part picker if ready */}
        {status === "ready" &&
          (allQuestions?.length === 0 ? (
            <EmptyState
              icon="📖"
              title="No Theory Found"
              message="This theory collection is currently empty."
            />
          ) : (
            <StartScreen />
          ))}

        {/* 2. Active State: Show the actual quiz content */}
        {status === "active" && (
          <>
            <ProgressBar />
            <div className="w-full h-[70vh] overflow-y-auto custom-scroll pr-2">
              <Question />
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default TheoryScreen;
