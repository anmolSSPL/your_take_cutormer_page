import React from 'react';

const NumberRating = ({ maxRating = 9, onSelect, selectedNumber }) => {
  return (
    <div className="flex gap-2">
      {[...Array(maxRating)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onSelect?.(i + 1)}
          className={`w-8 h-8 rounded-full text-sm border transition-colors
            flex items-center justify-center
            ${selectedNumber === i + 1 
              ? 'border-[#99C959] text-[#99C959]' 
              : 'border-gray-300 hover:border-[#99C959] hover:text-[#99C959]'}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default NumberRating;