import React from 'react';
import { Home, Stethoscope, Users, User, MapPin } from 'lucide-react'; // Changed HeartPulse to MapPin to match Dashboard
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = ({ activeView, onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (view, path) => {
    // If the user is going to the profile page
    if (path === '/profile') {
      navigate('/profile');
      return;
    }

    // If already on /app, just change the internal view
    if (location.pathname === '/app') {
      onNavigate(view || 'DASHBOARD');
      // Update URL search param without full reload
      const url = new URL(window.location);
      url.searchParams.set('view', view || 'DASHBOARD');
      window.history.pushState({}, '', url);
    } else {
      // If on a different page (like Profile), navigate to /app with the view param
      navigate(`/app?view=${view || 'DASHBOARD'}`);
    }
  };

  const isActive = (view, path) => {
    if (location.pathname !== path) return false;
    if (view === 'DASHBOARD' && (activeView === 'DASHBOARD' || !activeView)) return true;
    return activeView?.startsWith(view);
  };

  const navItems = [
    { id: 'DASHBOARD', label: 'Home', icon: Home, path: '/app' },
    { id: 'SYMPTOM', label: 'Checkup', icon: Stethoscope, path: '/app' },
    { id: 'HOSPITAL', label: 'Hospitals', icon: MapPin, path: '/app' },
    { id: 'COMMUNITY', label: 'Community', icon: Users, path: '/app' },
    { id: 'PROFILE', label: 'Profile', icon: User, path: '/profile' },
  ];

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 px-2 py-3 flex justify-around items-center z-[100] safe-area-inset-bottom">
      {navItems.map((item) => {
        // Determine active state
        const active = item.path === '/profile' 
          ? location.pathname === '/profile' 
          : isActive(item.id, '/app');

        return (
          <button
            key={item.id}
            onClick={() => {
              const viewSuffix = item.id === 'DASHBOARD' ? 'DASHBOARD' : `${item.id}_INTRO`;
              handleNavClick(viewSuffix, item.path);
            }}
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