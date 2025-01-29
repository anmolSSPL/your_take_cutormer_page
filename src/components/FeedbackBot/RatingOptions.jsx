import React from 'react';

const RatingOptions = ({ options, onSelect, selectedOption }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect?.(option)}
          className={`px-5 py-1.5 rounded-full text-sm border transition-colors
            ${selectedOption === option 
              ? 'border-[#99C959] text-[#99C959]' 
              : 'border-gray-300 hover:border-[#99C959] hover:text-[#99C959]'}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default RatingOptions;