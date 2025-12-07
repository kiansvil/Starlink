import React from 'react';
import './Header.css';

const Header = ({ title, user }) => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="header-right">
        <div className="notification-bell">🔔</div>
        <div className="user-profile">
          <div className="profile-avatar">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <span className="profile-name">{user?.name || 'User'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;