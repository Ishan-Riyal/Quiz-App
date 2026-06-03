import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AuthInput = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    className="border-2 w-full border-slate-900 p-3.5 rounded-xl font-bold text-sm md:text-base outline-none focus:ring-4 ring-[#7C3AED]/20 transition-all placeholder:text-slate-300"
  />
);

function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { register, loading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F3FF] px-4">
      <div className="w-full max-w-sm md:max-w-md">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter text-center italic uppercase">
          REGIS<span className="text-[#7C3AED]">TER</span>
        </h1>

        <div className="relative group">
          <div className="absolute inset-0 bg-slate-900 rounded-3xl translate-x-2 translate-y-2"></div>
          <form
            onSubmit={handleSubmit}
            className="relative bg-white border-4 border-slate-900 p-6 md:p-8 rounded-3xl flex flex-col gap-5"
          >
            {error && (
              <div className="bg-rose-50 border-2 border-rose-500 text-rose-600 p-2 rounded-lg text-xs font-black text-center uppercase italic">
                {error}
              </div>
            )}

            <AuthInput
              type="text"
              placeholder="FULL NAME"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <AuthInput
              type="email"
              placeholder="EMAIL ADDRESS"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <div>
              <AuthInput
                type="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <p className="text-[10px] text-slate-400 font-black mt-2 ml-1 uppercase tracking-wider">
                Min 8 chars (Letter + Number)
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#7C3AED] text-white font-black py-4 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] uppercase tracking-widest active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 text-sm"
            >
              {loading ? "Creating..." : "Create Account 🚀"}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-[11px] font-black text-slate-500 uppercase tracking-widest">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#7C3AED] underline underline-offset-4 decoration-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterScreen;
