
import React, { useState } from 'react';
import { Card, BackButton, Input, Button } from './UI';
// import { Page, UserProfile } from '../types';


const EditProfile = ({ user, onBack, onSave }) => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email
  });

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <BackButton label="Back to Profile" onClick={onBack} />
      <h1 className="text-4xl font-bold text-[#1E293B] mb-8">Edit Profile</h1>

      <div className="flex flex-col gap-6">
        {/* Personal Info */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-6 h-6 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <h2 className="text-xl font-bold text-[#1E293B]">Personal Information</h2>
          </div>

          <div className="flex flex-col gap-6">
            <Input 
              label="Name" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            <Input 
              label="Email Address" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
        </Card>

        {/* Change Password */}
        <Card className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <h2 className="text-xl font-bold text-[#1E293B]">Change Password</h2>
            </div>
            <button 
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              className="px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm font-bold text-slate-700 transition-colors"
            >
              {isChangingPassword ? 'Cancel' : 'Change Password'}
            </button>
          </div>

          {isChangingPassword && (
            <div className="flex flex-col gap-6 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <Input label="Current Password" type="password" placeholder="Enter current password" />
              <Input label="New Password" type="password" placeholder="Enter new password (min. 8 characters)" />
              <Input label="Confirm New Password" type="password" placeholder="Confirm new password" />
            </div>
          )}
        </Card>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Button variant="primary" className="flex-1" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="secondary" className="flex-1" onClick={onBack}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
