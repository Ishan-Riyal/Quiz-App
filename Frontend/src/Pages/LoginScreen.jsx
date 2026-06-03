import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function LoginScreen() {
  const { email, setEmail, password, setPassword, login, loading, error } =
    useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F3FF] px-4 py-8">
      <div className="w-full max-w-sm md:max-w-md">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter text-center italic uppercase">
          LOG<span className="text-[#7C3AED]">IN</span>
        </h1>

        <div className="relative group">
          <div className="absolute inset-0 bg-slate-900 rounded-3xl translate-x-2 translate-y-2 transition-all"></div>
          <form
            onSubmit={handleSubmit}
            className="relative bg-white border-4 border-slate-900 p-6 md:p-8 rounded-3xl flex flex-col gap-5"
          >
            {/* BACKEND ERROR DISPLAY */}
            {error && (
              <div className="bg-rose-50 border-2 border-rose-500 text-rose-600 p-2 rounded-lg text-xs font-black text-center uppercase italic">
                {error}
              </div>
            )}

            <AuthInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <AuthInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#7C3AED] text-white font-black py-4 rounded-xl shadow-[4px_4px_0px_0px_#0f172a] uppercase tracking-widest active:translate-y-0.5 active:shadow-none transition-all disabled:opacity-50 text-sm"
            >
              {loading ? "Verifying..." : "Enter Quiz ⚡"}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-[11px] font-black text-slate-500 uppercase tracking-wider">
          New here?{" "}
          <Link
            to="/register"
            className="text-[#7C3AED] underline underline-offset-4 decoration-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

const AuthInput = ({ label, type, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-black text-slate-400 tracking-[0.15em] uppercase ml-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="border-2 border-slate-900 p-3.5 rounded-xl font-bold focus:ring-4 ring-[#7C3AED]/10 outline-none transition-all placeholder:text-slate-300"
    />
  </div>
);

export default LoginScreen;
