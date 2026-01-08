
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SymptomFlow from './components/SymptomFlow';


const MainRender = () => {
  const [view, setView] = useState('DASHBOARD');
  const [user] = useState({
    name: 'Mary',
    isPregnancy: true,
    pregnancyWeek: 8,
    babyAgeMonths: 5
  });

  const handleNavigate = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header activeView={view} onNavigate={handleNavigate} />
      
      <main className="pb-12">
        {view === 'DASHBOARD' && (
          <Dashboard user={user} onNavigate={handleNavigate} />
        )}
        
        {view.startsWith('SYMPTOM_') && (
          <SymptomFlow 
            currentStep={view} 
            setCurrentStep={setView} 
            onBack={() => setView('DASHBOARD')} 
          />
        )}
      </main>
      
      {/* Mobile Sticky Footer Placeholder for navigation if needed */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex justify-around items-center z-50">
        <button onClick={() => handleNavigate('DASHBOARD')} className={`text-xs font-bold ${view === 'DASHBOARD' ? 'text-[#D63D6C]' : 'text-gray-400'}`}>Home</button>
        <button onClick={() => handleNavigate('SYMPTOM_INTRO')} className={`text-xs font-bold ${view.startsWith('SYMPTOM') ? 'text-[#D63D6C]' : 'text-gray-400'}`}>Checkup</button>
        <button className="text-xs font-bold text-gray-400">Community</button>
        <button className="text-xs font-bold text-gray-400">Profile</button>
      </footer>
    </div>
  );
};

export default MainRender;
