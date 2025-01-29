import React from "react";
import progressbaricon from "../../assets/progressbaricon.svg";
import progressline from "../../assets/progressline.svg";

const ProgressSteps = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[70%] mx-auto mt-8 relative flex flex-wrap items-center justify-center">
      {/* Progress Line using SVG */}
      <div className="absolute top-1/2 left-[8%] w-[80%] sm:left-[12%] sm:w-[80%] md:w-[75%] z-0">
        <img 
          src={progressline} 
          alt="Progress Line"
          className="w-full h-[3px] sm:h-[4px] object-cover"
        />
      </div>

      {/* Steps */}
      {Array.from({ length: 8 }, (_, index) => (
        <div 
          key={index} 
          className="relative flex flex-col items-center w-[22%] sm:w-[18%] md:w-[12%] lg:w-[10.5%] z-10 mb-4 sm:mb-0"
        >
          {/* Circle with progressbaricon */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
            <img 
              src={progressbaricon} 
              alt={`Step ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Step Text */}
          <div className="mt-1 text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500">
            {`Quest-${index + 1}`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
