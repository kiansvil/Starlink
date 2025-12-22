// FutureMeetings.jsx
import React, { useState } from 'react';
import FutureMeetingCard from './FutureMeetingCard';
import './MeetingCard.css';

const FutureMeetings = () => {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      date: '8 October',
      time: '7:50 PM',
      with: 'Lain Alan'
    },
    {
      id: 2,
      date: '8 October',
      time: '7:50 PM',
      with: 'Lain Alan'
    },
    {
      id: 3,
      date: '8 October',
      time: '7:50 PM',
      with: 'Lain Alan'
    },
    {
      id: 4,
      date: '8 October',
      time: '7:50 PM',
      with: 'Lain Alan'
    }
  ]);

  const [newMeeting, setNewMeeting] = useState({
    date: '',
    time: '',
    with: ''
  });

  const addMeeting = () => {
    if (newMeeting.date && newMeeting.time && newMeeting.with) {
      const newId = meetings.length > 0 ? Math.max(...meetings.map(m => m.id)) + 1 : 1;
      
      setMeetings([
        ...meetings,
        {
          id: newId,
          date: newMeeting.date,
          time: newMeeting.time,
          with: newMeeting.with
        }
      ]);
      
      setNewMeeting({ date: '', time: '', with: '' });
    }
  };

  return (
    <div className="future-meetings-container">
      <h2 className="future-meetings-header">
        Future meeting
        <span className="meeting-count">{meetings.length} meetings</span>
      </h2>
      
      {/* فرم اضافه کردن (اختیاری) */}
      <div className="add-meeting-form" style={{ marginBottom: '20px' }}>
        <div className="form-row">
          <input
            type="text"
            placeholder="Date (e.g., 8 October)"
            value={newMeeting.date}
            onChange={(e) => setNewMeeting({...newMeeting, date: e.target.value})}
            style={{ flex: 1, padding: '8px 12px', background: '#1A1B1F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white' }}
          />
          <input
            type="text"
            placeholder="Time (e.g., 7:50 PM)"
            value={newMeeting.time}
            onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
            style={{ flex: 1, padding: '8px 12px', background: '#1A1B1F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white' }}
          />
          <input
            type="text"
            placeholder="With (e.g., Lain Alan)"
            value={newMeeting.with}
            onChange={(e) => setNewMeeting({...newMeeting, with: e.target.value})}
            style={{ flex: 1, padding: '8px 12px', background: '#1A1B1F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: 'white' }}
          />
          <button 
            onClick={addMeeting} 
            style={{ padding: '8px 16px', background: '#45B5C6', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
          >
            + Add
          </button>
        </div>
      </div>
      
      <div className="future-meetings-list">
        {meetings.map((meeting, index) => (
          <FutureMeetingCard 
            key={meeting.id} 
            meeting={meeting} 
            index={index} // ارسال index برای شماره‌گذاری پویا
          />
        ))}
      </div>
    </div>
  );
};

export default FutureMeetings;