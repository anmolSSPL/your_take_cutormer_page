import React from 'react';
import StarRating from './StarRating';

const RatingDisplay = ({ rating, feedback, userName }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center">
        
        <div className="mb-3">
          <StarRating
            rating={rating}
            size="w-5 h-5 sm:w-6 sm:h-6"
            isInteractive={false}
          />
        </div>

        <p className="text-center text-gray-800 mb-2 text-sm sm:text-base">
          {feedback || 'Thank you for your rating!'}
        </p>

        <div className="text-center text-gray-500 text-xs sm:text-sm">
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
          <br />
          {userName || 'Anonymous'}
        </div>
      </div>
    </div>
  );
};

export default RatingDisplay;
