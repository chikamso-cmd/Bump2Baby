import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './components/DashboardHeader';
import Dashboard from './components/Dashboard';
import SymptomFlow from './components/SymptomFlow';
import BottomNav from '../components/BottomNav';


const MainRender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState(searchParams.get('view') || 'DASHBOARD');
  const [user] = useState({
    name: 'Mary',
    isPregnancy: true,
    pregnancyWeek: 8,
    babyAgeMonths: 5
  });

  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam && viewParam !== view) {
      setView(viewParam);
    }
  }, [searchParams]);

  const handleNavigate = (newView) => {
    setView(newView);
    setSearchParams({ view: newView });
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
      
      <BottomNav activeView={view} onNavigate={handleNavigate} />
    </div>
  );
};

export default MainRender;
