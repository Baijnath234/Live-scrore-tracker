import React, { useEffect } from 'react';
import WelcomeImage from '../assets/welcome-image.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../App.css'

const CareerSection = () => {

  useEffect(() => {
    // Add a fade-in effect to social media icons after 3 seconds
    const iconContainer = document.querySelector('.social-icons-container');
    setTimeout(() => {
      iconContainer.classList.add('fade-in');
    }, 1000); // Add a 3-second delay
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${WelcomeImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Social Media Icons in the Top Right Corner */}
      <div className="social-icons-container fixed top-6 right-6 flex flex-col items-center gap-4 initial-opacity top-20 fade-in z-10">
        <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
          <FaFacebookF className="text-2xl" />
        </div>
        <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
          <FaTwitter className="text-2xl" />
        </div>
        <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
          <FaLinkedinIn className="text-2xl" />
        </div>
        <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
          <FaInstagram className="text-2xl" />
        </div>
      </div>


      {/* Container for the content */}
      <div className="relative bg-white bg-opacity-80 rounded-lg shadow-lg p-10 w-4/5 max-w-6xl flex flex-col items-center">

        {/* Center Text */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-4">Find Your Next Career</h1>
          <p>Choose your career as per your profile.</p>
        </div>

        {/* Icons in a Row with Center Alignment and Circle Styling */}
        <div className="flex flex-row items-center justify-center gap-6 mb-6">
          {/* Top center icon */}
          <div className="icon-animate bg-black text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
            <span className="text-3xl">H</span>
          </div>
          {/* Left top icon */}
          <div className="icon-animate bg-black text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
            <span className="text-3xl">📖</span>
          </div>
          {/* Right top icon */}
          <div className="icon-animate bg-black text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
            <span className="text-3xl">💼</span>
          </div>
          {/* Bottom left icon */}
          <div className="icon-animate bg-black text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
            <span className="text-3xl">⏰</span>
          </div>
          {/* Bottom right icon */}
          <div className="icon-animate bg-black text-white p-4 rounded-full flex items-center justify-center w-16 h-16">
            <span className="text-3xl">😊</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full flex justify-center relative mb-4">
          <div className="flex border border-gray-300 rounded-md overflow-hidden w-1/2">
            {/* Service Input */}
            <input
              type="text"
              placeholder="What service do you need?"
              className="w-full px-4 py-2 focus:outline-none"
            />
            {/* Location Input */}
            <input
              type="text"
              placeholder="Enter location"
              className="w-full px-4 py-2 border-l border-gray-300 focus:outline-none"
            />
            {/* Search Button */}
            <button className="bg-black text-white px-6 py-2 transition-colors duration-300 hover:bg-blue-500">Search</button>
          </div>
        </div>

        {/* Advanced Search Link */}
        <div className="relative">
          <a href="#" className="text-gray-500 hover:underline">
            Advanced search
          </a>
        </div>

        {/* Get Started Button */}
        <div className="mt-6">
          <button className="bg-black text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
