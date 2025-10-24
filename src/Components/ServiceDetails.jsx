import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceDetails = ({ service }) => {

  const {
    serviceName,
    image,
    category,
    description,
    price,
    rating,
    slotsAvailable,
    providerName,
    providerEmail,
  } = service;

  return (
    <div className=" mx-auto px-6 py-2">
      <div className="md:max-w-6xl max-w-3xl md:flex block mx-auto bg-white rounded-2xl shadow-lg border border-primary overflow-hidden">
       
        <div className="relative">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-80 object-cover"
          />
          <span className="absolute top-4 right-4 bg-primary text-white text-xs px-4 py-1 rounded-full uppercase font-medium">
            {category}
          </span>
        </div>

     
        <div className="p-8">
     
          <h1 className="text-2xl font-medium text-accent text-center mb-4">
            {serviceName}
          </h1>


          <p className="text-gray-700 text-base leading-relaxed text-center mb-6">
            {description}
          </p>

        
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-gray-800 font-semibold text-lg">
              💰 Price: <span className="text-secondary">${price}</span>
            </p>

            <div className="flex items-center gap-2 text-yellow-500">
              <FaStar />
              <span className="text-gray-800 font-medium">{rating}</span>
            </div>

            <p className="text-gray-600 text-sm">
              🐾 Slots Available:{" "}
              <span className="font-semibold text-gray-800">{slotsAvailable}</span>
            </p>
          </div>

          
          <div className="text-center text-sm text-gray-500 mb-6">
            <p>
              Provided by <span className="font-medium">{providerName}</span>
            </p>
            <p>📧 {providerEmail}</p>
          </div>

          <div className="flex justify-center">
            <Link to={'/book'}>
            <button className="bg-secondary hover:bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300">
              Book Now
            </button>
            </Link>
          </div>
         
        </div>
        
      </div>
      
    </div>
  );
};

export default ServiceDetails;
