import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser, logoutUser } from "../features/auth/authSlice";
import { fetchWithAuth } from "../utils/api";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    setLoading(true);

    try {
      const res = await fetchWithAuth(`${API_BASE}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        dispatch(setUser(data));
        toast.success("Welcome back! 🚀");

        if (data.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setError(data.message);
        toast.error(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server Error! Please try again.");
      toast.error("Server Error!");
    } finally {
      setLoading(false);
    }
  };

  const register = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchWithAuth(`${API_BASE}/api/auth/register`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Account Created! 🎉");
        navigate("/login");
      } else {
        setError(data.message);
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Server Error!");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    navigate("/login");
    toast.info("Logged out safely.");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
    register,
    logout,
    loading,
    error,
  };
};
