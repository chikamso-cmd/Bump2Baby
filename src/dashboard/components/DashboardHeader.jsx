import React from "react";
import { Bell, LogOut, User } from "lucide-react";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

// ADDED: 'user' prop here to receive data from MainRender
const Header = ({ onNavigate, activeView, user }) => {
  const navigate = useNavigate(); // Initialize navigation

  // Logic to get initials if there is no profile picture
  const initials = user?.name 
    ? user.name.split(" ").map(n => n[0]).join("") 
    : "M";

  // ADDED: Logout Logic
  const handleLogout = () => {
    // 1. Clear session data
    localStorage.removeItem('bump2baby_user');
    localStorage.removeItem('bump2baby_onboarded');
    
    // 2. Redirect to login page
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2 cursor-pointer">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-50" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <button
          onClick={() => onNavigate?.("DASHBOARD")}
          className={`font-semibold ${
            activeView === "DASHBOARD"
              ? "text-[#D9437E]"
              : "text-[#334155] hover:text-[#D9437E]"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate?.("SYMPTOM_INTRO")}
          className={`font-semibold ${
            activeView?.startsWith?.("SYMPTOM")
              ? "text-[#D9437E]"
              : "text-[#334155] hover:text-[#D9437E]"
          }`}
        >
          Symptom checker
        </button>
        <button
          onClick={() => onNavigate?.("HOSPITAL_INTRO")}
          className={`font-semibold ${
            activeView?.startsWith?.("HOSPITAL")
              ? "text-[#D9437E]"
              : "text-[#334155] hover:text-[#D9437E]"
          }`}
        >
          Find Hospital
        </button>
        <button
          onClick={() => onNavigate?.("COMMUNITY_INTRO")}
          className={`font-semibold ${
            activeView?.startsWith?.("COMMUNITY")
              ? "text-[#D9437E]"
              : "text-[#334155] hover:text-[#D9437E]"
          }`}
        >
          Community
        </button>
        <button
          onClick={() => onNavigate?.("HEALTH_TIPS")}
          className={`font-semibold ${
            activeView === "HEALTH_TIPS"
              ? "text-[#D9437E]"
              : "text-[#334155] hover:text-[#D9437E]"
          }`}
        >
          Health Tips
        </button>
      </nav>

      <div className="flex items-center gap-4">
        <Link to="/hospital">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative cursor-pointer">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </Link>

        {/* UPDATED: Profile Avatar Section */}
        <Link to="/profile">
          <button className="p-1 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
            <div className="w-9 h-9 bg-pink-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
              {user?.profilePic ? (
                <img 
                  src={user.profilePic} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <span className="text-white text-xs font-bold uppercase">
                  {initials}
                </span>
              )}
            </div>
          </button>
        </Link>

        {/* UPDATED: Logout Button now has the onClick handler */}
        <button 
          onClick={handleLogout}
          className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;