export const FormField = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-black uppercase text-[10px] text-[#1E1B4B] tracking-[0.2em] ml-1">
      {label}
    </label>
    {children}
  </div>
);

export const MCQFields = ({
  options,
  setFormData,
  formData,
  correctAnswer,
}) => (
  <div className="flex flex-col gap-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((opt, i) => (
        <input
          key={i}
          placeholder={`Option ${i}`}
          className="border-4 border-slate-900 p-3 rounded-2xl font-black text-sm outline-none focus:bg-purple-50 focus:border-[#7C3AED] transition-all shadow-[4px_4px_0px_0px_#1E1B4B] focus:shadow-none"
          value={opt}
          onChange={(e) => {
            const newOpts = [...options];
            newOpts[i] = e.target.value;
            setFormData({ ...formData, options: newOpts });
          }}
          required
        />
      ))}
    </div>
    <FormField label="Correct Index (0-3)">
      <input
        type="number"
        min="0"
        max="3"
        className="w-full border-4 border-slate-900 p-3 rounded-2xl font-black bg-white focus:bg-purple-50 outline-none transition-all shadow-[4px_4px_0px_0px_#7C3AED]"
        value={correctAnswer}
        onChange={(e) =>
          setFormData({ ...formData, correctAnswer: e.target.value })
        }
        required
      />
    </FormField>
  </div>
);

export const TheoryFields = ({ value, onChange }) => (
  <FormField label="Answer">
    <textarea
      className="border-4 border-slate-900 p-4 rounded-4xl bg-white font-bold text-sm outline-none focus:bg-purple-50 focus:border-[#7C3AED] transition-all shadow-[6px_6px_0px_0px_#1E1B4B]"
      rows="6"
      value={value}
      onChange={onChange}
      required
    />
  </FormField>
);

export const CodingFields = ({
  description,
  codeSnippet,
  setFormData,
  formData,
}) => (
  <div className="flex flex-col gap-4">
    <textarea
      placeholder="Description"
      className="border-4 border-slate-900 p-4 rounded-4xl bg-white font-bold text-sm outline-none focus:bg-purple-50 transition-all shadow-[6px_6px_0px_0px_#7C3AED]"
      rows="4"
      value={description}
      onChange={(e) =>
        setFormData({ ...formData, description: e.target.value })
      }
      required
    />
    <textarea
      placeholder="Initial Code"
      className="border-4 border-slate-900 p-4 rounded-4xl font-mono text-xs bg-slate-900 text-purple-400 outline-none focus:ring-4 ring-purple-500/20"
      rows="6"
      value={codeSnippet}
      onChange={(e) =>
        setFormData({ ...formData, codeSnippet: e.target.value })
      }
    />
  </div>
);
