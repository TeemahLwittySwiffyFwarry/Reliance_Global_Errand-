import React from 'react';
import Typewriter from 'react-typewriter-effect';

const About = () => {
  return (
    <section className="w-full">
  {/* Banner Section */}
  <div 
    className="relative w-full h-96 bg-fit bg-center" 
    style={{ backgroundImage: "url('/banner3.png')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
    <div className="relative z-10 w-full h-full">
      <img src="./banner3.png" alt="banner" className="w-full h-full object-contain" />
    </div>
  </div>

  {/* About Us Card Section */}
  <div id="about" className="flex justify-center items-center bg-gray-100 w-full py-8">
    <div className="bg-white rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500 w-full max-w-6xl mx-auto p-8 md:p-12 lg:p-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        About Us
      </h2>
      <p className="mt-4 text-gray-700 text-lg text-center leading-relaxed">
        Welcome to Reliance Global Errands, where we redefine convenience and excellence. We are a dynamic team dedicated to making your life easier and more enjoyable through our comprehensive range of services.
      </p>
      <p className="mt-6 text-gray-700 text-lg leading-relaxed">
        Our mission is to seamlessly integrate efficiency, reliability, and personalized care into every aspect of your daily needs.
      </p>
    </div>
  </div>
</section>

  );
};

export default About;
