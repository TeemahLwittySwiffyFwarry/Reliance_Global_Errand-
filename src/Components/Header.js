import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-cyan-100 via-cyan-500 to-teal-800 shadow-lg p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-2xl font-bold text-white flex items-center">
        <img src="/reliance_logo1.png" alt="Reliance Global Errands" className="w-16 inline-block mr-2" />
        <span className="tracking-wide text-teal-800">Reliance Global Errands</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-white hover:text-green-100 transition duration-300 ease-in-out">Home</a>
        <a href="#about" className="text-white hover:text-green-100 transition duration-300 ease-in-out">About</a>
        <a href="#services" className="text-white hover:text-green-100 transition duration-300 ease-in-out">Services</a>
        <a href="#contact" className="text-white hover:text-green-100 transition duration-300 ease-in-out">Contact</a>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gradient-to-r from-cyan-600 via-green-500 to-teal-400 shadow-lg z-10`}>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#" className="text-white hover:text-green-100 transition duration-300 ease-in-out">Home</a>
          <a href="#about" className="text-white hover:text-green-100 transition duration-300 ease-in-out">About</a>
          <a href="#services" className="text-white hover:text-green-100 transition duration-300 ease-in-out">Services</a>
          <a href="#contact" className="text-white hover:text-green-100 transition duration-300 ease-in-out">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
