// FutureMeetingCard.jsx
import React from 'react';
import './MeetingCard.css';

const FutureMeetingCard = ({ meeting, index }) => {

  const meetingNumber = index + 1;

  return (
    <div className="future-card-vertical">
      {/* خط بالا: عنوان */}
      <div className="meeting-header-line">
       
        <div className="meeting-title-number">
          <span className="meeting-title-text">Meeting</span>
          <span className="meeting-number">{meetingNumber}</span>
        </div>
      </div>
      
  
      <div className="meeting-details-horizontal">
        <div className="detail-item-h date-h">
          {meeting.date}
        </div>
        <div className="detail-item-h time-h">
          {meeting.time}
        </div>
        <div className="detail-item-h with-h">
          with {meeting.with}
        </div>
      </div>
    </div>
  );
};

export default FutureMeetingCard;