import React from 'react';
import StarIcon from '../../assets/StarIcon.svg';

const StarRating = ({ 
  rating, 
  onRatingChange, 
  size = "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10",
  isInteractive = true,
  hover,
  onHoverChange 
}) => {
  const renderStar = (index) => {
    const starValue = index + 1;
    const isActive = (isInteractive ? (hover || rating) : rating) >= starValue;
    
    const starProps = {
      src: StarIcon,
      alt: `${starValue} Star`,
      className: `${size} ${
        isActive 
          ? 'opacity-100 brightness-100 filter drop-shadow-sm' 
          : 'opacity-40 brightness-90'
      } transition-all duration-200`
    };

    if (isInteractive) {
      return (
        <button
          key={index}
          onClick={() => onRatingChange?.(starValue)}
          onMouseEnter={() => onHoverChange?.(starValue)}
          onMouseLeave={() => onHoverChange?.(0)}
          className="focus:outline-none touch-manipulation"
          aria-label={`Rate ${starValue} out of 5 stars`}
        >
          <img {...starProps} />
        </button>
      );
    }

    return <img key={index} {...starProps} />;
  };

  return (
    <div className="flex gap-0.5 sm:gap-1 md:gap-2">
      {[...Array(5)].map((_, index) => renderStar(index))}
    </div>
  );
};

export default StarRating;