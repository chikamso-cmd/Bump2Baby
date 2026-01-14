import React from 'react';
import { Home, Stethoscope, Users, User, HeartPulse } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = ({ activeView, onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (view, path) => {
    if (location.pathname !== path) {
      navigate(`${path}${view ? `?view=${view}` : ''}`);
    } else if (onNavigate) {
      onNavigate(view || 'DASHBOARD');
    }
  };

  const isActive = (view, path) => {
    if (location.pathname !== path) return false;
    if (!view && !activeView) return true;
    if (view === 'DASHBOARD' && activeView === 'DASHBOARD') return true;
    return activeView?.startsWith(view);
  };

  const navItems = [
    { id: 'DASHBOARD', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'SYMPTOM', label: 'Checkup', icon: Stethoscope, path: '/dashboard' },
    { id: 'HOSPITAL', label: 'Hospitals', icon: HeartPulse, path: '/dashboard' },
    { id: 'COMMUNITY', label: 'Community', icon: Users, path: '/dashboard' },
    { id: 'PROFILE', label: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 px-2 py-3 flex justify-around items-center z-100 safe-area-inset-bottom">
      {navItems.map((item) => {
        const active = isActive(item.id === 'DASHBOARD' ? '' : item.id, item.path);
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id === 'DASHBOARD' ? '' : `${item.id}_INTRO`, item.path)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              active ? 'text-[#D9437E] scale-110' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <item.icon className={`w-5 h-5 ${active ? 'fill-[#D9437E]/10' : ''}`} />
            <span className={`text-[10px] font-bold ${active ? 'opacity-100' : 'opacity-80'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </footer>
  );
};

export default BottomNav;
