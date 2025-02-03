// ProgressSteps.jsx
import React from 'react';
import TickCircle from '../../assets/TickCircle.svg';

const ProgressSteps = ({ completedQuestions = [] }) => {
  const steps = [
    { id: 1, label: 'Ques-1' },
    { id: 2, label: 'Ques-2' },
    { id: 3, label: 'Ques-3' },
    { id: 4, label: 'Ques-4' },
    { id: 5, label: 'Ques-5' },
    { id: 6, label: 'Ques-6' },
    { id: 7, label: 'Ques-7' },
    { id: 8, label: 'Ques-8' },
  ];

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      <div className="relative flex flex-wrap justify-between items-center gap-x-2 sm:gap-x-4">
        {/* Connecting Line */}
        <div className="absolute top-5 left-[4%] right-[4%] sm:left-[6%] sm:right-[6%] h-[2px] bg-blue-900" />
        
        {/* Steps */}
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center w-1/4 sm:w-auto">
            {/* Circle with checkmark */}
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
                ${completedQuestions.includes(step.id) ? 'bg-green-500' : 'bg-blue-600'} 
                transition-colors duration-300 text-white`}
            >
              {completedQuestions.includes(step.id) ? (
                <img src={TickCircle} alt="Completed" className="w-6 h-6" />
              ) : (
                <span className="text-sm font-medium">{step.id}</span>
              )}
            </div>
            
            {/* Label */}
            <span 
              className={`mt-2 text-xs sm:text-sm ${
                completedQuestions.includes(step.id) ? 'text-green-600' : 'text-gray-600'
              } transition-colors duration-300`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;