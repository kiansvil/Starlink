// PaymentPage.jsx
import React from 'react';
import './PaymentPage.css';

// داده‌های نمونه برای جدول
const paymentData = [
  { date: '2022/2/8', trackingCode: '123456789', detail: 'Jack black', cost: '$174' },
  { date: '2022/2/8', trackingCode: '123456789', detail: 'Jack black', cost: '$174' },
  { date: '2022/2/8', trackingCode: '123456789', detail: 'Jack black', cost: '$174' },

];

const PaymentPage = () => {
  return (
    <div className="payment-page">
      
      {/* بخش فیلتر و Sort */}
      <div className="payment-filters">
        <span className="sort-label">Sort by :</span>
        
        <div className="date-range-filter filter-box">
          Date range
          <span className="icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CED4DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
          </span>
        </div>
        
        <div className="weekly-filter filter-box">
          weekly
          <span className="icon">▼</span>
        </div>
      </div>
      
      {/* جدول پرداخت‌ها */}
      <div className="payment-table-container">
        <table className="payment-table">
          <thead>
            <tr className="table-header-row">
              <th>Date</th>
              <th>Tracking Code</th>
              <th>Detail</th>
              <th>cost</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{item.date}</td>
                <td>{item.trackingCode}</td>
                <td>{item.detail}</td>
                <td>{item.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPage;