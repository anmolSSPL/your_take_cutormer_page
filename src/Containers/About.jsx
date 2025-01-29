import React from 'react';
import Header from '../components/About/Header';
import Hero from '../components/About/Hero';
import Overview from '../components/About/Overview';
import Features from '../components/About/Features';
import Process from '../components/About/Process';
import Testimonials from '../components/About/Testimonials';
import ContactForm from '../components/About/ContactForm';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="mt-1">
        <Hero />

        <div className="mt-1">
        <Overview />
        <div className='ml-4'>
        <Features />
        </div>
        </div>

        <Process />
        <Testimonials />
        <ContactForm />
      </div>
    </div>
  );
};

export default About;