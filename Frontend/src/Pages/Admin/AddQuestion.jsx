import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useQuestionForm } from "../../hooks/useQuestionForm";
import {
  FormField,
  MCQFields,
  TheoryFields,
  CodingFields,
} from "../../components/Admin/FormInputs";

import JsonUploader from "../../components/Admin/JsonUploader";
import Loader from "../../components/Loader";

const AddQuestion = () => {
  const { type, id, collectionId } = useParams();
  const navigate = useNavigate();
  const [isUploadMode, setIsUploadMode] = useState(false);
  const activeId = id || collectionId;

  const { formData, setFormData, loading, submitForm } = useQuestionForm(
    type,
    activeId,
  );

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-[#F5F3FF] p-6 font-bold">
      <div className="max-w-2xl mx-auto">
        <div className="flex bg-white border-4 border-slate-900 p-1 rounded-2xl mb-8 shadow-[6px_6px_0px_0px_#7C3AED]">
          <button
            onClick={() => setIsUploadMode(false)}
            className={`flex-1 py-3 rounded-xl uppercase font-black transition-all ${
              !isUploadMode
                ? "bg-[#7C3AED] text-white"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Add Question
          </button>
          <button
            onClick={() => setIsUploadMode(true)}
            className={`flex-1 py-3 rounded-xl uppercase font-black transition-all ${
              isUploadMode
                ? "bg-[#1E1B4B] text-white"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            Upload Question File
          </button>
        </div>

        <div className="bg-white border-4 border-slate-900 p-8 rounded-[40px] shadow-[12px_12px_0px_0px_#7C3AED]">
          <FormField label="Category Name">
            <input
              className="border-2 border-slate-900 p-4 rounded-xl w-full uppercase focus:ring-4 ring-purple-100 outline-none transition-all"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            />
          </FormField>

          {!isUploadMode ? (
            <form onSubmit={submitForm} className="mt-6 flex flex-col gap-6">
              <FormField label="Question Text">
                <textarea
                  className="border-2 border-slate-900 p-4 rounded-xl w-full focus:ring-4 ring-purple-100 outline-none transition-all"
                  rows="2"
                  value={formData.question || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, question: e.target.value })
                  }
                  required
                />
              </FormField>

              {type === "mcqs" && (
                <MCQFields
                  {...formData}
                  setFormData={setFormData}
                  formData={formData}
                />
              )}
              {type === "theory" && (
                <TheoryFields
                  value={formData.answer}
                  onChange={(e) =>
                    setFormData({ ...formData, answer: e.target.value })
                  }
                />
              )}
              {type === "coding" && (
                <CodingFields
                  {...formData}
                  setFormData={setFormData}
                  formData={formData}
                />
              )}

              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-[#10B981] text-white border-4 border-slate-900 py-4 rounded-2xl font-black shadow-[4px_4px_0px_0px_#064E3B] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest"
                >
                  Save Question
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-8 bg-white text-slate-900 border-4 border-slate-900 py-4 rounded-2xl font-black shadow-[4px_4px_0px_0px_#7C3AED] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <JsonUploader
              type={type}
              activeId={activeId}
              category={formData.category}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
