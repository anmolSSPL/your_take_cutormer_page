import React, { useEffect, useRef, useState } from "react";
import bot from "../../assets/chatbot.svg";
import send from "../../assets/send.svg";
import userIcon from "../../assets/user.svg";

import "./ChatBot.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { EndChat } from "./EndChat";

const ChatBot = () => {
  const questions = [
    "1. Please enter your name",
    "2. Please enter your email",
    "3. Please enter your phone number",
    "4. Please enter your gender (Male, Female, Other)",
    // "5. Please enter your phone number",
    // "6. Please enter your phone number",
    // "7. Please enter your phone number",
    // "8. Please enter your phone number",
  ];

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: questions[0],
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [userInput, setUserInput] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0); // Track answered questions
  const [responses, setResponses] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission

  const chatBoxRef = useRef(null);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Update responses correctly
    setResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionIndex === 0
        ? "name"
        : currentQuestionIndex === 1
        ? "email"
        : currentQuestionIndex === 2
        ? "phone"
        : currentQuestionIndex === 3
        ? "gender"
        : ""]: userInput,
    }));

    // Add user message to chat history
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput, timestamp },
    ]);

    // Move to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: questions[nextQuestionIndex],
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        setCurrentQuestionIndex(nextQuestionIndex);
        setAnsweredQuestions((prev) => prev + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: (
              <EndChat
                responses={responses}
                setResponses={setResponses}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
            ),
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        setAnsweredQuestions((prev) => prev + 1);
      }, 1000);
    }

    setUserInput("");
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isSubmitting) {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="create-form-by-ai-container">
        <div className="progress-bar-container">
          <ProgressBar
            totalQuestions={questions.length}
            answeredQuestions={answeredQuestions}
          />
        </div>

        <div className="ai-main-content">
          <div className="chat-container">
            <div className="chat-box" ref={chatBoxRef}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "user" ? "user" : "bot"
                  }`}
                >
                  {/* <div className={`timestamp ${msg.sender}`}>
                    {msg.sender === "user" ? "You" : "Bot"} • {msg.timestamp}
                  </div> */}
                  <div className={`text ${msg.sender}`}>
                    {msg.sender === "bot" && (
                      <>
                        <div className="bot-image-container">
                          <div className="bot-image-wrapper">
                            <div className="bot-image">
                              <img src={bot} alt="bot" />
                            </div>
                            <span className="bot-name">Feedback Chatbot</span>
                          </div>
                          <div className="bot-question-container">
                            <p> {msg.text}</p>
                          </div>
                        </div>
                      </>
                    )}
                    {msg.sender === "user" && (
                      <>
                        <div className="user-image-container">
                          <div className="user-image-wrapper">
                            <span className="user-name">User</span>
                            <div className="user-image">
                              <img src={userIcon} alt="user" />
                            </div>
                          </div>
                          <div className="user-question-container">
                            <p> {msg.text}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="input-box">
              <div className="input-box-input">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Write your message..."
                />
              </div>
              <div className="input-buttons">
                <button
                  className="send-btn"
                  disabled={isSubmitting}
                  onClick={handleSendMessage} 

                >
                  <img src={send} alt="Send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
