import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <Layout
      title="Login - ShopEase"
      description="Access your personalized ShopEase account."
      keywords="login, ShopEase, ecommerce"
      author="Pranav J S"
    >
      <div className="auth-page-container">
        <div className="auth-card">
          <h2 className="auth-title">Welcome Back!</h2>
          <p className="auth-subtitle">
            Login to continue your shopping journey
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label className="input-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="auth-footer">
              <button type="submit" className="auth-btn">
                Login
              </button>
              <p className="auth-link-text">
                Don't have an account?{" "}
                <span
                  className="auth-link"
                  onClick={() => navigate("/register")}
                >
                  Register here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
