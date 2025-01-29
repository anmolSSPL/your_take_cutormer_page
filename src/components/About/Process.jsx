import React from 'react';
import ProcessImage from '../../assets/process.svg';

const Process = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          How it Works?
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12">
          Discover how top brands grow and innovate with your take
        </p>

        {/* Image */}
        <img 
          src={ProcessImage} 
          alt="How it works process" 
          className="w-full max-w-4xl h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default Process;