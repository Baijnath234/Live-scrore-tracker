import React from 'react'

const ServiceHub = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* About ServiceHub */}
      <div>
        <h3 className="text-xl font-bold mb-4">About ServiceHub</h3>
        <p className="text-gray-400">
          ServiceHub is your one-stop platform for finding jobs, enhancing your career, and accessing wellness services. 
          Explore our job listings and career resources.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Latest job openings</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">For employers</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Part-time job listings</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Job search for students</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">NGO job listings</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Remote job listings</a></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h3 className="text-xl font-bold mb-4">Follow us on Social Media</h3>
        <ul>
          <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="text-center mt-8 text-gray-500">
      &copy; 2024 ServiceHub. All rights reserved.
    </div>
  </div>
</footer>

  )
}

export default ServiceHub