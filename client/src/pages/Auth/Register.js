import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout
      title="Register - ShopEase"
      description="Create an account to enjoy the best shopping experience with ShopEase."
    >
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Create Your Account</h4>
          <div className="input-container">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="address">Address</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Register Now
          </button>
          <p className="subtitle">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
