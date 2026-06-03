import { useState, useEffect } from "react";

export function useReveal(questionId, mode) {
  const [revealedData, setRevealedData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setRevealedData("");
  }, [questionId, mode]);

  async function handleReveal() {
    if (!questionId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/quiz/theory/reveal/${questionId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setRevealedData(data.answer);
    } catch (err) {
      console.error("Reveal Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return { revealedData, loading, handleReveal };
}
