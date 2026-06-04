import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const useQuestionForm = (type, idOrCollectionId) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const isAddMode = location.pathname.includes("/add-question/");
  const questionId = isAddMode ? null : idOrCollectionId;
  const folderValue = isAddMode ? idOrCollectionId : null;

  const [formData, setFormData] = useState({
    category: "",
    question: "",
    description: "",
    codeSnippet: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    answer: "",
    collectionId: !isAddMode ? folderValue : "",
  });

  useEffect(() => {
    if (questionId) {
      const fetchDetail = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem("token");
          const res = await fetch(
            `${API_BASE}/api/admin/get-single/${type}/${questionId}`,
            { headers: { Authorization: `Bearer ${token}` } },
          );
          const data = await res.json();
          if (res.ok) {
            setFormData({
              ...data,
              collectionId: data.collectionId || "",
              category: data.category || "",
              question: data.title || data.question || "",
              correctAnswer:
                data.correctOption !== undefined
                  ? String(data.correctOption)
                  : "",
              options: data.options || ["", "", "", ""],
              answer: data.answer || "",
              description: data.description || "",
              codeSnippet: data.codeSnippet || "",
            });
          }
        } catch (err) {
          toast.error("Failed to load question details!");
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    }
  }, [questionId, type]);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalData = {
      category: formData.category,
      ...(isAddMode
        ? { collectionName: folderValue }
        : { collectionId: formData.collectionId }),
      type,
      ...(type === "theory" && {
        title: formData.question,
        answer: formData.answer,
      }),
      ...(type === "mcqs" && {
        question: formData.question,
        options: formData.options,
        correctOption: Number(formData.correctAnswer),
      }),
      ...(type === "coding" && {
        title: formData.question,
        description: formData.description,
        codeSnippet: formData.codeSnippet,
      }),
    };

    const url = questionId
      ? `${API_BASE}/api/admin/update/${type}/${questionId}`
      : `${API_BASE}/api/admin/add/${type}`;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(url, {
        method: questionId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(finalData),
      });

      const resData = await res.json();
      if (res.ok) {
        toast.success("Saved successfully!");
        navigate(-1);
      } else {
        toast.error(resData.message || "Save failed!");
      }
    } catch (err) {
      toast.error("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, loading, submitForm, isAddMode };
};
