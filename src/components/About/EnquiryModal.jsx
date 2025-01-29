import React from 'react';
import scenary from "../../assets/scenary.svg";
import phone from "../../assets/phone.svg";
import enquirymail from "../../assets/enquirymail.svg";
import profile from "../../assets/profile.svg";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-9">
      <div className="bg-white w-full max-w-2xl relative flex flex-col md:flex-row shadow-lg mt-4 h-auto md:h-[400px] rounded-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-[#F5F5F5] flex items-center justify-center h-[200px] md:h-full">
          <img 
            src={scenary} 
            alt="Scenery" 
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full p-4">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          {/* Modal Content */}
          <div className="mt-16 p-4">
            <h2 className="text-lg font-semibold text-[#9DC93C]">SEND INQUIRY</h2>
            <p className="text-xs text-gray-500 mt-1">24/7 we will answer your questions and problems</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="relative">
                <img 
                  src={profile} 
                  alt="Profile Icon" 
                  className="absolute left-2 top-2 w-4 h-4"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                  required
                />
              </div>
              <div className="relative">
                <img 
                  src={profile} 
                  alt="Profile Icon" 
                  className="absolute left-2 top-2 w-4 h-4"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <img 
                src={enquirymail} 
                alt="Email Icon" 
                className="absolute left-2 top-2 w-4 h-4"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                required
              />
            </div>

            <div className="relative">
              <img 
                src={phone} 
                alt="Phone Icon" 
                className="absolute left-2 top-2 w-4 h-4"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-8 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Describe your issue"
                rows="3"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#9DC93C]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0A1628] text-white py-1.5 text-sm rounded hover:bg-opacity-90 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
