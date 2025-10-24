import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/dashboard", { withCredentials: true })
      .then((res) => {
        setAdmin(res.data.admin);
      })
      .catch(() => {
        navigate("/admin/login");
      });
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post("http://localhost:4000/api/admin/logout", {}, { withCredentials: true });
    navigate("/admin/login");
  };

  if (!admin) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {admin.name || admin.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
