import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, BackButton } from './UI';

const AccountActions = ({ onBack }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  // Updated Logout Logic to clear all specific keys
  const handleLogout = () => {
    localStorage.removeItem('bump2baby_onboarded');
    localStorage.removeItem('bump2baby_user');
    // Using replace: true prevents the user from clicking "back" into the app
    navigate('/login', { replace: true });
  };

  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Logout Confirmation Modal Overlay */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[40px] p-10 max-w-sm w-full shadow-2xl transform animate-in zoom-in-95 duration-300">
            <div className="text-[#D9437E] mb-6 flex justify-center">
              <div className="bg-pink-50 p-5 rounded-full">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1E293B] text-center mb-2">Log Out?</h3>
            <p className="text-slate-500 text-center text-sm mb-10 leading-relaxed px-2">
              Are you sure you want to log out of your Bump2baby account? You'll need your username to log back in.
            </p>
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={handleLogout}
                className="w-full py-4 bg-[#D9437E] text-white font-bold rounded-full hover:bg-[#c1325d] shadow-lg shadow-pink-100 transition-all active:scale-95"
              >
                Yes, Log Out
              </button>
              <button 
                onClick={() => setShowConfirm(false)}
                className="w-full py-4 bg-slate-50 text-slate-500 font-bold rounded-full hover:bg-slate-100 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pass onBack carefully to ensure it's only called on click */}
      <BackButton label="Back to Profile" onClick={() => onBack()} />
      
      <h1 className="text-4xl font-bold text-[#1E293B] mt-6 mb-8">Account Actions</h1>

      <div className="flex flex-col gap-6">
        <Card className="p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#1E293B]">Account Management</h2>
            <p className="text-slate-400 text-sm mt-1">Manage your account settings and access</p>
          </div>

          <div className="p-6 border border-slate-100 rounded-[24px] flex items-center justify-between bg-white hover:border-pink-100 transition-all">
            <div className="flex items-center gap-4">
              <div className="text-[#D9437E] bg-pink-50 p-3 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1E293B]">Log Out</h3>
                <p className="text-slate-400 text-xs">Sign out of your session</p>
              </div>
            </div>
            <button 
              onClick={() => setShowConfirm(true)}
              className="px-6 py-2.5 border-2 border-[#D9437E] text-[#D9437E] font-bold rounded-xl hover:bg-[#D9437E] hover:text-white transition-all text-sm"
            >
              Log Out
            </button>
          </div>
        </Card>

        <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-[24px] p-6 flex gap-4 items-center">
          <div className="text-[#0369A1] bg-white p-2 rounded-full shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[#0369A1] font-bold text-sm">Need help with your account?</h3>
            <p className="text-[#0C4A6E] text-xs mt-0.5">
              Visit our <a href="#" className="underline font-bold">Help Center</a> or <a href="#" className="underline font-bold">contact support</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;