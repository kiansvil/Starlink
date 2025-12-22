import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import "../components/AuthLayout.css";

const Register = ({ onFormSwitch }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", formData);
    // Add your registration logic here
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    onFormSwitch("login");
  };

  return (
    <AuthLayout>
      <div className="auth-form-container">
        <div className="auth-header">
          <h2>
            Join <span className="brand-accent">STAR LINK</span>
          </h2>
          <p className="auth-subtitle">Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" required />
              <span className="checkmark"></span>I agree to the{" "}
              <a href="#!" className="terms-link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#!" className="terms-link">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <button type="button" className="auth-link" onClick={handleSignIn}>
              Sign in
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
