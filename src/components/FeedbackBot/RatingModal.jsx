import React from 'react';
import StarRating from './StarRating';

const RatingModal = ({ 
  rating,
  onRatingChange,
  feedback,
  onFeedbackChange,
  userName,
  onUserNameChange,
  onSubmit,
  hover,
  onHoverChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-[90vw] sm:w-80 md:w-96 max-w-lg mx-auto">
      <h3 className="text-center text-base sm:text-lg font-semibold mb-3 sm:mb-4">
        Rate your experience
      </h3>
      
      <div className="flex justify-center mb-3 sm:mb-4">
        <StarRating
          rating={rating}
          onRatingChange={onRatingChange}
          hover={hover}
          onHoverChange={onHoverChange}
        />
      </div>

      <textarea
        value={feedback}
        onChange={(e) => onFeedbackChange(e.target.value)}
        placeholder="Share your experience (optional)"
        className="w-full p-2 sm:p-3 border rounded-md mb-3 sm:mb-4 h-20 sm:h-24 
          text-sm sm:text-base resize-none focus:outline-none focus:ring-2 
          focus:ring-blue-500"
      />

      <input
        type="text"
        value={userName}
        onChange={(e) => onUserNameChange(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full p-2 sm:p-3 border rounded-md mb-3 sm:mb-4 
          text-sm sm:text-base focus:outline-none focus:ring-2 
          focus:ring-blue-500"
      />

      <button
        onClick={onSubmit}
        className={`w-full py-2 sm:py-2.5 rounded-md text-sm sm:text-base 
          transition-colors ${
          rating === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-[#021F3F] hover:bg-opacity-90 text-white'
        }`}
        disabled={rating === 0}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingModal;