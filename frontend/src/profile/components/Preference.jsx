
import React from 'react';
import { Card, BackButton, Toggle } from './UI';


const Preferences = ({ settings, onBack, onUpdate }) => {
  const preferenceItems = [
    {
      id: 'healthTips',
      title: 'Health Tips',
      description: 'Receive weekly health tips and advice for your pregnancy journey',
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      )
    },
    {
      id: 'communityUpdates',
      title: 'Community Updates',
      description: 'Get notified about new posts and discussions in the community',
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      id: 'reminders',
      title: 'Reminders',
      description: 'Receive reminders about important appointments, medications, and milestones',
      icon: (
        <svg className="w-6 h-6 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <BackButton label="Back to Profile" onClick={onBack} />
      <h1 className="text-4xl font-bold text-[#1E293B] mb-8">Preferences</h1>

      <Card className="p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#1E293B]">Notification Settings</h2>
          <p className="text-slate-400 text-sm mt-1">Manage how you receive updates and notifications</p>
        </div>

        <div className="flex flex-col gap-8">
          {preferenceItems.map((item) => (
            <div key={item.id} className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B] leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm mt-1 max-w-md">{item.description}</p>
                </div>
              </div>
              <Toggle checked={settings[item.id]} onChange={() => onUpdate(item.id)} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Preferences;
