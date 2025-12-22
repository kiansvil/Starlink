// FavoritesPage.jsx
import React from 'react';
import FavoriteCard from './FavoriteCard';
import './FavoritesPage.css';

const FavoritesPage = ({ favorites }) => {
    
    // تگ‌های پیشنهادی (بر اساس داده‌های تصویر)
    const suggestedTags = [
        "Game of thrones", "Resident evil exinction", "My cousin rachel", 
        "Jack taylor", "Danton abbey"
    ];

    if (favorites.length === 0) {
        return (
            <div className="favorites-page">
                <div className="favorites-empty-state">
                    {/* گرافیک خالی شبیه‌سازی شده */}
                    <div className="empty-graphic-favorite">
                        {/* باید با SVG واقعی جایگزین شود تا مطابق طرح باشد */}
                        <div className="person-graphic"></div> 
                        <span className="heart-icon heart-left">❤️</span>
                        <span className="heart-icon heart-right">🤍</span>
                    </div>
                    <h3 className="empty-title">List is empty</h3>
                    <button 
                        className="btn-primary-explore"
                        onClick={() => console.log("Explore triggered")}
                    >
                        Explore for the best
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-page">
            
            {/* --- لیست کارت‌های Favorites --- */}
            <div className="favorites-grid">
                {favorites.map(star => (
                    <FavoriteCard key={star.id} star={star} />
                ))}
            </div>

            {/* --- بخش تگ‌های جستجوی پیشنهادی --- */}
            <div className="search-suggestion-section">
                <h3 className="suggestion-title">Also search for it</h3>
                <div className="tag-list">
                    {suggestedTags.map(tag => (
                        <span key={tag} className="tag-item">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoritesPage;