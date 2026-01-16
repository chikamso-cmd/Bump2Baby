import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import ProfileMain from "./components/ProfileMain";
import EditProfile from "./components/EditProfile";
import Preferences from "./components/Preference";
import AccountActions from "./components/AccountsAction";
import Toast from "./components/Toast";
import BottomNav from "../components/BottomNav";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("profile");
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  // Initialize state directly from localStorage to prevent "Sarah Martinez" from appearing
  const [user, setUser] = useState(() => {
    const savedData = localStorage.getItem('bump2baby_user');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        return {
          ...parsed,
          name: parsed.name || "User",
          email: parsed.email || "", // Uses the key we fixed in Steps.jsx
          profilePic: parsed.profilePic || null,
          status: parsed.status || {
            type: parsed.role === 'pregnant' ? "Pregnant" : "Parent",
            stage: parsed.pregnancyWeek ? `Week ${parsed.pregnancyWeek}` : "Active"
          }
        };
      } catch (e) {
        console.error("Error parsing user data", e);
      }
    }
    return { name: "", email: "", profilePic: null, status: { type: "", stage: "" } };
  });

  // Keep state in sync with local storage
  useEffect(() => {
    const syncUser = () => {
      const savedData = localStorage.getItem('bump2baby_user');
      if (savedData) {
        setUser(JSON.parse(savedData));
      }
    };
    window.addEventListener('storage', syncUser);
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  const [notifications, setNotifications] = useState({
    healthTips: true,
    communityUpdates: false,
    reminders: true,
  });

  const handleNavigate = useCallback((page) => {
    if (page === "dashboard") {
      navigate("/app");
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const handleImageUpload = useCallback((imageData) => {
    setUser(prev => {
      const updated = { ...prev, profilePic: imageData };
      localStorage.setItem('bump2baby_user', JSON.stringify(updated));
      return updated;
    });
    setShowToast(true);
  }, []);

  const handleSaveProfile = useCallback((newData) => {
    setUser(prev => {
      const updated = { ...prev, ...newData };
      localStorage.setItem('bump2baby_user', JSON.stringify(updated));
      return updated;
    });
    setCurrentPage("profile");
    setShowToast(true);
  }, []);

  const handleUpdatePreference = useCallback((key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // UPDATED: Logout logic to redirect to Login page
  const handleLogout = () => {
    // Clear all user session data
    localStorage.removeItem('bump2baby_user');
    localStorage.removeItem('bump2baby_onboarded');
    
    // Redirect to the /login route as defined in your App.jsx
    navigate('/login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case "profile":
        return <ProfileMain user={user} onNavigate={handleNavigate} onImageUpload={handleImageUpload} />;
      case "edit-profile":
        return <EditProfile user={user} onBack={() => setCurrentPage("profile")} onSave={handleSaveProfile} onImageUpload={handleImageUpload} />;
      case "preferences":
        return <Preferences settings={notifications} onBack={() => setCurrentPage("profile")} onUpdate={handleUpdatePreference} />;
      case "account-actions":
        return <AccountActions onBack={() => setCurrentPage("profile")} onLogout={handleLogout} />;
      default:
        return <ProfileMain user={user} onNavigate={handleNavigate} onImageUpload={handleImageUpload} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] pb-24">
      <Header user={user} /> 
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        {renderPage()}
      </main>

      {showToast && (
        <Toast
          message="Update Successful!"
          description="Your profile changes have been saved."
          onClose={() => setShowToast(false)}
        />
      )}
      <BottomNav />
    </div>
  );
};

export default Profile;