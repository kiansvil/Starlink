import React, { useState } from 'react';
import './AccountTab.css';

const AccountTab = ({ user }) => {
  const [formData, setFormData] = useState({
    fullName: 'Tom ridell',
    bio: 'In publishing and graphic design, Lorem Ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem Ipsum may be used as a placeholder before the final copy is available.',
    username: 'Tom1234',
    email: 'Arthurniller@gmail.com',
    showAddressToCelebrity: false,
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveChanges = () => {
    alert('Changes saved!');
  };
  const [profileImage, setProfileImage] = useState(null);

const handleProfileImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImage(event.target.result);
      

      const updatedUser = {
        ...user,
        profileImage: event.target.result
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    };
    reader.readAsDataURL(file);
  }
};

  return (
    <div className="account-tab">
      <div className="account-container">
      


<div className="user-info-section">
  <div className="avatar-container">
    <div className="user-avatar-wrapper">
      <div className="user-avatar-large">
        {profileImage ? (
          <img 
            src={profileImage} 
          alt="Profile" 
          className="avatar-image"
          />
        ) : (
          <div className="avatar-initials">TR</div>
        )}
      </div>
      
      
      <label className="avatar-add-btn">
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          style={{ display: 'none' }}
          id="avatar-upload"
        />
        <div className="add-icon-circle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </label>
    </div>
  </div>
  
  <div className="user-details">
    <h3>Tom ridell</h3>
    <p>Arthurniller@gmail.com</p>
  </div>
</div>

        <div className="account-content-wrapper">
          
          <div className="account-left">
            
            <h2 className="card-title">My photo gallery</h2>
            <div className="photo-gallery-card">
             
            
              <div className="photo-grid">
                <div className="photo-box">
                  <div className="add-photo-circle">
                    <div className="plus-icon">+</div>
                  </div>
                  
              
                </div>
                
                <p className="card-subtitle">
                Add your photo so that your favorite celebrity can see you
              </p>
             
              </div>
            </div>
          </div>

          
          <div className="account-right">
         
           <div clasname= "card-element" >  
           <h2 className="card-title">My Account</h2>

           <div className="form-section">
          
              
          <div className="form-field">
            <label className="field-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="field-input"
            />
          </div>
          
          <div className="form-field">
            <label className="field-label">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="field-textarea"
              rows="5"
            />
          </div>
          
          <div className="form-field">
            <label className="field-label">User name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="field-input"
            />
          </div>
          
          <div className="form-field">
            <label className="field-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="field-input"
            />
          </div>
          
          <div className="checkbox-field">
            <input
              type="checkbox"
              id="celebrity-checkbox"
              checked={formData.showAddressToCelebrity}
              onChange={() => setFormData(prev => ({
                ...prev,
                showAddressToCelebrity: !prev.showAddressToCelebrity
              }))}
            />
            <label htmlFor="celebrity-checkbox">
              I want my account address to be displayed to a celebrity
            </label>
          </div>
        </div>

           </div>
            

            
            <div className="card-elemnt">
            <h2 className="card-title">My Social media</h2>
            <div className="form-section social-sectio\">
         
             
            <div className="social-inputs">
  
  <div className="social-input-with-icon">
    <div className="social-icon-box facebook-box">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37258 0 0 5.40546 0 12.0733C0 18.0995 4.38823 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9165 4.71615 14.6576 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3399 7.92313 13.875 8.85379 13.875 9.80857V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6118 23.0943 24 18.0995 24 12.0733Z" fill="#1877F2"/>
      </svg>
    </div>
    <input
      type="text"
      name="facebook"
      value={formData.facebook}
      onChange={handleInputChange}
      placeholder="type your facebook account"
      className="social-input"
    />
  </div>
  
  
  <div className="social-input-with-icon">
    <div className="social-icon-box twitter-box">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.213c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z" fill="#1DA1F2"/>
      </svg>
    </div>
    <input
      type="text"
      name="twitter"
      value={formData.twitter}
      onChange={handleInputChange}
      placeholder="type your twitter account"
      className="social-input"
    />
  </div>
  
  
  <div className="social-input-with-icon">
    <div className="social-icon-box instagram-box">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="#E4405F"/>
      </svg>
    </div>
    <input
      type="text"
      name="instagram"
      value={formData.instagram}
      onChange={handleInputChange}
      placeholder="type your Instagram account"
      className="social-input"
    />
  </div>
  
  
  <div className="social-input-with-icon">
    <div className="social-icon-box linkedin-box">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
      </svg>
    </div>
    <input
      type="text"
      name="linkedin"
      value={formData.linkedin}
      onChange={handleInputChange}
      placeholder="type your linkedin account"
      className="social-input"
    />
  </div>
</div>
            </div>
            </div>
            
            <div className="save-section">
              <button 
                className="save-button"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;