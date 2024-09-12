import React from 'react';
import { FaShoppingCart, FaListAlt, FaTshirt, FaGem, FaGift, FaAppleAlt, FaBroom } from 'react-icons/fa';

const services = [
  {
    title: 'Personal Errands',
    icon: <FaShoppingCart />,
    description: 'Let us handle your daily personal errands with efficiency and care.',
  },
  {
    title: 'Project Supervision',
    icon: <FaListAlt />,
    description: 'We oversee your projects to ensure everything runs smoothly and on time.',
  },
  {
    title: 'Fabric Shopping',
    icon: <FaTshirt />,
    description: 'We assist in shopping for high-quality fabrics tailored to your needs.',
  },
  {
    title: 'Jewellery Shopping',
    icon: <FaGem />,
    description: 'Find the perfect pieces with our expert jewellery shopping services.',
  },
  {
    title: 'Gift Shopping',
    icon: <FaGift />,
    description: 'Let us find the ideal gift for any occasion, personalized to your preferences.',
  },
  {
    title: 'Foodstuff & Grocery Shopping',
    icon: <FaAppleAlt />,
    description: 'We handle all your foodstuff and grocery shopping, ensuring top quality.',
  },
  {
    title: 'Cleaning Services',
    icon: <FaBroom />,
    description: 'Our cleaning services ensure your space remains spotless and comfortable.',
  },
];

const Services = () => {
  return (
    <section className="w-full max-w-6xl my-8 mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Services Offered</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-lg p-6 rounded-lg text-center transition-transform transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
