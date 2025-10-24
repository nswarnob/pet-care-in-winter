import React from "react";
import { FaStar } from "react-icons/fa";

const ExpertCard = ({ expert }) => {
  const { name, expertise, experience, rating } = expert;

  return (
    <div className=" rounded-xl p-4 bg-white hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-accent">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{expertise}</p>
      <p className="text-sm text-gray-500 mt-1">Experience: {experience}</p>

      <div className="flex items-center justify-center mt-2">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="text-sm font-medium text-gray-700">{rating}</span>
      </div>
    </div>
  );
};

export default ExpertCard;
