import React from 'react';
import './MeetingCard.css';

const MeetingCard = ({ meeting }) => {
  return (
    <div className="meeting-card">
      <div className="meeting-header">
        <h3 className="meeting-title">{meeting.title}</h3>
        <span className="meeting-badge">Upcoming</span>
      </div>
      
      <div className="meeting-details">
        <div className="detail-item">
          <span className="detail-label">Date:</span>
          <span className="detail-value">{meeting.date}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Time:</span>
          <span className="detail-value">{meeting.time}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">With:</span>
          <span className="detail-value">{meeting.with}</span>
        </div>
      </div>
      
      <div className="meeting-actions">
        <button className="action-btn join-btn">Join Meeting</button>
        <button className="action-btn cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default MeetingCard;