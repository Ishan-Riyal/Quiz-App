import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await fetch("/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setUsers(data);
    } catch (err) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/admin/toggle-status/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setUsers(
          users.map((user) =>
            user._id === id ? { ...user, isActive: !user.isActive } : user,
          ),
        );
      } else {
        toast.error(data.message || "Action failed");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("User deleted successfully!");
        setUsers(users.filter((user) => user._id !== id));
      }
    } catch (err) {
      toast.error("Network error!");
    }
  };

  const toggleRole = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/admin/role/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(`Role updated to: ${data.role}`);
        setUsers(
          users.map((user) =>
            user._id === id ? { ...user, role: data.role } : user,
          ),
        );
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, fetchUsers, deleteUser, toggleRole, toggleStatus };
};
