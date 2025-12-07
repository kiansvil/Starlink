// Sidebar.jsx
import React, { useState } from 'react';
import './Sidebar.css';

// SVG آیکون‌ها
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);




const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const Sidebar = ({ activePage, onLogout, onNavigate }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const mainMenuItems = [
    { id: 'meetings', label: 'My meetings', icon: <CalendarIcon /> },
    { id: 'payments', label: 'Payments', icon: <CreditCardIcon /> },
    { id: 'favorites', label: 'Favorites', icon: <HeartIcon /> },
  ];

  const settingsSubItems = [
    { id: 'account', label: 'Account'},
    { id: 'password', label: 'Password' },
  ];

  const handleMenuItemClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="user-panel">
          <div className="star-link">
            <span className="star-icon">
              <StarIcon />
            </span>
            <span className="star-text">Star link</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-menu">
        {/* بخش اصلی منو */}
        {mainMenuItems.map(item => (
          <button
            key={item.id}
            className={`menu-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </button>
        ))}

        {/* Setting با زیرمنو */}
        <div className="settings-section">
          <button
            className={`settings-toggle ${isSettingsOpen ? 'open' : ''}`}
            onClick={handleSettingsClick}
          >
            <div className="menu-item">
              <span className="menu-icon">
                <SettingsIcon />
              </span>
              <span className="menu-label">Setting</span>
              <span className={`dropdown-arrow ${isSettingsOpen ? 'open' : ''}`}>
                <ArrowDownIcon />
              </span>
            </div>
          </button>

          {/* زیرمنوی Setting */}
          {isSettingsOpen && (
            <div className="settings-submenu">
              {settingsSubItems.map(item => (
                <button
                  key={item.id}
                  className={`submenu-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  <span className="submenu-icon">{item.icon}</span>
                  <span className="submenu-label">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="logout-section">
        <button className="logout-btn" onClick={onLogout}>
          <span className="logout-icon">
            <LogoutIcon />
          </span>
          <span>Log out</span>
        </button>
      </div>
      </nav>

     
    </div>
  );
};

export default Sidebar;