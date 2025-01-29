import React from 'react';
import botIcon from "../../assets/bot-icon.svg";
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import SubmitButton from './SubmitButton';
import feedbackarrow from '../../assets/feedbackarrow.svg'; // Importing feedback arrow image

const ChatContent = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6">
      {/* Bot Message with Rating Options */}
      <BotMessage 
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6 rounded-full"/>}
        title="Feedback Chatbot"
        question="1. How would you rate the quality of the food?"
      >
        <div className="flex flex-wrap gap-2 mt-2">
          {['Good', 'Average', 'Poor', 'Very Poor'].map((option) => (
            <button 
              key={option}
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-gray-200 text-xs sm:text-sm hover:border-[#00347B]"
            >
              {option}
            </button>
          ))}
        </div>
      </BotMessage>

      {/* User Message */}
      <UserMessage 
        message="Excellent" 
        icon={<img src={botIcon} alt="User" className="w-6 h-6 sm:w-8 sm:h-8"/>}
      />

      {/* Thank You Message */}
      <BotMessage
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6"/>}
        title="Feedback Chatbot"
      >
        <div className="space-y-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4 text-xs sm:text-sm text-gray-600">
            Wow! We're thrilled to hear that! Your excellent feedback motivates us to keep delivering our best. If there's anything more we can do for you, don't hesitate to ask. Thanks for choosing us!
          </div>
        </div>
      </BotMessage>

      {/* Bot Message with Yes/No Options */}
      <BotMessage
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6"/>}
        title="Feedback Chatbot"
        question="2. Would you recommend this restaurant to a friend or family member?"
      >
        <div className="flex flex-wrap gap-2 mt-2">
          {['Yes', 'No'].map((option) => (
            <button 
              key={option}
              className="px-6 sm:px-8 py-1 sm:py-1.5 rounded-full border border-gray-800 text-xs sm:text-sm hover:border-[#00347B]"
            >
              {option}
            </button>
          ))}
        </div>
      </BotMessage>

      {/* User Message */}
      <UserMessage 
        message="Yes" 
        icon={<img src={botIcon} alt="User" className="w-6 h-6"/>}
      />

      {/* Thank You Message */}
      <BotMessage
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6"/>}
        title="Feedback Chatbot"
      >
        <div className="space-y-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4 text-xs sm:text-sm text-gray-600">
            That’s fantastic to hear! We’re so happy you’d recommend us to your friends and family. It means the world to us! Thank you for spreading the word, and we look forward to serving you again soon.
          </div>
        </div>
      </BotMessage>

      {/* Bot Message with Rating from 1 to 10 */}
      <BotMessage
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6"/>}
        title="Feedback Chatbot"
        question="3. How would you rate your experience from 1 to 10?"
      >
        <div className="flex flex-wrap gap-2 mt-2">
          {[...Array(10)].map((_, i) => (
            <button 
              key={i + 1}
              className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-200 text-xs sm:text-sm hover:border-[#00347B] flex items-center justify-center rounded-md"
            >
              {i + 1}
            </button>
          ))}
        </div>
      </BotMessage>

      {/* User Message */}
      <UserMessage 
        message="5" 
        icon={<img src={botIcon} alt="User" className="w-6 h-6"/>}
      />

      {/* Thank You Message */}
      <BotMessage
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6"/>}
        title="Feedback Chatbot"
      >
        <div className="space-y-4 mt-6">
          <div className="bg-gray-50 rounded-lg p-4 text-xs sm:text-sm text-gray-600">
            Thank you for your honest rating! It seems like there's room for improvement, and we'd love to know how we can make your next experience even better. Could you share what we could do to turn that 5 into a 10?
          </div>
        </div>
      </BotMessage>

      {/* Final Thank You Message */}
      <BotMessage
        icon={<img src={botIcon} alt="Bot" className="w-6 h-6"/>}
        title="Feedback Chatbot"
      >
        <div className="bg-gray-50 rounded-lg p-4 text-xs sm:text-sm text-gray-600">
          Thank you for taking the time to answer all our questions! We truly value your feedback.
          <br />
          <br />
          If you enjoyed your experience, feel free to share it with your family and friends on social media—we’d love to hear from them too!
        </div>
      </BotMessage>

      {/* Share Feedback Button */}
      <div className="mt-6 flex justify-center sm:justify-start sm:ml-12">
        <SubmitButton/>
      </div>

      {/* Message Input */}
      <div className="mt-8 relative">
        <input 
          type="text" 
          placeholder="Send a message..." 
          className="w-full px-4 py-2 sm:py-3 border border-gray-200 rounded-lg pr-12 text-xs sm:text-sm"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <img src={feedbackarrow} alt="Send" className="w-5 h-5 sm:w-6 sm:h-6"/>
        </button>
      </div>
    </div>
  );
};

export default ChatContent;