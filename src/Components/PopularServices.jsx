import React from 'react';
import Healthcare from '../assets/healthcare.jpg';
import Education from '../assets/Education.jpg'
import IT_Services from '../assets/IT-Services.jpg'
import Science from '../assets/Science.jpg'
import Tech from '../assets/Tech.jpg'
import Food_Drink from '../assets/Food&Drink.jpg'
import Finance from '../assets/Finance.jpg'
import Arrow from '../assets/Arrow.jpg'

const PopularServices = () => {
  const services = [
    { title: 'Education', description: 'Find your next course', img: Education },
    { title: 'Healthcare', description: 'Find your next healthcare job', img: Healthcare },
    { title: 'IT Services', description: 'Find your next project', icon: '💻', img: IT_Services },
    { title: 'Science', description: 'Find your next research', icon: '🔭', img: Science },
    { title: 'Tech', description: 'Find your next tech job', icon: '🖥️', img: Tech },
    { title: 'Food & Drink', description: 'Find your next restaurant job', icon: '🍽️', img: Food_Drink },
    { title: 'Finance', description: 'Find your next finance job', icon: '💵', img: Finance },
    { icon: '➡️', img: Arrow, isButton: true },
  ];

  return (
    <div className="container mx-auto py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Popular Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="perspective-1000">
            <div className="relative w-full h-64 bg-gray-200 rounded-lg shadow-lg transform-style-3d transition-transform duration-500 hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 rounded-lg overflow-hidden flex flex-col items-center p-6 backface-hidden">
                <img src={service.img} alt={service.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                {service.isButton && (
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500">View all</button>
                )}
              </div>

              {/* Back Side */}
              {/* <div className="absolute inset-0 text-white rounded-lg p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                {service.isButton && (
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg">View all</button>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
