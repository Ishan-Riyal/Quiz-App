import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const useImportQuestions = (type, activeId, category) => {
  const navigate = useNavigate();

  const handleFileSelect = async (e) => {
    if (!category || category.trim() === "") {
      e.target.value = "";
      return toast.error("Please enter a Category Name first!");
    }

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target.result);

        if (!Array.isArray(data)) {
          return toast.error("JSON must be an array of questions!");
        }

        const questions = data.map((q) => ({
          ...q,
          category: category.toUpperCase(),
          collectionId: activeId,
        }));

        const res = await fetch(`${API_BASE}/api/admin/multiple-add/${type}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ collectionName: activeId, questions }),
        });

        if (res.ok) {
          toast.success("Import Successful!");
          navigate(-1);
        } else {
          toast.error("Server rejected the data.");
        }
      } catch (err) {
        console.error("Import Error:", err);
        toast.error("Invalid JSON file format!");
      } finally {
        e.target.value = "";
      }
    };
    reader.readAsText(file);
  };

  return { handleFileSelect };
};
