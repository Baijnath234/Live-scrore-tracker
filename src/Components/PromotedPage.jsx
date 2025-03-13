import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHospital, faGraduationCap, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

function PromotedServices() {
  return (
    <div className="bg-gray-100 p-24 rounded-lg shadow-md ">
      <h2 className="text-4xl font-bold text-center mb-4">Promoted Services</h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faStar} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">School Digital Service</h3>
          <p className="text-center">Find your next course</p>
          <button className="bg-black text-white px-4 py-2 rounded-md mt-4">View</button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faHospital} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Hospital & Lab</h3>
          <p className="text-center">Find your nearest hospital</p>
          <button className="bg-black text-white px-4 py-2 rounded-md mt-4">View</button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faGraduationCap} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Govt. Job Preparation</h3>
          <p className="text-center">Find the best schools and</p>
          <button className="bg-black text-white px-4 py-2 rounded-md mt-4">Explore</button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">School Digital Service</h3>
          <p className="text-center">Book appointments with ease</p>
          <button className="bg-black text-white px-4 py-2 rounded-md mt-4">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default PromotedServices;
