
import React from 'react';

const StarIcon = ({ filled }) => (
    <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill={filled ? "#FFC107" : "none"}
        stroke={filled ? "none" : "#FFC107"}
        strokeWidth="2"
        style={{ verticalAlign: 'middle' }}
    >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>
);

const FavoriteCard = ({ star }) => {
    const { name, role, cost, rating, imageUrl, tags, description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio." } = star;
    
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={`full-${i}`} filled={true} />);
        }
        if (halfStar) {
          
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} filled={false} />);
        }
        return stars;
    };

    return (
        <div className="favorite-card">
            
          
            <div className="card-header">
                <img src={imageUrl} alt={name} className="star-image" />
                
          
                <div className="favorite-icon-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#E91E63" style={{ cursor: 'pointer' }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
                
                
                <div className="rating-overlay-image">
                     {renderStars(rating)}
                </div>

             
            </div>

        
            <div className="card-body">
              
                <div className="name-and-cost-row">
             
                 
                  <div className="star-name-role">
                  <h3 className="star-name">{name}</h3>
                  <p className="star-role">({role})</p>
                  </div>
                    <span className="cost-tag-body">{cost}</span> 
                </div>

              
                
                <p className="star-description">{description}</p>
                
               
            </div>
        </div>
    );
};

export default FavoriteCard;