
import React from 'react';
import { Card, BackButton, Button } from './UI';


const AccountActions = ({ onBack, onLogout }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <BackButton label="Back to Profile" onClick={onBack} />
      <h1 className="text-4xl font-bold text-[#1E293B] mb-8">Account Actions</h1>

      <div className="flex flex-col gap-6">
        <Card className="p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#1E293B]">Account Management</h2>
            <p className="text-slate-400 text-sm mt-1">Manage your account settings and access</p>
          </div>

          <div className="p-6 border border-slate-100 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#D9437E]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1E293B]">Log Out</h3>
                <p className="text-slate-400 text-sm">Sign out of your Bump2Baby account</p>
              </div>
            </div>
            <button 
              onClick={onLogout}
              className="px-4 py-2 border border-[#D9437E] text-[#D9437E] font-bold rounded-lg hover:bg-pink-50 transition-colors text-sm"
            >
              Log Out
            </button>
          </div>
        </Card>

        {/* Help Banner */}
        <div className="bg-[#E0F2FE] border border-[#BAE6FD] rounded-2xl p-6 flex gap-4">
          <div className="text-[#0369A1]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div>
            <h3 className="text-[#0369A1] font-bold">Need help with your account?</h3>
            <p className="text-[#0C4A6E] text-sm mt-1">
              Visit our <a href="#" className="underline font-semibold">Help Center</a> or <a href="#" className="underline font-semibold">contact support</a> for assistance with account-related questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActions;
