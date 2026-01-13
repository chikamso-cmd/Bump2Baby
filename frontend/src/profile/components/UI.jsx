
import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, variant = 'primary', onClick, className = '', type = "button" }) => {
  const base = "px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-center flex items-center justify-center";
  const styles = {
    primary: "bg-[#D9437E] text-white hover:bg-[#c23b70]",
    secondary: "bg-white text-[#334155] border border-slate-200 hover:bg-slate-50",
    outline: "border border-[#D9437E] text-[#D9437E] hover:bg-pink-50"
  };
  
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Input = ({ label, placeholder, value, onChange, type = 'text' }) => (
  <div className="flex flex-col gap-2">
    {label && <label className="text-[#334155] font-semibold text-sm">{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#F1F5F9] border-none rounded-xl px-4 py-3 text-[#334155] placeholder-[#94A3B8] focus:ring-2 focus:ring-[#D9437E]/20 outline-none w-full"
    />
  </div>
);

export const Toggle = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
      checked ? 'bg-[#1E293B]' : 'bg-slate-300'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

export const BackButton = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-2 text-[#00AEEF] text-sm font-semibold mb-4 hover:underline transition-all"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    {label}
  </button>
);
