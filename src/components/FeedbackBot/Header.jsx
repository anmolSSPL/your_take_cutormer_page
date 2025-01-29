import React from "react";
import botIcon from "../../assets/bot-icon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#0A1628] py-4 md:py-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-80 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
            <img src={botIcon} alt="Bot" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#D1FF4C] font-semibold text-xs sm:text-sm">
              Feedback Chatbot
            </span>
            <span className="text-gray-400 text-xs">Online</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <span
          className="text-white text-xs sm:text-sm hover:text-[#D1FF4C] cursor-pointer"
          onClick={() => navigate("/")}
        >
          About Us
        </span>
        <button className="bg-[#D1FF4C] text-[#0A1628] px-3 py-1 sm:px-4 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium hover:bg-opacity-90">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Header;
