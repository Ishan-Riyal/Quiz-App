import { useState, useEffect } from "react";
import { fetchWithAuth } from "../utils/api";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [activeTab, setActiveTab] = useState("mcqs");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetchWithAuth(`${API_BASE}/api/users/categories`);
        const data = await res.json();
        setCategories(data);
        if (data.length > 0) setCategory(data[0]);
      } catch (err) {
        console.error("Cat Error:", err);
      }
    };
    fetchCats();
  }, []);

  useEffect(() => {
    if (!category) return;
    const fetchLB = async () => {
      setLoading(true);
      try {
        const res = await fetchWithAuth(
          `${API_BASE}/api/users/leaderboard?type=${activeTab}&category=${category}`,
        );
        const data = await res.json();
        setLeaderboard(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("LB Error:", err);
      }
      setLoading(false);
    };
    fetchLB();
  }, [activeTab, category]);

  return {
    leaderboard,
    loading,
    activeTab,
    setActiveTab,
    category,
    setCategory,
    categories,
  };
};
