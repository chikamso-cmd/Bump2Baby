
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ProfileMain from './components/ProfileMain';
import EditProfile from './components/EditProfile';
import Preferences from './components/Preference';
import AccountActions from './components/AccountsAction';
import Toast from './components/Toast';
import BottomNav from '../components/BottomNav';
// import { Page } from '../types';

const Profile = () => {
  const [currentPage, setCurrentPage] = useState('profile');
  const [showToast, setShowToast] = useState(false);
  const [user, setUser] = useState({
    name: 'Sarah Martinez',
    email: 'sarah.martinez@email.com',
    status: {
      type: 'Pregnant',
      stage: 'Trimester 2, Week 18',
      isActive: true
    }
  });

  const [notifications, setNotifications] = useState({
    healthTips: true,
    communityUpdates: false,
    reminders: true
  });

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSaveProfile = useCallback((newData) => {
    setUser(prev => ({ ...prev, ...newData }));
    setCurrentPage('profile');
    setShowToast(true);
  }, []);

  const handleUpdatePreference = useCallback((key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }, []);

  const handleLogout = () => {
    alert("Logging out...");
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <ProfileMain user={user} onNavigate={handleNavigate} />;
      case 'edit-profile':
        return (
          <EditProfile 
            user={user} 
            onBack={() => setCurrentPage('profile')} 
            onSave={handleSaveProfile} 
          />
        );
      case 'preferences':
        return (
          <Preferences 
            settings={notifications} 
            onBack={() => setCurrentPage('profile')} 
            onUpdate={handleUpdatePreference} 
          />
        );
      case 'account-actions':
        return (
          <AccountActions 
            onBack={() => setCurrentPage('profile')} 
            onLogout={handleLogout} 
          />
        );
      default:
        return <ProfileMain user={user} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {renderPage()}
      </main>

      {showToast && (
        <Toast 
          message="Profile updated successfully!" 
          description="Your changes have been saved." 
          onClose={() => setShowToast(false)} 
        />
      )}

      <BottomNav />
    </div>
  );
};

export default Profile;
