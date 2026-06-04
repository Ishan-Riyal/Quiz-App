import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const useAdminData = () => {
  const [users, setUsers] = useState([]);
  const [collections, setCollections] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const [userRes, colRes, chartRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/users`, { headers }),
        fetch(`${API_BASE}/api/collection/all`, { headers }),
        fetch(`${API_BASE}/api/admin/analytics`, { headers }),
      ]);

      if (userRes.ok) setUsers(await userRes.json());
      if (colRes.ok) setCollections(await colRes.json());

      if (chartRes.ok) {
        const data = await chartRes.json();
        setChartData(data.chartData || data);
      }
    } catch (err) {
      toast.error("Failed to load data!");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCollection = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE}/api/collection/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.success("Deleted! 🗑️");
        fetchData();
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Delete failed");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    users,
    collections,
    chartData,
    loading,
    refresh: fetchData,
    deleteCollection,
  };
};
