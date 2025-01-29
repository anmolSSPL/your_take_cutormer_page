import React from 'react';
import sharefeedback from '../../assets/sharefeedback.svg';

const SubmitButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-8 mb-6">
      <button 
        onClick={onClick}
        className="hover:opacity-90 transition-opacity"
      >
        <img 
          src={sharefeedback} 
          alt="Share feedback" 
          className="h-8 sm:h-10 md:h-12 w-auto" 
        />
      </button>
    </div>
  );
};

export default SubmitButton;