import React, { useState } from 'react';
import quotes from "../../assets/quotes.svg";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate indices for the two visible testimonials
  const firstIndex = currentIndex;
  const secondIndex = (currentIndex + 1) % testimonials.length;

  return (
    <div className="w-full">
      {/* Quotes and Navigation Section */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <img src={quotes} alt="Quotes" className="w-24 sm:w-32 h-24 sm:h-32 text-gray-300" />
          <h3 className="text-xl font-bold text-gray-800 mt-4 sm:mt-6">
            Clients <br />Testimonials
          </h3>
          <div className="flex gap-2 sm:gap-4 mt-4">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="w-full bg-[#0A1428] rounded-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* First Card */}
          <div className="w-full lg:w-3/5 bg-white shadow-md rounded-lg p-4 sm:p-5 relative transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={testimonials[firstIndex].image}
                alt={testimonials[firstIndex].name}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
              />
              <div>
                <h4 className="text-blue-600 font-bold">
                  {testimonials[firstIndex].name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonials[firstIndex].position}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
              <q className="text-base sm:text-lg text-gray-700 italic">
                {testimonials[firstIndex].feedback}
              </q>
            </p>
          </div>

          {/* Second Card */}
          <div className="w-full lg:w-2/5 bg-white shadow-md rounded-lg p-4 sm:p-5 relative transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={testimonials[secondIndex].image}
                alt={testimonials[secondIndex].name}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
              />
              <div>
                <h4 className="text-blue-600 font-bold">
                  {testimonials[secondIndex].name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonials[secondIndex].position}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
              <q className="text-base sm:text-lg text-gray-700 italic">
                {testimonials[secondIndex].feedback}
              </q>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;