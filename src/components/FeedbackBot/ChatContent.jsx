import React, { useState } from 'react';
import botIcon from "../../assets/bot-icon.svg";
import feedbackarrow from '../../assets/feedbackarrow.svg';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';
import SubmitButton from './SubmitButton';

const questions = [
  {
    id: 1,
    question: "1. How would you rate the quality of the food?",
    options: ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'],
    responses: {
      Excellent: "Wow! We're thrilled to hear that! Your excellent feedback motivates us to keep delivering our best. If there’s anything more we can do for you, don’t hesitate to ask. Thanks for choosing us!",
      Good: "Great! We're glad you liked it. Your support keeps us motivated!",
      Average: "Thank you for your honest feedback. We're always working to improve our food quality.",
      Poor: "We're sorry to hear that. We'll work on improving our food quality.",
      'Very Poor': "We sincerely apologize for your experience. We'll definitely work on making things better."
    }
  },
  {
    id: 2,
    question: "2. Would you recommend this restaurant to a friend or family member?",
    options: ['Yes', 'No'],
    responses: {
      Yes: "That’s fantastic to hear! We’re so happy you’d recommend us to your friends and family. It means the world to us! Thank you for spreading the word, and we look forward to serving you again soon.",
      No: "We appreciate your honesty. We'd love to know how we can improve."
    }
  },
  {
    id: 3,
    question: "3. How would you rate your experience from 1 to 10?",
    options: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
    responses: {
      default: (rating) => {
        if (rating >= 8) return "Fantastic! We're thrilled you had such a great experience!";
        if (rating >= 5) return "Thank you for your honest rating! We'd love to know how we can improve.";
        return "We're sorry your experience wasn't better. We'd appreciate knowing what we can improve.";
      }
    }
  }
];

const ChatContent = () => {
  const [messages, setMessages] = useState([
    { type: "bot", question: questions[0].question, options: questions[0].options }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userMessage, setUserMessage] = useState("");

  const handleOptionClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    const botResponse =
      typeof currentQuestion.responses.default === "function"
        ? currentQuestion.responses.default(parseInt(option, 10))
        : currentQuestion.responses[option];

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", message: option },
      { type: "bot", message: botResponse }
    ]);

    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        const nextQuestion = questions[currentQuestionIndex + 1];

        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", question: nextQuestion.question, options: nextQuestion.options }
        ]);
      }, 1000);
    }
  };

  const handleMessageSubmit = () => {
    if (userMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", message: userMessage },
        { type: "bot", message: "Thank you for your additional feedback!" }
      ]);
      setUserMessage("");
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6">
      {messages.map((msg, index) =>
        msg.type === "bot" ? (
          <BotMessage key={index} icon={<img src={botIcon} alt="Bot" className="w-6 h-6" />} title="Feedback Chatbot" question={msg.question}>
            {msg.options ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {msg.options.map((option) => (
                  <button
                    key={option}
                    className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#021F3F] text-xs sm:text-sm"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4 text-xs sm:text-sm text-gray-600">{msg.message}</div>
            )}
          </BotMessage>
        ) : (
          <UserMessage key={index} message={msg.message} icon={<img src={botIcon} alt="User" className="w-6 h-6 sm:w-8 sm:h-8" />} />
        )
      )}

      <div className="mt-6 flex justify-center sm:justify-start sm:ml-12">
        <SubmitButton />
      </div>

      {/* Message Input */}
      <div className="mt-8 relative">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Send a message..."
          className="w-full px-4 py-2 sm:py-3 border border-[#021F3F] rounded-lg pr-12 text-xs sm:text-sm"
          onKeyPress={(e) => e.key === 'Enter' && handleMessageSubmit()}
        />
        <button
          onClick={handleMessageSubmit}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <img src={feedbackarrow} alt="Send" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatContent;
