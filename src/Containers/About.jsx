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

const About = () => { 
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white" style={{ overflowX: "hidden" }}>

      <nav className="bg-[#0A1628] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Empty div for spacing */}
          <div className="w-32 hidden sm:block"></div>

          {/* Hamburger menu for mobile */}
          <button className="sm:hidden" onClick={toggleMenu}>
            <img
              src={isMenuOpen ? closehamburger : openhamburger}
              alt="menu"
              className="w-6 h-6 filter invert"
            />
          </button>

          {/* Center navigation */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex gap-8 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#0A1628] sm:bg-transparent z-10`}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-0">
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

          {/* Let's Talk button with modal trigger */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#D1FF4C] text-[#0A1628] px-4 py-1.5 rounded text-sm font-medium hover:bg-opacity-90 transition-colors w-32 hidden sm:block"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      <div className="mt-1">
        <Hero />

        <div className="mt-1">
          <Overview />
          <div className="ml-4">
            <Features />
          </div>
        </div>

        <Process />
        {/* <div className="ml-104"> */}
        <Testimonials />
        {/* </div> */}
        <ContactForm /> 

        
      {/* Enquiry Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      </div>
    </div>
  );
};

export default About;