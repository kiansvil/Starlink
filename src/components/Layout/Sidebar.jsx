import React, { useState, useEffect } from 'react';
import './Sidebar.css';



const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const MeetingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CreditCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);




const Sidebar = ({ activePage, onLogout, onNavigate, isMobileOpen, toggleSidebar }) => {
  const isSettingSubActive = activePage === 'account' || activePage === 'password';
  const [isSettingsOpen, setIsSettingsOpen] = useState(isSettingSubActive);
  
  const mainMenuItems = [
    { id: 'meetings', label: 'My meetings', icon: <MeetingsIcon /> },
    { id: 'payments', label: 'Payments', icon: <CreditCardIcon /> },
    { id: 'favorites', label: 'Favorites', icon: <HeartIcon /> },
  ];

  const settingsSubItems = [
    { id: 'account', label: 'Account'},
    { id: 'password', label: 'Password' },
  ];
  
  useEffect(() => {
    if (isSettingSubActive) {
        setIsSettingsOpen(true);
    }
  }, [activePage, isSettingSubActive]);


  const handleMenuItemClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
      if (toggleSidebar && window.innerWidth <= 1024) { 
        toggleSidebar();
      }
    }
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  
  const isSettingActive = isSettingSubActive; 


  return (
    <div className={`sidebar-container ${isMobileOpen ? 'open' : ''}`}>
      
      {isMobileOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <div className="sidebar">
          
           <button className="close-menu-btn" onClick={toggleSidebar}>
              <CloseIcon />
           </button>
           
           <div className="sidebar-header">
                <div className="star-link">
                  <span className="star-icon">
                    <StarIcon />
                  </span>
                  <span className="star-text">Star link</span>
                </div>
                <div className="sidebar-divider top-divider"></div>
           </div>

          <nav className="sidebar-menu">
            {mainMenuItems.map(item => (
              <button
                key={item.id}
                className={`menu-item ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                {activePage === item.id && <div className="active-glow"></div>} 
                
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </button>
            ))}

            <div className="settings-section">
              <button
                className={`settings-toggle ${isSettingsOpen ? 'open' : ''} ${isSettingActive ? 'active' : ''}`}
                onClick={handleSettingsClick}
              >
                <div className={`menu-item ${isSettingActive ? 'active' : ''}`}>
                   {isSettingActive && <div className="active-glow"></div>}
                   
                  <span className="menu-icon">
                    <SettingsIcon />
                  </span>
                  <span className="menu-label">Setting</span>
                  <span className={`dropdown-arrow ${isSettingsOpen ? 'open' : ''}`}>
                    <ArrowDownIcon />
                  </span>
                </div>
              </button>

              {isSettingsOpen && (
                <div className="settings-submenu">
                  {settingsSubItems.map(item => (
                    <button
                      key={item.id}
                      className={`submenu-item ${activePage === item.id ? 'active' : ''}`}
                      onClick={() => handleMenuItemClick(item.id)}
                    >
                      <span className="submenu-label">{item.label}</span>
                      {activePage === item.id && <div className="submenu-active-dot"></div>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="sidebar-divider"></div>

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
    </div>
  );
};

export default Sidebar;