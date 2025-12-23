import React from 'react';
import './MeetingCard.css';

const WeeklyTicketShape = (props) => (
    <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 457 172" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" 
        className="weekly-card-svg-background"
        {...props}
    >
        <path 
            d="M442 0H15C6.71573 0 0 6.71572 0 15V67.2881C0 71.2144 2.25602 74.7913 5.79923 76.4827L7.57095 77.3286C15.219 80.9796 14.5106 92.0908 6.46081 94.741C2.60532 96.0104 0 99.611 0 103.67V157C0 165.284 6.71572 172 15 172H442C450.284 172 457 165.284 457 157V103.588C457 99.57 454.442 95.9983 450.638 94.705C442.726 92.0147 442.014 81.1027 449.51 77.4073L451.304 76.5225C454.792 74.8031 457 71.2522 457 67.3638V15C457 6.71573 450.284 0 442 0Z" 
            fill="url(#paint0_linear_weekly)" 
            fillOpacity="0.6"
        />
        <defs>
            <linearGradient id="paint0_linear_weekly" x1="4.10069" y1="6.6154" x2="459.762" y2="153.514" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6F42C1"/>
                <stop offset="1" stopColor="#128293" stopOpacity="0.5"/>
            </linearGradient>
        </defs>
    </svg>
);


const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const WeeklyMeetingCard = ({ meeting }) => {

  return (
    <div className="weekly-card">
        
      <div className="weekly-card-svg-wrapper">
        <WeeklyTicketShape />
      </div>
        
      <div className="meeting-number-tag left-tag">
        MEETING {meeting.meetingNumber}
      </div>

      <div className="weekly-card-main-wrapper">
        
        <div className="title-role">
            <h3 className="weekly-name">{meeting.name}</h3>
            <p className="weekly-role">{meeting.role}</p>
        </div>
      
        <div className="weekly-card-content">
          
          <div className="weekly-info">
              <div className="weekly-platform-time">
                <div className="platform-detail">
                    <span className="platform-icon"><LocationIcon /></span>
                    <span className="platform-name">{meeting.platform}</span>
                </div>
                
                <div className="time-detail">
                    <span className="time-icon"><ClockIcon /></span>
                    <span className="time-range">{meeting.timeRange}</span>
                </div>
              </div>
          </div>
          
          <div className="weekly-date">
             <div className="weekly-date-column">
                  <div className="day">{meeting.day}</div>
                  <div className="date-number">{meeting.date}</div>
                  <div className="month-year">{meeting.monthYear}</div>
                </div>
           </div>
            
        </div>
      </div>
      
      <div className="meeting-number-tag right-tag">
        MEETING {meeting.meetingNumber}
      </div>
    </div>
  );
};

export default WeeklyMeetingCard;