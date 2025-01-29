// src/components/FeedbackBot/RatingModal.jsx
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
    <div className="bg-white rounded-lg shadow-lg p-6 w-72">
      <h3 className="text-center text-lg font-semibold mb-4">Rate your experience</h3>
      
      <div className="flex justify-center mb-4">
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
        className="w-full p-2 border rounded-md mb-4 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        value={userName}
        onChange={(e) => onUserNameChange(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={onSubmit}
        className={`w-full py-2 rounded-md transition-colors ${
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