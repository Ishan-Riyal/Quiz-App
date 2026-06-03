import { useState, useEffect } from "react";
import { fetchWithAuth } from "../utils/api";

export const useHardestQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetchWithAuth("/api/quiz/analytics/hardest");

      if (res.ok) {
        const data = await res.json();
        setQuestions(data);
      }
    } catch (err) {
      console.error("Failed to load hardest questions", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { questions, loading };
};
