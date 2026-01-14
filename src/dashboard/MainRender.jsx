import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './components/DashboardHeader';
import Dashboard from './components/Dashboard';
import SymptomFlow from './components/SymptomFlow';
import BottomNav from '../components/BottomNav';
import CommunityFeed from './components/communityFeed';
import CreatePost from './components/communityCreatePost';

const MainRender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // Initialize view from URL or default to DASHBOARD
  const [view, setView] = useState(searchParams.get('view') || 'DASHBOARD');
  
  const [user] = useState({
    name: 'Mary',
    isPregnancy: true,
    pregnancyWeek: 8,
    babyAgeMonths: 5
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Amanda k.",
      title: "Prenatal yoga recommendations",
      content: "Has anyone tried prenatal yoga? Did it help the back pain and stress? Any YouTube channels or apps you recommend?",
      replies: 19,
      likes: 28,
      category: "Health & Wellness",
      date: "2 days ago",
      isHelpful: false
    }
  ]);

  // Sync state with URL changes (Crucial for Landing Page navigation)
  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam) {
      setView(viewParam);
    }
  }, [searchParams]);

  const handleNavigate = (newView) => {
    setView(newView);
    setSearchParams({ view: newView });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addNewPost = (postData) => {
    const newEntry = {
      id: Date.now(),
      user: postData.isAnonymous ? "Anonymous Member" : (user?.name || "Mary"),
      title: postData.title,
      category: postData.category,
      content: postData.content,
      replies: 0,
      likes: 0,
      date: "Just now",
      isHelpful: false
    };

    setPosts((prevPosts) => [newEntry, ...prevPosts]);
    
    setTimeout(() => {
      handleNavigate('COMMUNITY_INTRO');
    }, 2000);
  };

  // Helper to determine if we are in a known view
  const isKnownView = ['DASHBOARD', 'COMMUNITY_INTRO', 'COMMUNITY_CREATE'].includes(view) || view.startsWith('SYMPTOM_');

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header activeView={view} onNavigate={handleNavigate} />
      
      <main className="pb-12">
        {/* 1. Dashboard View (Default) */}
        {(view === 'DASHBOARD' || !isKnownView) && (
          <Dashboard user={user} onNavigate={handleNavigate} />
        )}
        
        {/* 2. Symptom Checker Flow */}
        {view.startsWith('SYMPTOM_') && (
          <SymptomFlow 
            currentStep={view} 
            setCurrentStep={setView} 
            onBack={() => setView('DASHBOARD')} 
          />
        )}

        {/* 3. Community Feed */}
        {view === 'COMMUNITY_INTRO' && (
          <CommunityFeed 
            posts={posts} 
            onNavigate={handleNavigate} 
          />
        )}

        {/* 4. Create Post Form */}
        {view === 'COMMUNITY_CREATE' && (
          <CreatePost 
            onNavigate={handleNavigate} 
            onAddPost={addNewPost} 
          />
        )}
      </main>
      
      <BottomNav activeView={view} onNavigate={handleNavigate} />
    </div>
  );
};

export default MainRender;