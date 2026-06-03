import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/categories");
      const data = await res.json();
      if (res.ok) setCategories(data);
    } catch (err) {
      toast.error("Failed to load categories!");
    } finally {
      setLoading(false);
    }
  };

  const AddCollection = async (catData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(catData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Category created successfully!");
        fetchCategories();
        return true;
      } else {
        toast.error(data.message || "Something went wrong");
        return false;
      }
    } catch (err) {
      toast.error("Server error!");
      return false;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, fetchCategories, AddCollection };
};
