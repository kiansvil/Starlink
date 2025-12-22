// HomePage.jsx (کد کامل و اصلاح شده)

import React, { useState } from 'react';
import { 
    FaStar, FaSearch, FaHeart, FaChevronLeft, FaChevronRight, 
    FaFacebookF, FaTwitter, FaInstagram, FaImdb, FaSnapchatGhost, 
    FaInfoCircle, FaCalendarAlt, FaRegClock, FaBell 
} from 'react-icons/fa';
import './HomePage.css'; 

// --- داده‌های کارت‌های پیشنهادی ---
const recommendedStars = [
    { name: "Emilia Clarke", role: "Actor", price: "$120", img: "https://i.ibb.co/3k5fHw9/emilia.jpg" },
    { name: "Harry Styles", role: "Singer", price: "$178", img: "https://i.ibb.co/N21bHq0/harry.jpg" },
    { name: "Iain Glen", role: "Actor", price: "$110", img: "https://i.ibb.co/Gdk09Xm/iain.jpg" },
    { name: "Emma Watson", role: "Actor", price: "$145", img: "https://i.ibb.co/Tvn2qY5/emma.jpg" },
    { name: "Taylor Swift", role: "Singer", price: "$200", img: "https://i.ibb.co/8Y2tS5M/taylor.jpg" },
    { name: "Taylor Swift", role: "Singer", price: "$200", img: "https://i.ibb.co/8Y2tS5M/taylor.jpg" },
];

// --- ۱. کامپوننت Header ---
const Header = ({ onNavigateToLogin }) => (
  <header className="main-header">
      <div className="header-content"> 
          <div className="main-logo">
              <img src="src/assets/Frame 1394.svg" alt="" />
          </div>
          <div className='left-side-heder'>
          <div className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" />
          </div>
          <div className="header-actions">
              <button className="notification-btn">
                  <FaBell className="bell-icon" />
                  <span className="notification-badge">1</span>
              </button>
              <button className="login-btn" onClick={onNavigateToLogin}>Log in</button>
          </div>
          </div>
          
      </div>
  </header>
);

// --- ۲. کامپوننت ProfileSection ---
const ProfileSection = () => {
    const [minutes, setMinutes] = useState(5);
    const handleIncrement = () => setMinutes(prev => prev + 5);
    const handleDecrement = () => setMinutes(prev => (prev > 5 ? prev - 5 : 5));

    return (
        <div className="profile-main-container section-container">
            <div className="profile-info-column">
                <div className="header-row">
                    <h1>Gal gadot</h1>
                    <button className='heart-btn-top'><FaHeart /></button>
                </div>
                <p className="subtitle">Actor / producer</p>
                
                <div className="carousel-container">
                    <button className="nav-btn left"><FaChevronLeft /></button>
                    <div className="images-wrapper">
                        <img src="https://i.ibb.co/Tvn2qY5/emma.jpg" alt="Main" className="main-img" />
                        <img src="https://i.ibb.co/Tvn2qY5/emma.jpg" alt="Side" className="main-img" />
                        <img src="https://i.ibb.co/Tvn2qY5/emma.jpg" alt="Side" className="side-img" />
                    </div>
                    <button className="nav-btn right"><FaChevronRight /></button>
                    <div className="dots"><span /><span className="active" /><span /></div>
                </div>

                <p className="bio-text">
                    Iain Alan Sutherland Glen (born 24 June 1961) is a Scottish actor. Glen is best known for his roles as Dr. Alexander Isaacs/Tyrant.
                </p>

                <div className="social-media">
                    <h3>Social media</h3>
                    <div className="icons-row">
                        <span className="icon-circle bg-blue"><FaFacebookF /></span>
                        <span className="icon-circle bg-sky"><FaTwitter /></span>
                        <span className="icon-circle bg-pink"><FaInstagram /></span>
                        <span className="icon-circle bg-yellow"><FaImdb /></span>
                        <button className="website-btn">Personal website</button>
                    </div>
                </div>
            </div>

            <div className="booking-card card-bg">
                <div className='main-booking-card'>
                    <h2>Set Meeting</h2>
                    <div className="form-group">
                        <label>1. Set meeting Minutes <FaInfoCircle className="info-icon"/></label>
                        <div className="counter-input">
                            <button onClick={handleDecrement}>&minus;</button>
                            <span>{minutes} minute</span>
                            <button onClick={handleIncrement}>&#43;</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>2. Day <FaInfoCircle className="info-icon"/></label>
                        <div className="date-input-wrapper">
                            <input type="text" value="13 December" readOnly />
                            <FaCalendarAlt className="input-icon" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>3. Time frame <FaInfoCircle className="info-icon"/></label>
                        <div className="time-input-wrapper">
                            <input type="text" value="13:00-14:00" readOnly />
                            <FaRegClock className="input-icon" />
                        </div>
                    </div>
                    <p className="disclaimer">*Final time will be send by email</p>
                    <hr className="divider"/>
                    <div className="total-payment">
                        <span>Total Payment :</span>
                        <span className="price">$ 145</span>
                    </div>
                    <button className="book-btn gradient-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

// --- ۳. کامپوننت StarCard ---
const StarCard = ({ star }) => (
  <div className="star-card card-bg">
      <div className="card-image-wrapper">
          <img src={star.img} alt={star.name} className="star-image" />
          <button className="card-heart-btn"><FaHeart /></button>
          <div className="card-rating-overlay">
              <FaStar className="star-icon active" />
              <FaStar className="star-icon active" />
              <FaStar className="star-icon active" />
              <FaStar className="star-icon active" />
              <FaStar className="star-icon half" />
          </div>
      </div>
      <div className="card-details">
          <div className="card-name-price-row">
              <div className="star-info">
              <p className="star-name-rec">
                {star.name} <span className="star-role-rec">({star.role})</span>
              </p>
              </div>
              <span className="card-price-tag">{star.price}</span>
          </div>
          <p className="star-bio-rec">Celebrity Bio. Short description about celebrity will be put here.</p>
      </div>
  </div>
);

// --- ۴. کامپوننت RecommendedSection (این بخش را اضافه کردیم) ---
const RecommendedSection = () => (
    <div className="recommended-section section-container">
        <h2 className="section-title">Recommended</h2>
        <div className="cards-wrapper">
            
            <div className="stars-grid">
                {recommendedStars.map((star, index) => (
                    <StarCard key={index} star={star} />
                ))}
            </div>
            <div className='nav-buttons-wrapper'>
              <button className="rec-nav-btn left"><FaChevronLeft /></button>
              <button className="rec-nav-btn right"><FaChevronRight /></button>
            </div>
        </div>
    </div>
);

// --- ۵. کامپوننت HowItWorks ---
const HowItWorks = () => (
  <div className="how-it-works-section section-container">
      <div className="how-it-works-image-wrapper">
          <img src="src/assets/Frame 1397.svg" alt="How it works" className="how-it-works-image" />
      </div>
  </div>
);

// --- ۶. کامپوننت Footer ---
const Footer = () => (
    <footer className="main-footer">
        <div className="footer-left">
            <div className="footer-logo">
                <FaStar className="star-icon-footer" />
                <span>Star link</span>
            </div>
            <div className="social-links">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
            </div>
            <div className="footer-links">
                <a href="#">Terms & Conditions</a>
                <span> | </span>
                <a href="#">FAQs</a>
            </div>
        </div>
        <div className="footer-right">
            <span className="ready-text">Ready to get started?</span>
            <button className="gradient-btn">Get started</button>
        </div>
    </footer>
);

// --- کامپوننت اصلی ---
function HomePage({ onNavigateToLogin }) { 
  return (
    <div className="app-container">
      <Header onNavigateToLogin={onNavigateToLogin} /> 
      <ProfileSection />
      <RecommendedSection /> 
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default HomePage;