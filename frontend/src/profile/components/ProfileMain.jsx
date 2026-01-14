
import React from 'react';
import { Card, BackButton } from './UI';
// import { Page, UserProfile } from '../types';


const ProfileMain = ({ user, onNavigate }) => {
  const navItems = [
    {
      id: 'edit-profile',
      title: 'Edit Profile',
      description: 'Update your personal information',
      icon: (
        <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      id: 'preferences',
      title: 'Preferences',
      description: 'Manage notifications and settings',
      icon: (
        <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      )
    },
    {
      id: 'account-actions',
      title: 'Account Actions',
      description: 'Logout and account management',
      icon: (
        <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
        </svg>
      )
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold text-[#1E293B] mb-4">Profile</h1>
      <BackButton label="Back to Dashboard" onClick={onNavigate('dashboard')} />

      <div className="flex flex-col gap-6 mt-8">
        {/* User Card */}
        <Card className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D9437E] to-[#A855F7] flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-pink-200">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B]">{user.name}</h2>
              <div className="flex items-center gap-2 text-slate-400 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-sm">{user.email}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Status Card */}
        <Card className="p-8 bg-[#FFF0F6] border-[#FFD6E8]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#D9437E]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium">Current Status</p>
                <div className="flex flex-col">
                  <span className="text-slate-500 font-semibold">{user.status.type}</span>
                  <span className="text-[#1E293B] font-bold text-lg">{user.status.stage}</span>
                </div>
              </div>
            </div>
            {user.status.isActive && (
              <span className="bg-[#D9437E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Active</span>
            )}
          </div>
        </Card>

        {/* Nav Items */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:border-[#D9437E]/30 transition-all">
              <button 
                onClick={() => onNavigate(item.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-pink-50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#D9437E] transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-slate-300 group-hover:text-[#D9437E] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
