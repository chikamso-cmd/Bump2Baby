import React from "react";
import { Card, BackButton } from "./UI";
import { Camera, Heart, Mail } from "lucide-react";

const ProfileMain = ({ user, onNavigate, onImageUpload }) => {
  // Handler for image selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result); // Send Base64 string back to Profile.jsx
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper to calculate trimester more accurately
  const getTrimester = (week) => {
    if (week <= 12) return 1;
    if (week <= 26) return 2;
    return 3;
  };

  const navItems = [
    {
      id: "edit-profile",
      title: "Edit Profile",
      description: "Update your personal information",
      icon: (
        <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: "preferences",
      title: "Preferences",
      description: "Manage notifications and settings",
      icon: (
        <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      id: "account-actions",
      title: "Account Actions",
      description: "Logout and account management",
      icon: (
        <svg className="w-6 h-6 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold text-[#1E293B] mb-4">Profile</h1>
      <BackButton
        label="Back to Dashboard"
        onClick={() => onNavigate("dashboard")}
      />

      <div className="flex flex-col gap-6 mt-8">
        {/* User Card - Dynamic Name & Email */}
        <Card className="p-8">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D9437E] to-[#A855F7] flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-pink-200 overflow-hidden border-2 border-white">
                {user.profilePic ? (
                  <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  user.name 
                    ? user.name.trim().split(/\s+/).map((n) => n[0]).join("").toUpperCase().slice(0, 2) 
                    : "U"
                )}
              </div>
              
              <label className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md cursor-pointer hover:bg-slate-50 transition-colors border border-slate-100">
                <Camera size={14} className="text-[#D9437E]" />
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
              </label>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1E293B] capitalize">
                {user.name || "Guest User"}
              </h2>
              <div className="flex items-center gap-2 text-slate-400 mt-1">
                <Mail size={16} className="shrink-0" />
                <span className="text-sm truncate max-w-[200px]">
                  {user.email || "No email linked"}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Status Card - Fully Dynamic Status */}
        <Card className="p-8 bg-[#FFF0F6] border-[#FFD6E8]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#D9437E]">
                <Heart size={24} fill={user.isPregnancy ? "#D9437E" : "none"} />
              </div>
              <div>
                <p className="text-slate-400 text-sm font-medium">Current Status</p>
                <div className="flex flex-col">
                  <span className="text-slate-500 font-semibold">
                    {user.isPregnancy ? "Pregnant" : "Mother"}
                  </span>
                  <span className="text-[#1E293B] font-bold text-lg">
                    {user.isPregnancy 
                      ? `Trimester ${getTrimester(user.pregnancyWeek)}, Week ${user.pregnancyWeek}`
                      : `Baby is ${user.babyAgeMonths || 0} months old`
                    }
                  </span>
                </div>
              </div>
            </div>
            <span className="bg-[#D9437E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Active
            </span>
          </div>
        </Card>

        {/* Nav Items */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:border-[#D9437E]/30 transition-all">
              <button onClick={() => onNavigate(item.id)} className="w-full flex items-center justify-between p-6 text-left">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-pink-50 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#D9437E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <svg className="w-6 h-6 text-slate-300 group-hover:text-[#D9437E] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
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