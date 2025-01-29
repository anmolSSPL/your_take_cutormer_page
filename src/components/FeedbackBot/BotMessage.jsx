import React from 'react';

const BotMessage = ({ icon, title, question, children }) => {
  return (
    <div className="flex gap-3 mb-6">
      <div className="w-[49px] h-[49px] rounded-lg bg-white border border-gray-200 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-[#00347B]">{title}</div>
        <div className="mt-1 text-sm text-gray-600">{question}</div>
        {children}
      </div>
    </div>
  );
};

export default BotMessage;