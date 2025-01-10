import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/+2348034113539?text=Hello!%20I%20need%20assistance."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300 flex items-center space-x-3"
    >
      <span className="text-white font-bold">Send us a message</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.836.741 5.522 2.039 7.869L0 32l8.31-2.029C10.458 30.379 13.162 31 16 31c8.836 0 16-7.164 16-16S24.836 0 16 0zm7.29 23.234c-.327.911-1.858 1.716-2.594 1.818-.662.086-1.441.127-2.358-.258-.542-.222-1.318-.486-2.304-1.009-4.087-2.178-6.754-6.056-6.967-6.327-.213-.27-1.66-2.202-1.66-4.198 0-1.995 1.048-2.983 1.42-3.401.327-.375.865-.563 1.329-.563.16 0 .306.01.437.016.38.016.57.038.819.639.326.774 1.04 2.667 1.13 2.863.09.195.156.423.03.652-.124.228-.186.367-.37.56-.184.195-.368.43-.526.585-.184.185-.375.385-.16.744.214.358.954 1.566 2.048 2.535 1.406 1.22 2.579 1.598 2.937 1.792.358.195.571.165.781-.093.196-.23.89-1.04 1.126-1.395.236-.356.487-.311.819-.186.327.124 2.06.975 2.412 1.153.351.178.584.27.669.42.087.15.087.86-.24 1.771z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
