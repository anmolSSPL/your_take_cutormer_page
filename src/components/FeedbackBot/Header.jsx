import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#0A1628] py-3 sm:py-4 md:py-6 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <img 
                src={botIcon} 
                alt="Bot" 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#D1FF4C] font-semibold text-xs sm:text-sm md:text-base">
                Feedback Chatbot
              </span>
              <span className="text-gray-400 text-[10px] sm:text-xs">Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <span
            className="text-white text-xs sm:text-sm md:text-base hover:text-[#D1FF4C] cursor-pointer transition-colors duration-200"
            onClick={() => navigate("/about")}
          >
            About Us
          </span>
          <button 
            className="bg-[#D1FF4C] text-[#0A1628] px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm md:text-base font-medium hover:bg-opacity-90 transition-all duration-200"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;