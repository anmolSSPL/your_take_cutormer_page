import React from 'react';

const NumberRating = ({ maxRating = 9, onSelect, selectedNumber }) => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-1.5 sm:gap-2 min-w-fit">
        {[...Array(maxRating)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => onSelect?.(i + 1)}
            className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 
              rounded-full text-xs sm:text-sm md:text-base 
              border touch-manipulation transition-colors
              flex items-center justify-center
              ${selectedNumber === i + 1 
                ? 'border-[#99C959] text-[#99C959] bg-[#99C959]/5' 
                : 'border-gray-300 hover:border-[#99C959] hover:text-[#99C959] hover:bg-[#99C959]/5'
              }
              active:scale-95 transition-transform duration-100`}
            aria-label={`Rate ${i + 1} out of ${maxRating}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberRating;