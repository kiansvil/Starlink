// Header.jsx
import React from 'react';
import './Header.css';

// SVG آیکون همبرگری
const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);


const Header = ({ title, user, onMenuToggle }) => {
  return (
    <header className="dashboard-header">
      
      {/* دکمه همبرگری - فقط در نماهای کوچک نمایش داده می‌شود */}
      <button className="menu-toggle-btn" onClick={onMenuToggle}>
        <HamburgerIcon />
      </button>

      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>
      
      <div className="header-right">
        <div className="notification-bell">
          {/* آیکون زنگوله */}
          <svg width="23" height="23" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4388 72.6172C11.3932 79.471 16.0677 84.2284 21.7909 86.5992C43.7328 95.6891 74.2672 95.6891 96.2088 86.5992C101.932 84.2284 106.607 79.471 105.561 72.6172C104.919 68.4051 101.742 64.8975 99.3875 61.4726C96.3042 56.9315 95.9979 51.978 95.9974 46.7083C95.9974 26.3428 79.4332 9.83331 59 9.83331C38.567 9.83331 22.0027 26.3428 22.0027 46.7083C22.0022 51.978 21.6959 56.9315 18.6126 61.4726C16.2586 64.8975 13.0813 68.4051 12.4388 72.6172Z" stroke="#ffff" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M39.3333 93.4167C41.5876 101.899 49.5379 108.167 59 108.167C68.4621 108.167 76.4124 101.899 78.6667 93.4167" stroke="#ffff" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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