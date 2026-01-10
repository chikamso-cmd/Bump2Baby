
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-100 py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <img src={logo} className="w-50" alt="Logo" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/dashboard" className="text-[#334155] font-semibold hover:text-[#D9437E]">Home</Link>
          <Link to="/dashboard?view=SYMPTOM_INTRO" className="text-[#334155] font-semibold hover:text-[#D9437E]">Symptom checker</Link>
          <Link to="/dashboard?view=HOSPITAL_INTRO" className="text-[#334155] font-semibold hover:text-[#D9437E]">Find Hospital</Link>
          <Link to="/dashboard?view=COMMUNITY_INTRO" className="text-[#334155] font-semibold hover:text-[#D9437E]">Community</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-colors relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#D9437E] rounded-full"></span>
          </button>
          <div className="w-9 h-9 bg-[#D9437E] rounded-full flex items-center justify-center text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
