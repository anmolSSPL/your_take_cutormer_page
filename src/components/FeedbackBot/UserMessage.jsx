// src/components/Chat/UserMessage.jsx
import React from "react";
import userIcon from "../../assets/user.svg";

const UserMessage = ({ message }) => {
  return (
    <div className="flex justify-end mb-4 mt-6 items-start gap-2 sm:gap-3">
      <div className="flex flex-col items-end sm:items-center">
        {/* User icon and label */}
        <div className="flex items-center mb-2">
          <span className="mr-1 sm:mr-2 text-xs sm:text-sm text-gray-700">
            User
          </span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={userIcon}
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* User message */}
        <div className="bg-[#D5FF70] py-1 px-4 sm:py-1.5 sm:px-6 rounded-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <span className="text-xs sm:text-md text-gray-700 break-words">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;