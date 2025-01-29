// src/components/FeedbackBot/StarRating.jsx
import React from 'react';
import StarIcon from '../../assets/StarIcon.svg';

const StarRating = ({ 
  rating, 
  onRatingChange, 
  size = "w-8 h-8", 
  isInteractive = true,
  hover,
  onHoverChange 
}) => {
  const renderStar = (index) => {
    const starValue = index + 1;
    const starProps = {
      src: StarIcon,
      alt: "Star",
      className: `${size} ${
        (isInteractive ? (hover || rating) : rating) >= starValue 
          ? 'opacity-100' 
          : 'opacity-30'
      } transition-opacity`
    };

    if (isInteractive) {
      return (
        <button
          key={index}
          onClick={() => onRatingChange?.(starValue)}
          onMouseEnter={() => onHoverChange?.(starValue)}
          onMouseLeave={() => onHoverChange?.(0)}
          className="focus:outline-none"
        >
          <img {...starProps} />
        </button>
      );
    }

    return <img key={index} {...starProps} />;
  };

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => renderStar(index))}
    </div>
  );
};

export default StarRating;