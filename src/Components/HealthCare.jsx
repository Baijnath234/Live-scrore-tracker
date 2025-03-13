// src/App.js

import React from "react";
import { FaStethoscope, FaHeartbeat, FaUserNurse, FaProcedures } from "react-icons/fa";

function HealthCare () {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-lg mb-8">
            We provide top-notch medical care, personalized treatments, and round-the-clock support.
          </p>
          <a href="#services" className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaStethoscope className="text-blue-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">General Checkup</h3>
              <p>Comprehensive medical exams to assess your overall health.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaHeartbeat className="text-red-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
              <p>Heart care services from diagnosis to advanced treatment.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaUserNurse className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nursing Care</h3>
              <p>Experienced nurses to assist in recovery and patient care.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <FaProcedures className="text-purple-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Surgery</h3>
              <p>World-class surgeons for specialized treatments and surgeries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We are dedicated to offering personalized, state-of-the-art medical care. Our team of professionals is ready to cater to all your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-500 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          <p className="text-lg mb-6">Have any questions? We're here to help!</p>
          <a href="mailto:info@healthcare.com" className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-white text-center">
        <p>&copy; 2024 HealthCare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HealthCare;
