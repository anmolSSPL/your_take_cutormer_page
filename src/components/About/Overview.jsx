import React, { useState } from 'react';
import bar_chart from '../../assets/bar_chart.svg';
import building from '../../assets/building.svg';
import arrow from '../../assets/arrow.svg';
import tick from '../../assets/tick.svg';
import EnquiryModal from './EnquiryModal';

const Overview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <EnquiryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images & Stats */}
          <div className="relative pt-[474px]">
            {/* Bar Chart with Border */}
            <div className="absolute right-0 top-0 w-[302px] h-[357px] rounded-lg border-[6px] border-white overflow-hidden shadow-lg bg-white">
              <img 
                src={bar_chart} 
                alt="Statistics"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Building Image */}
            <div className="absolute left-0 top-[100px] w-[302px] h-[394px] overflow-hidden rounded-lg border-[6px] border-white shadow-lg">
              <img 
                src={building} 
                alt="Company Building"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats - 90% & Happy User */}
            <div className="absolute bottom-0 right-2 flex flex-col items-center mr-35 ">
              <span className="text-[60px] font-bold text-[#D1FF4C]">90%</span>
              <span className="text-xl text-black mt-2 ">Happy User</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-[#D1FF4C] text-sm uppercase tracking-wide">ABOUT US</span>
            <h2 className="text-3xl font-bold mt-2 mb-6">Our Company Overview</h2>
            <p className="text-gray-600 mb-8">
              Your Take is a leading online platform designed to simplify the process of 
              gathering and analyzing customer feedback. Our intuitive form builder 
              allows businesses of all sizes to create customized surveys and 
              questionnaires in just a few clicks.
            </p>
            
            <div className="mb-8">
              <p className="text-gray-700 font-medium mb-4">With Your Take, you can:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">Create professional-looking forms</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">Share your forms easily</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">Analyze feedback effectively</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={tick} alt="" className="w-5 h-5" />
                  <span className="text-gray-600">Integrate with other tools</span>
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
