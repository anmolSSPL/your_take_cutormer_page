import React from "react";
import map from "../../assets/map.svg";
import mail from "../../assets/mail.svg"; // Import for mail icon
import rectangle from "../../assets/Rectangle.svg"; // Import for rectangle icon
import circle from "../../assets/circle.svg"; // Import for circle icon
import whatsapp from "../../assets/whatsapp.svg"; // Import for WhatsApp icon
import telegram from "../../assets/telegram.svg"; // Import for Telegram icon
import twitter from "../../assets/twitter.svg"; // Import for Twitter icon
import facebook from "../../assets/facebook.svg"; // Import for Facebook icon
import instagram from "../../assets/instagram.svg"; // Import for Instagram icon

const Footer = () => {
  return (
    <footer className="bg-[#0B142F] text-white">
      <div className="flex flex-col md:flex-row justify-between px-4 py-8">
        {/* Left Section */}
        <div className="md:w-3/5">
          <h2 className="text-2xl font-bold mb-4">Your Take</h2>

          <p className="text-md">
            <span className="ml-4">Your Take is a powerful online platform designed to</span>
            <br />
            <span className="ml-4">streamline the process of gathering and analyzing</span>
            <br />
            <span className="ml-4">customer feedback. Our intuitive form builder allows</span>
            <br />
            <span className="ml-4">businesses of all sizes to create customized surveys and</span>
            <br />
            <span className="ml-4">questionnaires in just a few clicks.</span>
          </p>

          <div className="flex gap-6 mt-8 flex-wrap">
            <div className="w-13 h-13 flex items-center justify-center rounded mb-4 md:mb-0">
              <img src={facebook} alt="Facebook Icon" className="w-12 h-12" />
            </div>
            <div className="w-13 h-12 flex items-center justify-center rounded mb-4 md:mb-0">
              <img src={instagram} alt="Instagram Icon" className="w-12 h-12" />
            </div>
            <div className="w-13 h-12 flex items-center justify-center rounded mb-4 md:mb-0">
              <img src={whatsapp} alt="WhatsApp Icon" className="w-12 h-12" />
            </div>
            <div className="w-13 h-12 flex items-center justify-center rounded mb-4 md:mb-0">
              <img src={telegram} alt="Telegram Icon" className="w-12 h-12" />
            </div>
            <div className="w-13 h-12 flex items-center justify-center rounded mb-4 md:mb-0">
              <img src={twitter} alt="Twitter Icon" className="w-12 h-12" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 mt-8 md:mt-0">
          {/* New Email Section */}
          <div className="flex items-center p-2 rounded-lg mb-5 bg-[#1e2233]">
            <div className="p-2 rounded-md flex items-center justify-center">
              <img src={mail} alt="Mail Icon" className="w-8 h-8" />
            </div>

            <div className="flex-grow px-3 text-white">
              <h1 className="text-2xl font-semibold">Enter Your Email</h1>
              <p className="text-sm text-gray-400">Our Colleagues Will Contact You Soon</p>
            </div>

            <input
              type="email"
              placeholder="Enter Email *"
              className="flex-grow px-8 py-4 bg-[#0E1629] text-white rounded-md  border-none"
            />

            <div className="bg-[#BFEA7C] p-2 rounded-md flex items-center justify-center cursor-pointer ml-2">
              <span className="text-black">→</span>
            </div>
          </div>

          {/* Contact Section: Address & Map Side-by-Side */}
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="md:w-1/2">
              {/* Contact Us Section */}
              <div className="flex items-center gap-2">
                <img src={rectangle} alt="Rectangle Icon" className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Contact Us</h3>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <img src={circle} alt="Circle Icon" className="w-5 h-5" />
                  <p className="text-lg font-semibold">Our Address</p>
                </div>
                <p className="text-md mt-1 ml-7">
                  Churchill Executive Tower Business
                  <br />
                  <span className="text-md">Bay, Delhi</span>
                </p>
                <p className="text-md ml-7">Pn: 66770068</p>
              </div>
            </div>

            {/* Updated Map Section */}
            <div className=" h-60 bg-[#1e2233] flex items-center justify-center rounded">
              <img
                src={map}
                alt="Location Map"
                style={{ width: "380px", height: "252px" }} // Updated size
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom with dynamic line separators */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 bg-[#0c0f1f] text-sm font-poppins">
          <div className="flex-grow h-[1px] bg-gray-600"></div>
          <span className="px-4 text-gray-400 whitespace-nowrap">
            © 2024 | All Rights Reserved | Powered by Your Take Design Department
          </span>
          <div className="flex-grow h-[1px] bg-gray-600"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;