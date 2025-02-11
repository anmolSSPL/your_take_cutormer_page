import React, { useState } from "react";
import map from "../../assets/map.svg";
import mail from "../../assets/mail.svg"; // Import for mail icon
import rectangle from "../../assets/Rectangle.svg"; // Import for rectangle icon
import circle from "../../assets/circle.svg"; // Import for circle icon
import whatsapp from "../../assets/whatsapp.svg"; // Import for WhatsApp icon
import telegram from "../../assets/telegram.svg"; // Import for Telegram icon
import twitter from "../../assets/twitter.svg"; // Import for Twitter icon
import facebook from "../../assets/facebook.svg"; // Import for Facebook icon
import instagram from "../../assets/instagram.svg"; // Import for Instagram icon
import "./ContactForm.css";

const Footer = ({ showToast }) => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    if (!email.trim()) {
      showToast("Email is required.", "error");
      return;
    }
    if (!validateEmail(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    showToast("Email submitted successfully!", "success");
    setEmail("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  };

  return (
    <footer className="bg-[#0B142F] text-white">
      <div className="flex flex-col md:flex-row justify-between px-4 py-8 gap-4 md:gap-6 lg:gap-8">
        {/* Left Section */}
        <div className="w-full md:w-3/5 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left md:text-left">
            Your Take
          </h2>

          <p className="text-md md:text-lg text-left md:text-left">
            Your Take is a powerful online platform designed to streamline the
            process of gathering and analyzing customer feedback. Our intuitive
            form builder allows businesses of all sizes to create customized
            surveys and questionnaires in just a few clicks.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <img src={facebook} alt="Facebook Icon" className="w-12 h-12" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <img src={instagram} alt="Instagram Icon" className="w-12 h-12" />
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <img src={whatsapp} alt="WhatsApp Icon" className="w-12 h-12" />
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <img src={telegram} alt="Telegram Icon" className="w-12 h-12" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            >
              <img src={twitter} alt="Twitter Icon" className="w-12 h-12" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-3/5 mt-8 md:mt-0">
          {/* New Email Section */}
          <div className="email-container">
            <div className="email-icon-container">
              <img
                src={mail}
                alt="Mail Icon"
                style={{ width: "32px", height: "32px" }}
              />
              <div className="email-text">
                <h1>Enter Your Email</h1>
                <p>Our Colleagues Will Contact You Soon</p>
              </div>
            </div>

            <div className="email-input-container">
              <input
                type="email"
                placeholder="Enter Email *"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />

              <div className="email-submit" onClick={handleEmailSubmit}>
                <span>→</span>
              </div>
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
                  Interface heights , off Malad Link Road, Malad West Mumbai
                  400064
                  {/* 
                  <span className="text-md">Bay, Delhi</span> */}
                </p>
                {/* <p className="text-md ml-7">Pn: 66770068</p> */}
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
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col sm:flex-row items-center justify-center py-3 bg-[#0c0f1f] text-sm font-poppins text-center">
          <div className="hidden sm:block flex-grow h-[1px] bg-gray-600"></div>

          <span className="px-4 text-gray-400 whitespace-normal sm:whitespace-nowrap text-center">
            © 2024 | All Rights Reserved | Powered by Your Take Design
            Department
          </span>

          <div className="hidden sm:block flex-grow h-[1px] bg-gray-600"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
