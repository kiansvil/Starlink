import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import MeetingCard from '../components/Dashboard/MeetingCard';
import AccountTab from '../components/Dashboard/AccountTab';
import './DashboardPage.css';

const DashboardPage = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('meetings'); // 'meetings' یا 'account'

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token) {
      window.location.href = '/login';
      return;
    }
    
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    
    const sampleMeetings = [
      {
        id: 1,
        title: "Meeting 1",
        date: "8 October",
        time: "7:50 PM",
        with: "lain Alan",
        status: "upcoming"
      },
      {
        id: 2,
        title: "Meeting 2",
        date: "8 October",
        time: "7:50 PM",
        with: "lain Alan",
        status: "upcoming"
      },
      {
        id: 3,
        title: "Meeting 3",
        date: "8 October",
        time: "7:50 PM",
        with: "lain Alan",
        status: "upcoming"
      },
      {
        id: 4,
        title: "Meeting 4",
        date: "8 October",
        time: "7:50 PM",
        with: "lain Alan",
        status: "upcoming"
      }
    ];
    
    setMeetings(sampleMeetings);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.reload();
    }
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="error-container">
        <h3>Session expired</h3>
        <p>Please login again</p>
        <button onClick={handleLogout}>Go to Login</button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Sidebar 
        activePage={activeTab === 'account' ? 'accounts' : 'dashboard'}
        onLogout={handleLogout}
        userName={user.name || user.email || 'User'}
        onNavigate={handleTabChange}
      />
      
      <div className="dashboard-main">
        <Header 
          title={activeTab === 'account' ? "Setting (Account)" : "My Meeting"} 
          user={user} 
        />
        
      
        
        <div className="dashboard-content">
          {activeTab === 'meetings' ? (
            <>
              <div className="meetings-section">
                <h2 className="section-title">Future meeting</h2>
                <div className="meetings-grid">
                  {meetings.map(meeting => (
                    <MeetingCard 
                      key={meeting.id}
                      meeting={meeting}
                    />
                  ))}
                </div>
              </div>

              <div className="empty-section">
                <div className="empty-state">
                  <div className="empty-icon">📅</div>
                  <h3>No meeting available this week</h3>
                  <p>You don't have any meetings scheduled for this week</p>
                  <button className="btn-secondary">
                    Schedule New Meeting
                  </button>
                </div>
              </div>
            </>
          ) : (
            <AccountTab user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;