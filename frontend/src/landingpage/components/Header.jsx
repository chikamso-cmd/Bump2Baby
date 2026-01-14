import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const onboarded = localStorage.getItem('bump2baby_onboarded');
    navigate(onboarded === 'true' ? '/dashboard' : '/home');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-50" />
            {/* <span className="text-2xl font-bold tracking-tight text-[#e83e8c]">Bump2baby</span> */}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#e83e8c] font-medium transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 group-hover:text-[#e83e8c] font-medium transition-colors">
                Features <ChevronDown size={16} />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-[#e83e8c] font-medium transition-colors">About us</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleGetStarted}
              className="bg-[#e83e8c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d63384] transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Home</a>
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">Features</a>
            <a href="#" className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50">About us</a>
            <div className="pt-4">
              <button 
                onClick={handleGetStarted}
                className="w-full bg-[#e83e8c] text-white px-6 py-3 rounded-xl font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
