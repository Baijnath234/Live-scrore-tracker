import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page when clicked
  };

  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center space-x-2 ml-3">
          <span className="text-xl">
            🎓 {/* This is the graduation cap emoji */}
          </span>
          <span className="font-bold text-lg">Service Provider</span>
        </div>

        {/* Middle: Menu Items */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-black hover:underline">Home</a>
          <a href="/healthcare" className="text-gray-700 hover:text-black hover:underline">Healthcare</a>
          <a href="/govt-job" className="text-gray-700 hover:text-black hover:underline">Govt. Job</a>
          <a href="/news" className="text-gray-700 hover:text-black hover:underline">News</a>
          <a href="/erp" className="text-gray-700 hover:text-black hover:underline">Education</a>
          <a href="/score" className="text-gray-700 hover:text-black hover:underline">IT industries</a>
          <a href="/score" className="text-gray-700 hover:text-black hover:underline">Others</a>
        </div>

        {/* Right Side: Log In Button */}
        <div className='mr-3'>
          <button 
            className="bg-black text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500" 
            onClick={handleLoginClick} // Handle the click event
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
