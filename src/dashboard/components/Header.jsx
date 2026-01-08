
import React from 'react';
import { Bell, LogOut, User, Heart } from 'lucide-react';

const Header = ({ onNavigate, activeView }) => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('DASHBOARD')}>
        <div className="w-8 h-8 bg-[#D63D6C] rounded-full flex items-center justify-center">
          <Heart className="text-white w-5 h-5 fill-current" />
        </div>
        <span className="text-xl font-bold text-[#333]">Bump2baby</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <button 
          onClick={() => onNavigate('DASHBOARD')}
          className={`font-semibold ${activeView === 'DASHBOARD' ? 'text-[#333]' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Home
        </button>
        <button 
          onClick={() => onNavigate('SYMPTOM_INTRO')}
          className={`font-semibold ${activeView.startsWith('SYMPTOM') ? 'text-[#333]' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Symptom checker
        </button>
        <button className="font-semibold text-gray-400 hover:text-gray-600">Community</button>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-[#ffffff]" />
          </div>
        </button>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
