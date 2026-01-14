import React from "react";
import { Icons } from "../../Constant";

const MapSection= () => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-900">Map View</h2>
        <span className="text-xs text-gray-500 font-medium">8 locations</span>
      </div>

      <div className="relative w-full h-[350px] bg-[#F1F5F9] rounded-xl overflow-hidden border border-gray-100 group">
        {/* Placeholder for Map - using CSS and SVGs to simulate the UI perfectly */}
        <div className="absolute inset-0 opacity-40">
          {/* Stylized grid pattern for a "map" look */}
          <div className="w-full h-full bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        {/* Mock Map Pins - based on screenshot placement */}
        <div className="absolute top-[30%] left-[20%] animate-bounce duration-[2000ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[45%] left-[30%] animate-bounce duration-[2200ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[35%] left-[35%] animate-bounce duration-[1800ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[25%] left-[45%] animate-bounce duration-[2500ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[55%] left-[55%] animate-bounce duration-[2100ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[40%] left-[60%] animate-bounce duration-[1900ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[20%] left-[75%] animate-bounce duration-[2300ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>
        <div className="absolute top-[45%] left-[80%] animate-bounce duration-[2400ms]">
          <Icons.Pin className="w-8 h-8 text-[#D84374] drop-shadow-lg" />
        </div>

        {/* User Location */}
        <div className="absolute top-[48%] left-[48%]">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
          </div>
        </div>

        {/* Map Controls (Optional aesthetic) */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <button className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
            +
          </button>
          <button className="w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50">
            -
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg p-3 shadow-sm text-[10px] font-bold text-gray-600 space-y-1.5">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>Your Location</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#D84374]"></div>
            <span>Hospitals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
