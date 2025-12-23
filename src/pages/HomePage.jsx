
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    FaStar, FaSearch, FaHeart, FaChevronLeft, FaChevronRight, 
    FaFacebookF, FaTwitter, FaInstagram, FaImdb, FaSnapchatGhost, 
    FaInfoCircle, FaCalendarAlt, FaRegClock, FaBell 
} from 'react-icons/fa';
import './HomePage.css'; 

import '../components/Dashboard/FavoritesPage.css'
import HeartIcon from '../assets/ICON.svg';
import NotifIcon from '../assets/notif icon.svg';
import emiliaImage from '../assets/emilia.jpg';
import harryImage from '../assets/harry.png';
import tomImage from '../assets/clark.jpg';
import emilia2Image from '../assets/clarke.jpg';



const recommendedStars = [
    { name: "Emilia Clarke",
         role: "Actor", 
         price: "$120", 
         imageUrl: emiliaImage},
    { name: "Harry Styles", role: "Singer", price: "$178", imageUrl: harryImage },
    { name: "Iain Glen", role: "Actor", price: "$110", imageUrl: emiliaImage},
    { name: "Emma Watson", role: "Actor", price: "$145", imageUrl: emilia2Image},
    { name: "Taylor Swift", role: "Singer", price: "$200", imageUrl: tomImage },
    { name: "Taylor Swift", role: "Singer", price: "$200", imageUrl: emilia2Image},
];


const Header = ({ onNavigateToLogin }) => (
  <header  className="main-header">
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
    <img src={NotifIcon} alt="Notification" className="bell-icon-svg" />
    
</button>  
              <button className="login-btn" onClick={onNavigateToLogin}>Login</button>
          </div>
          </div>
          
      </div>
  </header>
);


const ProfileSection = () => {
    const [minutes, setMinutes] = useState(5);
    const handleIncrement = () => setMinutes(prev => prev + 5);
    const handleDecrement = () => setMinutes(prev => (prev > 5 ? prev - 5 : 5));

    return (
        <div className="profile-main-container section-container">
            <div className="profile-info-column">
                <div className="header-row">
                    <h1>Gal gadot</h1>
                    <button className='heart-btn'>
                        <img src={HeartIcon} alt="Heart Icon" className="custom-heart-icon" />
                    </button>
                </div>
                <p className="subtitle">Actor / producer</p>
                
                <div className="carousel-container">
                    <div className="images-wrapper">
                        <img src="src/assets/image 28.png" alt="Main" className="main-img" />
                        <img src="src/assets/avatar.png" alt="Main" className="main-img" />
                        <img src="src/assets/avatar.png" alt="Side" className="side-img" />
                    </div>
                    <div className='image-nav-btn'>
                        <button className="nav-btn left"><FaChevronLeft /></button>
                        <button className="nav-btn right"><FaChevronRight /></button>
                    </div>
                    <div className="dots"><span /><span className="active" /><span /></div>
                </div>

                <p className="bio-text">
                Iain Alan Sutherland Glen (born 24 June 1961) is a Scottish actor.[2] Glen is best known for his roles as Dr. Alexander Isaacs/Tyrant in three films of the Resident Evil film series (2004–2016) and as Glen is best known for his roles as Dr.
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


const StarCard = ({ star }) => (
    <div className="favorite-card">

    <div className="card-header">
        <img src={star.imageUrl} alt={star.name} className="star-image" />
        
       
        <div className="favorite-icon-overlay">
            <button className="card-heart-btn" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <FaHeart />
            </button>
        </div>

       
        <div className="cost-tag">{star.price}</div>

    
        <div className="rating-overlay-image">
            <FaStar className="star-icon active" size={12} color="#FFD700" />
            <FaStar className="star-icon active" size={12} color="#FFD700" />
            <FaStar className="star-icon active" size={12} color="#FFD700" />
            <FaStar className="star-icon active" size={12} color="#FFD700" />
            <FaStar className="star-icon half" size={12} color="#FFD700" />
        </div>
    </div>

    <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div className="star-name-role">
                <h3 className="star-name">{star.name}</h3>
                <span className="star-role">({star.role})</span>
            </div>
            <span className="cost-tag-body">{star.price}</span>
        </div>
        
        <p className="star-description">
            Celebrity Bio. Short description about celebrity will be put here. This text will truncate after two lines.
        </p>
    </div>
</div>
);

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

const HowItWorks = () => (
  <div className="how-it-works-section section-container">
      <div className="how-it-works-image-wrapper">
          <img src="src/assets/Frame 1397.svg" alt="How it works" className="how-it-works-image" />
      </div>
  </div>
);

const Footer = () => (
    <footer className="main-footer">
    <div className="footer-container">
        <div className="footer-top">
            <div className="footer-brand-soshalt">
                <div className="footer-logo">
                    <FaStar className="star-icon-footer" />
                    <span>Star link</span>
                </div>
                <div className="social-links">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
            
            <div className="footer-right">
                <span className="ready-text">Ready to get started?</span>
                <button className="gradient-btnn">Get started</button>
            </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
            <div className="footer-links">
                <a href="#">Terms & Conditions</a>
                <a href="#">FAQs</a>
            </div>
        </div>
    </div>
</footer>
);

function HomePage({ onNavigateToLogin }) { 
    const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); };
  return (
    <div className="app-container">
     <Header onNavigateToLogin={handleLoginClick} />
      <ProfileSection />
      <RecommendedSection /> 
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default HomePage;