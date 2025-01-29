import React from "react";
import quotes from "../../assets/quotes.svg";

const testimonials = [
  {
    name: "Esther Hills",
    position: "Lead Intranet Technician",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. Sunt est qui ab non dolores repellat rem impedit dolores.",
  },
  {
    name: "Ethel Johnson",
    position: "Human Director",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback: "Fuga et debitis numquam eaque harum sint enim quisquam.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-white p-8 md:p-16">
      {/* Centered Heading and Paragraph at the Top */}
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Customer Success Stories
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
          Discover how top brands grow and innovate with your take.
        </p>
      </div>

      {/* Full-width Div */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Quotes and Navigation Arrows */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={quotes} alt="Quotes" className="w-12 h-12 text-gray-300" />
          <h3 className="text-xl font-bold text-gray-800 mt-6">
            Clients Testimonials
          </h3>
          <div className="flex gap-3 mt-4">
            <button className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100">
              &lt;
            </button>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
              &gt;
            </button>
          </div>
        </div>

        {/* Right Side: Blue Div with Testimonial Cards */}
        <div className="w-full lg:w-2/3 bg-[#0A1428] rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* First Card */}
            <div className="w-full lg:w-[60%] bg-white shadow-md rounded-lg p-5 lg:-translate-x-24 relative">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-blue-600 font-bold">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[0].position}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                <q className="text-lg text-gray-700 italic">
                  "{testimonials[0].feedback}"
                </q>
              </p>
            </div>

            {/* Second Card */}
            <div className="w-full lg:w-[40%] bg-white shadow-md rounded-lg p-5 lg:translate-x-24 relative">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-blue-600 font-bold">
                    {testimonials[1].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[1].position}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                <q className="text-lg text-gray-700 italic">
                  "{testimonials[1].feedback}"
                </q>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;