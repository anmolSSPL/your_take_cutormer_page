// src/containers/About.jsx
import React, { useState } from "react";
import Hero from "../components/About/Hero";
import Overview from "../components/About/Overview";
import Features from "../components/About/Features";
import Process from "../components/About/Process";
import Testimonials from "../components/About/Testimonials";
import ContactForm from "../components/About/ContactForm";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../components/About/EnquiryModal";
import openhamburger from "../assets/openhamburger.svg";
import closehamburger from "../assets/closehamburger.svg";
import ToastNotification, {
  showToast,
} from "../components/ToastNotification/ToastNotification";

const About = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <ToastNotification />

      <div className="min-h-screen bg-white" style={{ overflowX: "hidden" }}>
        <nav className="bg-[#0A1628] py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between relative">
            {/* Centered Navigation (Hidden on Small Screens) */}
            <div className="hidden sm:flex gap-8">
              <button
                className="text-white hover:text-[#D1FF4C] text-sm font-medium"
                onClick={() => navigate("/")}
              >
                Form
              </button>
              <button
                className="text-[#D1FF4C] text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D1FF4C]"
                onClick={() => navigate("/about")}
              >
                About Us
              </button>
            </div>

            {/* "Let's Talk" Button (Always on Right) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D1FF4C] text-[#0A1628] px-4 py-1.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors w-32 hidden sm:block"
            >
              Let's Talk
            </button>

            {/* Hamburger Menu Button (On Right) */}
            {!isMenuOpen && (
              <button className="sm:hidden ml-auto" onClick={toggleMenu}>
                <img
                  src={openhamburger}
                  alt="Open menu"
                  className="w-6 h-6 filter invert"
                />
              </button>
            )}
          </div>

          {/* Mobile Dropdown Menu (Opens from Right) */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-[#0A1628] shadow-lg transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 sm:hidden z-20`}
          >
            {/* Close Button Inside the Menu */}
            <button className="absolute top-5 right-5" onClick={toggleMenu}>
              <img
                src={closehamburger}
                alt="Close menu"
                className="w-6 h-6 filter invert"
              />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col p-6 gap-6 mt-12">
              <button
                className="text-white hover:text-[#D1FF4C] text-sm font-medium"
                onClick={() => navigate("/")}
              >
                Form
              </button>
              <button
                className="text-[#D1FF4C] text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D1FF4C]"
                onClick={() => navigate("/about")}
              >
                About Us
              </button>
            </div>
          </div>

          {/* Background Overlay for Mobile Menu */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 sm:hidden"
              onClick={toggleMenu}
            ></div>
          )}
        </nav>

        <div className="mt-1">
          <Hero />

          <Overview />
          <Features />

          <Process />
          {/* <div className="ml-104"> */}
          <Testimonials />
          {/* </div> */}
          <ContactForm showToast={showToast} />

          {/* Enquiry Modal */}
          <EnquiryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default About;
