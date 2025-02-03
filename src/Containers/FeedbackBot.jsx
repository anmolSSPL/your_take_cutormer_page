import React from "react";
import Header from "../components/FeedbackBot/Header";
import ProgressSteps from "../components/FeedbackBot/ProgressSteps";
import ChatContent from "../components/FeedbackBot/ChatContent";

const FeedbackBotContainer = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      {/* Main Content Container */}
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[1000px] mx-auto my-2 sm:my-4">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
          {/* Chat Content */}
          <div className="mt-4 sm:mt-6">
            <ChatContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBotContainer;
