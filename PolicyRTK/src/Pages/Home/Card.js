import React from 'react';
import './style.css';

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white card-custom card-padding w-full sm:w-1/2 md:w-1/4 mb-6 mx-4">
      <div className="text-indigo-500 text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
