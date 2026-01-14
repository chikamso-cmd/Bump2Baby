import React from "react";
import { Icons } from "../../Constant";

const HospitalCard = ({ hospital, onViewDetails }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-900 group-hover:text-[#D84374] transition-colors">
          {hospital.name}
        </h3>
        <span className="flex items-center text-xs font-medium text-[#3B82F6]">
          <Icons.ArrowUpRight />
          <span className="ml-1">{hospital.distance}</span>
        </span>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <div className="flex items-center">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="ml-1 text-xs font-bold text-gray-900">
            {hospital.rating}
          </span>
        </div>
        <span className="text-gray-300">•</span>
        <span className="bg-purple-100 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
          {hospital.type}
        </span>
      </div>

      <div className="flex items-start space-x-2 text-xs text-gray-500 mb-6 leading-relaxed">
        <Icons.Location />
        <span>{hospital.address}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {hospital.categories.slice(0, 3).map((cat, idx) => (
          <span
            key={idx}
            className="text-[#3B82F6] text-[11px] font-medium border-b border-transparent hover:border-[#3B82F6] cursor-default"
          >
            {cat}
          </span>
        ))}
        {hospital.categories.length > 3 && (
          <span className="text-gray-400 text-[11px]">
            +{hospital.categories.length - 3} more
          </span>
        )}
      </div>

      <button
        onClick={() => onViewDetails(hospital)}
        className="w-full py-3 bg-[#D84374] text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity active:scale-[0.98] transform"
      >
        View Details
      </button>
    </div>
  );
};

export default HospitalCard;
