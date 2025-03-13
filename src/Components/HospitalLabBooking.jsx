import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSuitcaseMedical, 
  faBrain, 
  faPen, 
  faDollarSign, 
  faCreditCard 
} from '@fortawesome/free-solid-svg-icons';

function HospitalAndLabBooking() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-center mb-16">Hospital & Lab Booking</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faSuitcaseMedical} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Govt. Job Preparation</h3>
          <p className="text-center">Expert tips and advice</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faBrain} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Maximize your productivity</h3>
          <p className="text-center">Learn from the best in the business</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faSuitcaseMedical} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Achieve your fitness goals</h3>
          <p className="text-center">Expert tips and tricks</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faPen} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Craft the perfect resume</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faDollarSign} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Compare salaries across industries</h3>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faCreditCard} className="text-black text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Calculate your taxes with ease</h3>
        </div>
      </div>
    </div>
  );
}

export default HospitalAndLabBooking;
