import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import FinishScreen from "../Pages/FinishScreen";
import CodeEditor from "../components/CodeEditor";
import CodingScreenFooter from "../components/CodingScreenFooter";
import EmptyState from "../components/EmptyState";
import StartScreen from "./StartScreen";

function CodingScreen() {
  const { questions, allQuestions, index, status } = useSelector(
    (state) => state.quiz,
  );
  const question = questions[index];
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (question) setUserCode(question.codeSnippet || "");
  }, [index, question]);

  useEffect(() => {
    if (status === "loading") {
      const timer = setTimeout(() => navigate("/"), 2000);
      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  if (status === "finish") return <FinishScreen />;

  return (
    <div className="flex flex-col h-screen bg-[#F5F3FF] overflow-hidden font-sans">
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: #1e1e1e; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
      `}</style>

      {/* 1. Selection State: Show part picker if ready */}
      {status === "ready" && (
        <div className="flex-1 flex items-center justify-center px-6">
          {allQuestions?.length === 0 ? (
            <EmptyState
              icon="💻"
              title="No Coding Tasks"
              message="There are no coding challenges in this bank yet."
            />
          ) : (
            <StartScreen />
          )}
        </div>
      )}

      {/* 2. Active State: Show Coding Editor UI */}
      {status === "active" && (
        <>
          <div className="px-6 py-4 shrink-0 mb-4">
            <ProgressBar />
          </div>

          <div className="flex flex-col md:flex-row flex-1 overflow-hidden px-6 gap-6 mb-4">
            <div className="w-full md:w-2/5 flex flex-col h-full overflow-y-auto custom-scroll">
              <Question />
            </div>

            <CodeEditor
              userCode={userCode}
              setUserCode={setUserCode}
              output={output}
              setOutput={setOutput}
            />
          </div>

          <CodingScreenFooter />
        </>
      )}
    </div>
  );
}

export default CodingScreen;
