import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import FutureMeetingCard from '../components/Dashboard/FutureMeetingCard';
import WeeklyMeetingCard from '../components/Dashboard/WeeklyMeetingCard';
import AccountTab from '../components/Dashboard/AccountTab';
import PaymentPage from '../components/Dashboard/PaymentPage'; 
import FavoritesPage from '../components/Dashboard/FavoritesPage';
import PasswordTab from '../components/Dashboard/PasswordTab'; 
import './DashboardPage.css';



import emiliaImage from '../assets/emilia.jpg';
import harryImage from '../assets/harry.png';
import tomImage from '../assets/clark.jpg';
import emilia2Image from '../assets/clarke.jpg';
const DashboardPage = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [weeklyMeetings, setWeeklyMeetings] = useState([]); 
  const [futureMeetings, setFutureMeetings] = useState([]); 
  const [favorites, setFavorites] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('meetings'); 
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsMobileOpen(prev => !prev);
  };

  useEffect(() => {

    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    

    const sampleWeekly = [
        { id: 101, name: "Serena Williams", role: "Athlete", platform: "Zoom", timeRange: "19:30 BST - 23:00 BST", day: "Thursday", date: "8", monthYear: "December 2021", meetingNumber: 3 },
        { id: 102, name: "Taylor Swift", role: "Singer", platform: "Zoom", timeRange: "19:30 BST - 23:00 BST", day: "Thursday", date: "12", monthYear: "December 2021", meetingNumber: 3 },
        { id: 103, name: "Lucy Hale", role: "Actor", platform: "Zoom", timeRange: "19:30 BST - 23:00 BST", day: "Thursday", date: "24", monthYear: "December 2021", meetingNumber: 3 },
    ];

    const sampleFuture = [
        { id: 1, title: "Meeting 1", date: "8 October", time: "7:50 PM", with: "lain Alan" },
        { id: 2, title: "Meeting 2", date: "8 October", time: "7:50 PM", with: "lain Alan" },
        { id: 3, title: "Meeting 3", date: "8 October", time: "7:50 PM", with: "lain Alan" },
        { id: 4, title: "Meeting 4", date: "8 October", time: "7:50 PM", with: "lain Alan" }
    ];
    
    const sampleFavorites = [
        { 
            id: 1, 
            name: "emilia clarke", 
            role: "Actor", 
            cost: "$178", 
            rating: 4.5, 
            imageUrl: emiliaImage, 
            tags: ["Game of thrones", "Resident evil exinction"] 
        },
        { 
            id: 2, 
            name: "Harry styles", 
            role: "Singer", 
            cost: "$178", 
            rating: 5, 
            imageUrl: harryImage, 
            tags: ["My cousin rachel", "Jack taylor"] 
        },
        { 
            id: 3, 
            name: "Tom Hardy", 
            role: "Actor", 
            cost: "$178", 
            rating: 3, 
            imageUrl: tomImage, 
            tags: ["Danton abbey", "My cousin rachel"] 
        },
        { 
            id: 4, 
            name: "emilia clarke", 
            role: "Actor", 
            cost: "$178", 
            rating: 4, 
            imageUrl: emilia2Image, 
            tags: ["Resident evil exinction", "Jack taylor"] 
        },
    ];


    setWeeklyMeetings(sampleWeekly);
    setFutureMeetings(sampleFuture);
    setFavorites(sampleFavorites); 
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
    if (tabName === 'account' || tabName === 'password') {
        setActiveTab(tabName);
    } else if (tabName === 'payments') {
        setActiveTab('payments'); 
    } else if (tabName === 'favorites') {
        setActiveTab('favorites'); 
    } else {
        setActiveTab('meetings'); 
    }
  };
  
  if (isLoading || !user) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  let headerTitle = "My Meeting";
  if (activeTab === 'account') {
    headerTitle = "Setting (Account)";
  } else if (activeTab === 'password') { 
    headerTitle = "Setting (Change password)";
  } else if (activeTab === 'payments') {
    headerTitle = "Payment"; 
  } else if (activeTab === 'favorites') {
    headerTitle = "Favorite"; 
  }


  return (
    <div className="dashboard-container">
      <Sidebar 
    
        activePage={activeTab} 
        onLogout={handleLogout}
        userName={user.name || user.email || 'User'}
        onNavigate={handleTabChange}
        isMobileOpen={isMobileOpen} 
        toggleSidebar={toggleSidebar}
      />
      
      <div className="dashboard-main-wrapper">
        <Header 
          title={headerTitle} 
          user={user} 
          onMenuToggle={toggleSidebar}
        />
        
        <div className="dashboard-content">
          
          {activeTab === 'account' ? (
            <AccountTab user={user} />
          ) : activeTab === 'password' ? ( 
            <PasswordTab />
          ) : 
          
          activeTab === 'favorites' ? (
            <FavoritesPage favorites={favorites} />
          ) : activeTab === 'payments' ? (
            <PaymentPage /> 
          ) : activeTab === 'meetings' ? (
            <div className={`meetings-layout ${weeklyMeetings.length === 0 ? 'empty-state-layout' : ''}`}>
              
              <div className="weekly-meetings-column">
                
                {weeklyMeetings.length > 0 ? (
                  <>
                    <div className="weekly-header">
                       
                        <h2 className="section-title weekly-title">This week meeting</h2>
                        <span className="weekly-date-range">14-21 October</span>
                    </div>
                    {weeklyMeetings.map(meeting => (
                      <WeeklyMeetingCard 
                        key={meeting.id}
                        meeting={meeting}
                      />
                    ))}
                  </>
                ) : (
                  <div className="empty-state">
                    <div className="empty-graphic">
                        <div className="empty-moon-graphic"></div> 
                    </div>
                    <div className="empty-text">
                        <h3>No meeting available this week</h3>
                    </div>
                  </div>
                )}
              </div>

              <div className="future-meetings-column">
                <h2 className="section-title">Future meeting</h2>
                <div className="future-meetings-list">
                  {futureMeetings.map(meeting => (
                    <FutureMeetingCard 
                      key={meeting.id}
                      meeting={meeting}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="info-message">Tab not implemented yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;