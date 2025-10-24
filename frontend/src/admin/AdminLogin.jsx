import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:4000/api/admin/login",
        { email, password },
        {
          withCredentials: true, // important for cookies
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Login response:", res.data);

      // If login successful, redirect to dashboard
      if (res.data?.admin) {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleLogin} autoComplete="on">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="admin-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              autoComplete="email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
