import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center md:text-justify py-8 w-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* About Section */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm">
              Reliance Global Errands offers exceptional services tailored to your needs. Our dedicated team is here to make your life easier with reliability and care.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm">5, Ajoke Kasomo Close, Off Idowu Adeniji Street, Ekoro Road, Abule Egba Bus Stop, Lagos</p>
            <p className="text-sm">Phone: 08034113539, 08097711667, 08099756408</p>
            <p className="text-sm">Email: <a href="mailto:services.relianceglobalerrands@gmail.com" className="hover:underline">services.relianceglobalerrands@gmail.com</a></p>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} TeemahInvites All rights reserved.(+2348029958684)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
