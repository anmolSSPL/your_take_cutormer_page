import React, { useState } from "react";
import bar_chart from "../../assets/bar_chart.svg";
import building from "../../assets/building.svg";
import arrow from "../../assets/arrow.svg";
import tick from "../../assets/tick.svg";
import EnquiryModal from "./EnquiryModal";

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-2 sm:px-2 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images & Stats */}
          <div className="relative pt-[470px] ml-2 sm:ml-1 md:ml-6  ">
            {/* Bar Chart with Border */}
            <div className="absolute right-5 sm:right-10 md:right-16 lg:right-20 top-5 sm:top-2 md:top-0 w-[80%] max-w-[302px] h-auto sm:h-[357px] rounded-lg border-[4px] sm:border-[6px] border-white overflow-hidden shadow-lg bg-white z-10">
              <img
                src={bar_chart}
                alt="Statistics"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Building Image (Behind Bar Chart) */}
            <div className="absolute left-0 top-[100px] w-[302px] h-[394px] overflow-hidden rounded-lg border-[6px] border-white shadow-lg z-0">
              <img
                src={building}
                alt="Company Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats - 90% & Happy User */}
            <div className="hidden sm:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center ml-0 sm:ml-10 md:ml-16 lg:ml-27">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold text-[#D1FF4C]">
                90%
              </span>
              <span className="text-base sm:text-lg md:text-xl text-black mt-1 sm:mt-2">
                Happy User
              </span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-[#D1FF4C] text-sm uppercase tracking-wide">
              ABOUT US
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-6">
              Our Company Overview
            </h2>
            <p className="text-gray-600 mb-8">
              Your Take is a leading online platform designed to simplify the
              process of gathering and analyzing customer feedback. Our
              intuitive form builder allows businesses of all sizes to create
              customized surveys and questionnaires in just a few clicks.
            </p>

            <div className="mb-8">
              <p className="text-gray-700 font-medium mb-4">
                With Your Take, you can:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">
                    Create professional-looking forms
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">Share your forms easily</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">
                    Analyze feedback effectively
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">
                    Integrate with other tools
                  </span>
                </div>
              </div>
            </div>

            <button
              className="bg-[#D1FF4C] text-black px-6 py-2.5 rounded-md hover:bg-opacity-90 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Let's Talk</span>
                <img src={arrow} alt="arrow" className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
