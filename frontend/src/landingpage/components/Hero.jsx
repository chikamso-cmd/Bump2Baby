
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/hero.png'
import logo from '../../assets/Logo.png'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0 w-full bg">
       
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-3xl bg-white/30 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-2xl border border-[#e83e8c]/50 relative overflow-hidden">
          {/* Logo in Card */}
          <div className="flex items-center gap-2 mb-6">
          <img src={logo} alt="Logo" className="w-50" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your trusted companion through <span className="text-[#007bff]">pregnancy and beyond</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 font-medium">
            A maternal health support platform
          </p>

          <button 
            onClick={() => {
              const onboarded = localStorage.getItem('bump2baby_onboarded');
              navigate(onboarded === 'true' ? '/dashboard' : '/home');
            }}
            className="flex items-center gap-2 bg-[#e83e8c] text-white px-8 py-4 rounded text-lg font-bold hover:bg-[#d63384] transition-all transform hover:translate-x-1  justify-center"
          >
            Get Started <ArrowRight size={20} />
          </button>

          {/* Decorative floating dots */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#e83e8c]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#007bff]/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Decorative dots connecting sections */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex gap-4">
          <div className="w-3 h-3 bg-[#e83e8c] rounded-full"></div>
          <div className="w-32 h-[1px] bg-[#e83e8c] self-center"></div>
          <div className="w-3 h-3 bg-[#e83e8c] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
