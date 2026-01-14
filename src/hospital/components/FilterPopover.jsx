import React from "react";

const FilterPopover = ({ filters, onChange, onReset, onClose }) => {
  return (
    <div className="absolute right-0 top-12 z-50 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-6 animate-in fade-in zoom-in duration-200">
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Max Distance: {filters.maxDistance} km
            </label>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={filters.maxDistance}
            onChange={(e) =>
              onChange({ ...filters, maxDistance: parseInt(e.target.value) })
            }
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D84374]"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Min Rating: {filters.minRating}
            </label>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={filters.minRating}
            onChange={(e) =>
              onChange({ ...filters, minRating: parseFloat(e.target.value) })
            }
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D84374]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
            Hospital Type
          </label>
          <select
            value={filters.hospitalType}
            onChange={(e) =>
              onChange({ ...filters, hospitalType: e.target.value })
            }
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D84374] focus:ring-opacity-20"
          >
            <option value="All">All</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </div>

        <div className="pt-2">
          <button
            onClick={onReset}
            className="w-full text-center text-xs font-semibold text-gray-400 hover:text-[#D84374] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopover;
