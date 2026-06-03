import { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";

export const useResultLogic = (questions, userAnswers, token, mode) => {
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        setLoading(true);
        const typePath = mode?.startsWith("coding") ? "coding" : "mcq";
        const res = await fetch(
          `http://localhost:8000/api/quiz/${typePath}/all-answers`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ questionIds: questions.map((q) => q._id) }),
          },
        );
        const data = await res.json();
        if (res.ok) setCorrectAnswers(data.answers);
      } catch (err) {
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    };
    if (questions.length > 0) fetchAnswers();
  }, [questions, token, mode]);

  // Processes raw data into clear statuses
  const reviewData = useMemo(() => {
    return questions.map((q, i) => {
      const uAnsText = userAnswers[i];
      const cAnsText = correctAnswers[i];

      // CRITICAL LOGIC:
      // null means "Never touched" or "Passed over"
      const isAttempted = uAnsText !== null && uAnsText !== undefined;

      const isCorrect =
        isAttempted &&
        String(uAnsText).trim().toLowerCase() ===
          String(cAnsText).trim().toLowerCase();

      // WRONG is attempted but incorrect
      const isWrong = isAttempted && !isCorrect;

      // SKIPPED is when the user reached this question but uAnsText is null
      const isSkipped = !isAttempted;

      const foundIdx = q.options.findIndex(
        (opt) =>
          String(opt).trim().toLowerCase() ===
          String(cAnsText).trim().toLowerCase(),
      );

      return {
        ...q,
        originalNo: i + 1,
        userSelected: uAnsText,
        correctIdx: foundIdx,
        isCorrect,
        isWrong,
        isSkipped,
      };
    });
  }, [questions, userAnswers, correctAnswers]);

  // Handles filtering and ensures we start from Question 1
  const filteredData = useMemo(() => {
    // Find the furthest point reached in the userAnswers array
    // findLastIndex ensures we catch the end of the current session
    const lastAnsweredIndex = userAnswers.reduce(
      (maxIdx, val, idx) => (val !== null ? idx : maxIdx),
      -1,
    );

    // Slice everything from Question 1 up to the last touched question
    const sessionProgress = reviewData.slice(0, lastAnsweredIndex + 1);

    if (filter === "all") return sessionProgress;
    if (filter === "correct") return sessionProgress.filter((i) => i.isCorrect);
    if (filter === "wrong") return sessionProgress.filter((i) => i.isWrong);
    if (filter === "skipped") return sessionProgress.filter((i) => i.isSkipped);

    return sessionProgress;
  }, [filter, reviewData, userAnswers]);

  return { loading, filter, setFilter, filteredData, reviewData };
};
