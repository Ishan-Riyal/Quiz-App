import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useScore = (points, user, token, topicName, mode) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(user?.name || user?.username || "");
  const [saving, setSaving] = useState(false);

  const saveScore = async () => {
    if (!token) return toast.error("Please login first!");

    setSaving(true);
    try {
      const res = await fetch("/api/users/save-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          score: points,
          username: userName,
          category: topicName,
          type: mode,
        }),
      });

      if (res.ok) {
        toast.success("Score saved successfully! 🏆");
        navigate("/leaderboard");
      } else {
        toast.error("Failed to save score!");
      }
    } catch (err) {
      toast.error("Server error!");
    } finally {
      setSaving(false);
    }
  };

  return { userName, setUserName, saveScore, saving };
};
