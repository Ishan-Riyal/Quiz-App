import { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

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
          `${API_BASE}/api/quiz/${typePath}/all-answers`,
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

  const reviewData = useMemo(() => {
    return questions.map((q, i) => {
      const uAnsText = userAnswers[i];
      const cAnsText = correctAnswers[i];

      const isAttempted = uAnsText !== null && uAnsText !== undefined;

      const isCorrect =
        isAttempted &&
        String(uAnsText).trim().toLowerCase() ===
          String(cAnsText).trim().toLowerCase();

      const isWrong = isAttempted && !isCorrect;
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

  const filteredData = useMemo(() => {
    const lastAnsweredIndex = userAnswers.reduce(
      (maxIdx, val, idx) => (val !== null ? idx : maxIdx),
      -1,
    );

    const sessionProgress = reviewData.slice(0, lastAnsweredIndex + 1);

    if (filter === "all") return sessionProgress;
    if (filter === "correct") return sessionProgress.filter((i) => i.isCorrect);
    if (filter === "wrong") return sessionProgress.filter((i) => i.isWrong);
    if (filter === "skipped") return sessionProgress.filter((i) => i.isSkipped);

    return sessionProgress;
  }, [filter, reviewData, userAnswers]);

  return { loading, filter, setFilter, filteredData, reviewData };
};
