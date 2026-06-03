import React from "react";
import { useSelector } from "react-redux";
import { useResultLogic } from "../hooks/useResultLogic";
import { useScore } from "../hooks/useScore";
import { usePDF } from "../hooks/usePDF";

import ResultNav from "../components/ResultNav";
import ResultSidebar from "../components/ResultSidebar";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";

function ResultScreen() {
  // 1. Get allQuestions and totalPoints from Redux
  const {
    points, // current part points
    totalPoints, // cumulative points
    questions, // current 50 questions
    allQuestions, // all questions in the category
    userAnswers,
    mode,
    category,
  } = useSelector((state) => state.quiz);

  const { token, user } = useSelector((state) => state.auth);

  // 2. LOGIC FIX:
  // If you want to see results for EVERY question in the category,
  // use allQuestions. If you only want the last part, keep 'questions'.
  // NOTE: This assumes userAnswers index matches allQuestions index.
  const { loading, filter, setFilter, filteredData, reviewData } =
    useResultLogic(allQuestions, userAnswers, token, mode);

  const { userName, setUserName, saveScore, saving } = useScore(
    totalPoints, // Use totalPoints to save the full session score
    user,
    token,
    category,
    mode,
  );

  const { exportPDF } = usePDF(category, reviewData);

  if (!questions || questions.length === 0) return null;
  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-50">
      <ResultNav category={category} onExport={exportPDF} />

      <main className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        <ResultSidebar
          points={totalPoints} // Display total points
          // Calculate total possible points for all questions
          total={allQuestions.reduce((acc, q) => acc + (q.points || 10), 0)}
          userName={userName}
          setUserName={setUserName}
          onSave={saveScore}
          saving={saving}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="flex-1 space-y-4">
          {filteredData.map((item) => (
            <ResultCard key={item.originalNo} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ResultScreen;
