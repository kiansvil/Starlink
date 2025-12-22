import React from 'react';
import './AuthForm.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        {children}
      </div>

      <div className="auth-right">
        <div className="overlay"></div>
        <img src="/src/assets/Frame 1405.jpg" alt="bg" className="auth-bg" />
      </div>
    </div>
  );
};

export default AuthLayout;