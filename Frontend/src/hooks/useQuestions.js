import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const useQuestions = (type, categoryName) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("");

  const token = localStorage.getItem("token");

  const fetchDocs = useCallback(async () => {
    if (!categoryName || categoryName === "undefined") return;
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/api/admin/collection/${type}/${categoryName}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const data = await res.json();
      if (res.ok) setQuestions(Array.isArray(data) ? data : []);
    } catch (err) {
      toast.error("Failed to load questions!");
    } finally {
      setLoading(false);
    }
  }, [type, categoryName, token]);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  const filtered = questions.filter((q) => {
    const text = (q.question || q.title || "").toLowerCase();
    return (
      text.includes(search.toLowerCase()) && (cat === "" || q.category === cat)
    );
  });

  const exportToPDF = () => {
    if (filtered.length === 0) return toast.info("Nothing to export");
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`${categoryName} Question Bank`, 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Total Questions: ${filtered.length}`, 14, 30);

    const tableColumn = ["No.", "Question", "Options", "Correct"];
    const tableRows = filtered.map((q, i) => {
      const rawIdx =
        q.correctAnswer !== undefined ? q.correctAnswer : q.correctOption;
      const displayIdx =
        rawIdx !== undefined && rawIdx !== null ? Number(rawIdx) + 1 : "N/A";

      return [
        i + 1,
        q.question || q.title || "N/A",
        q.options
          ? q.options.map((opt, idx) => `${idx + 1}. ${opt}`).join("\n")
          : "N/A",
        displayIdx,
      ];
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 35,
      theme: "grid",
      styles: { fontSize: 8, cellPadding: 3 },
      headStyles: { fillColor: [79, 70, 229] },
    });

    doc.save(`${categoryName}_Questions.pdf`);
    toast.success("PDF Downloaded! 📄");
  };

  const handleDelete = async (idOrIds) => {
    const isBulk = Array.isArray(idOrIds);
    if (!window.confirm("Are you sure you want to delete this?")) return;
    const url = isBulk
      ? `http://localhost:8000/api/admin/multiple-delete/${type}`
      : `http://localhost:8000/api/admin/delete/${type}/${idOrIds}`;

    try {
      const res = await fetch(url, {
        method: isBulk ? "POST" : "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: isBulk ? JSON.stringify({ ids: idOrIds }) : null,
      });
      if (res.ok) {
        toast.success("Deleted successfully!");
        fetchDocs();
      }
    } catch (err) {
      toast.error("Delete failed!");
    }
  };

  const categories = [...new Set(questions.map((q) => q.category))].filter(
    Boolean,
  );

  return {
    filtered,
    loading,
    search,
    setSearch,
    cat,
    setCat,
    categories,
    handleDelete,
    exportToPDF,
    refresh: fetchDocs,
  };
};
