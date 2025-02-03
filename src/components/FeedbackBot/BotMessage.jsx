import React from 'react';

const BotMessage = ({ icon, title, question, children }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>
      <div className="flex-1 space-y-1">
        <div className="text-sm sm:text-base font-medium text-[#00347B]">{title}</div>
        <div className="text-sm text-gray-600">{question}</div>
        <div className="mt-1 sm:mt-2">{children}</div>
      </div>
    </div>
  );
};

export default BotMessage;