import React, { useState } from "react";
import quotes from "../../assets/quotes.svg";
import arrowup from "../../assets/Arrowup.svg";
import arrowdown from "../../assets/ArrowDown.svg";

const testimonials = [
  {
    name: "Esther Hills",
    position: "Lead Intranet Technician",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod velit quia.",
  },
  {
    name: "Ethel Johnson",
    position: "Human Director",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback: "Fuga et debitis numquam eaque harum sint enim quisquam.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white p-4 sm:p-8 md:p-16 " style={{ width: "100%" }}>
      {/* Centered Heading and Paragraph at the Top */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Customer Success Stories
        </h1>
        <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base md:text-lg">
          Discover how top brands grow and innovate with your take.
        </p>
      </div>

      {/* Full-width Div */}
      <div className="flex flex-col lg:flex-row items-center ml-0 sm:ml-12 md:ml-24 lg:ml-68">
        {/* Left Side: Quotes and Navigation Arrows */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <img
            src={quotes}
            alt="Quotes"
            className="w-24 sm:w-32 h-24 sm:h-32 text-gray-300"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4 sm:mt-6 -ml-0 sm:-ml-12">
            Clients <br></br>Testimonials
          </h3>
          <div className="flex gap-2 sm:gap-4 mt-4">
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 -ml-0 sm:-ml-12"
            >
              <img src={arrowup} alt="Previous" className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 text-white rounded-full flex items-center justify-center"
            >
              <img src={arrowdown} alt="Next" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Blue Div with Testimonial Cards */}
      <div className="w-full lg:w-2/3 bg-[#0A1428] rounded-lg p-4 sm:p-6 md:p-8 ml-1 sm:ml-24 md:ml-48 lg:ml-180 -mt-0 lg:-mt-64">
        {" "}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* First Card */}
          <div
            style={{
              height: "220px ",
              overflow: "hidden",
              width: "100%",
            }}
            className="w-full lg:w-[60%] bg-white shadow-md rounded-lg p-4 sm:p-5 lg:-translate-x-0 sm:lg:-translate-x-24 relative transition-transform duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
              />
              <div>
                <h4 className="text-blue-600 font-bold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
              <q className="text-base sm:text-lg text-gray-700 italic">
                "{testimonials[currentIndex].feedback}"
              </q>
            </p>
          </div>

          {/* Second Card */}
          <div
            style={{
              height: "220px ",
              overflow: "hidden",
              width: "100%",
            }}
            className="w-full lg:w-[40%] bg-white shadow-md rounded-lg p-4 sm:p-5 lg:translate-x-0 sm:lg:-translate-x-24 relative transition-transform duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src={
                  testimonials[(currentIndex + 1) % testimonials.length].image
                }
                alt={
                  testimonials[(currentIndex + 1) % testimonials.length].name
                }
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
              />
              <div>
                <h4 className="text-blue-600 font-bold">
                  {testimonials[(currentIndex + 1) % testimonials.length].name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {
                    testimonials[(currentIndex + 1) % testimonials.length]
                      .position
                  }
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
              <q className="text-base sm:text-lg text-gray-700 italic">
                "
                {
                  testimonials[(currentIndex + 1) % testimonials.length]
                    .feedback
                }
                "
              </q>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
