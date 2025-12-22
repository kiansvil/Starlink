// PasswordTab.jsx
import React, { useState } from 'react';
import './PasswordTab.css'; // فرض بر این است که استایل‌های فرم در این فایل هستند

const PasswordTab = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // States برای مدیریت نمایش رمزهای عبور
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatNewPassword, setShowRepeatNewPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // ولیدیشن رمز عبور فعلی
    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    // ولیدیشن رمز عبور جدید
    if (formData.newPassword.length < 8) {
      newErrors.newPassword = "New password must be at least 8 characters long";
    } else if (formData.newPassword === formData.currentPassword) {
      newErrors.newPassword = "New password must be different from the current one";
    }

    // ولیدیشن تکرار رمز عبور جدید
    if (!formData.repeatNewPassword) {
      newErrors.repeatNewPassword = "Please confirm your new password";
    } else if (formData.newPassword !== formData.repeatNewPassword) {
      newErrors.repeatNewPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // پاک کردن خطا به محض شروع تایپ
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Change password data:', formData);
      // **اینجا باید درخواست API برای تغییر رمز عبور ارسال شود**
      setIsSubmitted(true);
      
      // در محیط واقعی، پس از موفقیت باید فرم ریست شود
      // setFormData({ currentPassword: '', newPassword: '', repeatNewPassword: '' });
      // alert('Password changed successfully!');
    }
  };

  // چک کردن اعتبار کلی فرم برای فعال/غیرفعال کردن دکمه
  const isFormValid = 
    formData.currentPassword.length > 0 && 
    formData.newPassword.length >= 8 && 
    formData.newPassword === formData.repeatNewPassword &&
    formData.newPassword !== formData.currentPassword; 
    // اضافه کردن شرط عدم تطابق با رمز فعلی

  // آیکون‌های SVG برای نمایش/عدم نمایش رمز عبور
  const EyeOpenIcon = ({ fill = "#666" }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill={fill}/>
    </svg>
  );

  const EyeClosedIcon = ({ fill = "#666" }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z" fill={fill}/>
    </svg>
  );


  if (isSubmitted) {
    // در اینجا می‌توانید یک پیام موفقیت موقت نمایش دهید یا به صفحه Account Tab هدایت کنید
    return (
      <div className="account-tab-container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Password Changed!</h3>
            <p>Your password has been successfully updated.</p>
            {/* در اینجا می‌توانید دکمه‌ای برای بازگشت به Account Tab اضافه کنید */}
          </div>
      </div>
    );
  }


  return (
    <div className="account-tab-container">
      <h2 className="tab-section-title">Change password</h2>
      
      <form onSubmit={handleSubmit} className="setting-form">
        
        {/* Current Password */}
        <div className="form-group">
          <label className="form-label">Current Password</label>
          <div className="password-input-container">
            <input
              type={showCurrentPassword ? "text" : "password"}
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className={`form-input ${errors.currentPassword ? 'input-error' : ''}`}
              placeholder="**********"
              required
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
          {errors.currentPassword && (
            <div className="error-message">{errors.currentPassword}</div>
          )}
        </div>

        {/* New Password */}
        <div className="form-group">
          <label className="form-label">New Password</label>
          <div className="password-input-container">
            <input
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className={`form-input ${errors.newPassword ? 'input-error' : ''}`}
              placeholder="**********"
              required
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
          <div className="password-requirements">
              Your password must be included: 8 letters.
          </div>
          {errors.newPassword && (
            <div className="error-message">{errors.newPassword}</div>
          )}
        </div>

        {/* Repeat new password */}
        <div className="form-group">
          <label className="form-label">Repeat new password</label>
          <div className="password-input-container">
            <input
              type={showRepeatNewPassword ? "text" : "password"}
              name="repeatNewPassword"
              value={formData.repeatNewPassword}
              onChange={handleChange}
              className={`form-input ${errors.repeatNewPassword ? 'input-error' : ''}`}
              placeholder="**********"
              required
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={() => setShowRepeatNewPassword(!showRepeatNewPassword)}
            >
              {showRepeatNewPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
          {errors.repeatNewPassword && (
            <div className="error-message">{errors.repeatNewPassword}</div>
          )}
          {formData.repeatNewPassword && formData.newPassword === formData.repeatNewPassword && (
            <div className="success-message-small">✓ Passwords match</div>
          )}
        </div>

     
      </form>
      <button 
            type="submit" 
            className={`btn-save-password ${!isFormValid ? 'btn-disabled' : ''}`}
            disabled={!isFormValid}
        >
          Save Password
        </button>
    </div>
  );
};

export default PasswordTab;