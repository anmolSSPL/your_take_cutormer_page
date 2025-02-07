import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ totalQuestions, answeredQuestions }) => {
    return (
      <div className="progress-container">
        <div className="tracker-container">
          {Array.from({ length: totalQuestions + 1 }).map((_, index) => { // Add 1 for EndChat
            const isAnswered = index < answeredQuestions;
            const isCurrent = index === answeredQuestions;
  
            return (
              <div key={index} className="tracker-step">
                <div
                  className={`tracker-circle ${
                    isAnswered ? "completed" : isCurrent ? "current" : ""
                  }`}
                >
                  <span>{isAnswered ? "✓" : isCurrent ? "✓" : ""}</span>
                </div>
                <div
                  className={`tracker-label ${
                    isAnswered
                      ? "completed-text"
                      : isCurrent
                      ? "current-text"
                      : ""
                  }`}
                >
                  {index < totalQuestions ? `Ques-${index + 1}` : "End Chat"}
                </div>
                {index < totalQuestions && <div className="tracker-line"></div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

export default ProgressBar;
