import React from 'react';
import chair from '../../assets/chair.png';

const Hero = () => {
  return (
    <div 
      className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-white"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${chair})`, 
          backgroundColor: '#021F3FBF', 
          backgroundBlendMode: 'multiply'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default Hero;
