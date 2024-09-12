import React from 'react';
import Typewriter from 'react-typewriter-effect';

const About = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-center w-full max-w-full"
      style={{ 
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      
      <div className="relative z-10 px-4 py-16 max-w-3xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          <Typewriter
            text="About Us"
            cursorColor="white"
            typeSpeed={100}
            delaySpeed={1000}
            eraseSpeed={50}
          />
        </h2>
        <p className="mt-4 text-white text-center">
          <Typewriter
            text="Welcome to Reliance Global Errands, where we redefine convenience and excellence. We are a dynamic team dedicated to making your life easier and more enjoyable through our comprehensive range of services."
            cursorColor="white"
            typeSpeed={50}
            delaySpeed={4000}
            eraseSpeed={30}
          />
        </p>
        <p className="mt-2 text-white text-center">
          <Typewriter
            text="Our mission is to seamlessly integrate efficiency, reliability, and personalized care into every aspect of your daily needs."
            cursorColor="white"
            typeSpeed={50}
            delaySpeed={8000}
            eraseSpeed={30}
          />
        </p>
      </div>
    </section>
  );
};

export default About;
