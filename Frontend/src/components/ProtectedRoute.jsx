import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  // 1. Check if token exists in LocalStorage
  const token = localStorage.getItem("token");

  // 2. If no token, send to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 3. SAFETY CHECK: If user is blocked, kick them out
  if (user && user.isBlocked) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
