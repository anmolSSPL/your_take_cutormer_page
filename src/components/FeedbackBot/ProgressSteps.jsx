import React from 'react';
import progressbaricon from '../../assets/progressbaricon.svg';

const ProgressStepper = () => {
  const steps = [
    { id: 1, label: 'Ques-1', completed: true },
    { id: 2, label: 'Ques-2', completed: true },
    { id: 3, label: 'Ques-3', completed: true },
    { id: 4, label: 'Ques-4', completed: true },
    { id: 5, label: 'Ques-5', completed: true },
    { id: 6, label: 'Ques-6', completed: true },
    { id: 7, label: 'Ques-7', completed: true },
    { id: 8, label: 'Ques-8', completed: true }
  ];

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      <div className="relative flex justify-between items-center">
        {/* Connecting Line with adjusted width */}
        <div className="absolute top-5 left-[6%] right-[6%] h-[2px] bg-blue-900" />
        
        {/* Steps */}
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center">
            {/* Circle with progressbaricon */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center z-10">
              <img 
                src={progressbaricon} 
                alt="Progress Icon" 
                className="w-5 h-5" 
              />
            </div>
            
            {/* Label */}
            <span className={`mt-2 text-sm ${
              step.id === 8 ? 'text-green-600' : 'text-gray-600'
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;