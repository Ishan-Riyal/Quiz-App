import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import FinishScreen from "./FinishScreen";
import EmptyState from "../components/EmptyState";
import StartScreen from "./StartScreen";

function MCQScreen() {
  // Added allQuestions to properly check for empty state before selection
  const { status, questions, allQuestions } = useSelector(
    (state) => state.quiz,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "finish") navigate("/finish");
  }, [status, navigate]);

  return (
    <div className="flex flex-col h-dvh bg-[#F5F3FF] px-6 py-4 overflow-hidden font-bold">
      {/* 1. Loading State */}
      {status === "loading" && (
        <div className="flex-1 flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* 2. Error State */}
      {status === "error" && (
        <div className="flex-1 flex items-center justify-center">
          <Error />
        </div>
      )}

      {/* 3. Selection State (The Part Picker) */}
      {status === "ready" && (
        <div className="flex-1 flex items-center justify-center">
          {allQuestions?.length === 0 ? (
            <EmptyState
              icon="📝"
              title="No MCQs Found"
              message="Looks like no one added MCQs to this bank yet."
            />
          ) : (
            <StartScreen />
          )}
        </div>
      )}

      {/* 4. Active Quiz State */}
      {status === "active" && (
        <div className="flex flex-col h-full max-w-3xl mx-auto w-full">
          <div className="shrink-0 mb-4">
            <ProgressBar />
          </div>
          <main className="flex-1 overflow-y-auto no-scrollbar py-2">
            <Question />
          </main>
          <div className="shrink-0 mt-4 border-t-4 border-slate-900 pt-4">
            <Footer />
          </div>
        </div>
      )}

      {/* 5. Finish State */}
      {status === "finish" && <FinishScreen />}
    </div>
  );
}

export default MCQScreen;
