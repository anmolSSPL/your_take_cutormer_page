import React from 'react';
import feature from '../../assets/feature.svg';

const Features = () => {
  return (
    <div className="ml-2 sm:ml-1 md:ml-6 lg:ml-[34px]">
    <div className="w-full max-w-[1450px] h-auto md:h-[530.38px] rounded-[7.62px] flex flex-wrap justify-center md:justify-between">
      <img 
        src={feature} 
        alt="Our Features and Benefits"
        className="w-full max-w-full h-auto object-contain"
      />
    </div>
  </div>
  
  );
};

export default Features;