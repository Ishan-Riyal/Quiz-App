import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginScreen from "./Pages/LoginScreen";
import HomeScreen from "./Pages/HomeScreen";
import MCQScreen from "./Pages/MCQScreen";
import TheoryScreen from "./Pages/TheoryScreen";
import CodingScreen from "./Pages/CodingScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import LeaderboardScreen from "./Pages/LeaderboardScreen";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminQuestionList from "./Pages/Admin/AdminQuestionList";
import AddQuestion from "./Pages/Admin/AddQuestion";
import ResultScreen from "./Pages/ResultScreen";
import FinishScreen from "./Pages/FinishScreen";
import ProfileScreen from "./Pages/ProfileScreen";
import UserHistoryScreen from "./Pages/UserHistoryScreen";
import UserManagement from "./Pages/Admin/UserManagement";
import TypeSelection from "./Pages/Admin/TypeSelection";
import UserTypeSelection from "./Pages/UserTypeSelection";
import StartScreen from "./Pages/StartScreen";

function App() {
  const { token: reduxToken, user: reduxUser } = useSelector(
    (state) => state.auth,
  );
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Check for authentication and admin privileges
  const hasAccess = reduxToken || storedUser?.token;
  const isAdmin = reduxUser?.role === "admin" || storedUser?.role === "admin";

  return (
    <BrowserRouter>
      {/* Global notification container */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* User Protected Routes with Dynamic Category Parameter */}
        <Route
          path="/select-mode/:category"
          element={hasAccess ? <UserTypeSelection /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={hasAccess ? <ProfileScreen /> : <Navigate to="/login" />}
        />
        <Route
          path="/history"
          element={hasAccess ? <UserHistoryScreen /> : <Navigate to="/login" />}
        />

        {/* Dynamic Quiz Routes */}
        <Route
          path="/mcqs/:category"
          element={hasAccess ? <MCQScreen /> : <Navigate to="/login" />}
        />
        <Route
          path="/theory/:category"
          element={hasAccess ? <TheoryScreen /> : <Navigate to="/login" />}
        />
        <Route
          path="/coding/:category"
          element={hasAccess ? <CodingScreen /> : <Navigate to="/login" />}
        />

        <Route
          path="/finish"
          element={hasAccess ? <FinishScreen /> : <Navigate to="/login" />}
        />
        <Route
          path="/start/:category"
          element={hasAccess ? <StartScreen /> : <Navigate to="/login" />}
        />
        <Route
          path="/result"
          element={hasAccess ? <ResultScreen /> : <Navigate to="/login" />}
        />
        <Route
          path="/leaderboard"
          element={hasAccess ? <LeaderboardScreen /> : <Navigate to="/login" />}
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            hasAccess && isAdmin ? <AdminDashboard /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/users"
          element={
            hasAccess && isAdmin ? <UserManagement /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/questions/:collectionId"
          element={
            hasAccess && isAdmin ? <TypeSelection /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/questions/:type/:collectionId"
          element={
            hasAccess && isAdmin ? <AdminQuestionList /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/add-question/:type/:id"
          element={hasAccess && isAdmin ? <AddQuestion /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/edit/:type/:id/:collectionId"
          element={hasAccess && isAdmin ? <AddQuestion /> : <Navigate to="/" />}
        />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
