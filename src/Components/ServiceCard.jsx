import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md text-center p-8 border border-primary">
      <h2 className="text-2xl font-semibold text-accent mb-4">
        {service.serviceName}
      </h2>

      <img
        src={service.image}
        alt={service.serviceName}
        className="w-60 rounded-2xl h-56 object-cover mx-auto mb-3"
      />

      <p className="text-gray-600 font-medium uppercase tracking-wide mb-2">
        {service.category} SERVICE
      </p>

      <p className="text-gray-600 text-sm mb-4">
        Slots Available:{" "}
        <span className="font-semibold">{service.slotsAvailable}</span>
      </p>

      <Link to={"/services"}>
        <button className="bg-secondary hover:bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300">
              View Details
            </button>
      </Link>

      <p className="text-sm text-gray-400 mt-4">
        Provided by {service.providerName}
      </p>
    </div>
  );
};

export default ServiceCard;
