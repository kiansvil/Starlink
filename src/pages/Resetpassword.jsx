import React, { useState } from "react";
import AuthLayout from "../components/ AuthLayout";
import '../components/AuthLayout.css'

const ResetPassword = ({ onFormSwitch }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reset password data:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <AuthLayout>
        <div className="auth-form-container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Check Your Email</h3>
            <p>We've sent a password reset link to your email</p>
            <button 
              className="btn-primary"
              onClick={() => onFormSwitch('login')}
            >
              Back to Login
            </button>
          </div>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout>
      <div className="auth-form-container">
        <div className="auth-header">
          <h2>Reset Password</h2>
          <p className="auth-subtitle">Enter your new password below</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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
            <label className="form-label">New Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input" 
              placeholder="Enter new password"
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
              placeholder="Confirm new password"
              required 
            />
          </div>

          <button type="submit" className="btn-primary">
            Continue
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Remember your password?{' '}
            <button 
              type="button"
              className="auth-link"
              onClick={() => onFormSwitch('login')}
            >
              Back to login
            </button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;