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
  const [view, setView] = useState(searchParams.get('view') || 'DASHBOARD');
  
  // 1. Initial Community Posts State
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Amanda k.",
      title: "Prenatal yoga recommendations",
      content: "Has anyone tried prenatal yoga? Did it help the back pain and stress? Any YouTube channels or apps you recommend?",
      replies: 19,
      likes: 28,
      category: "Health & Wellness",
      date: "2 days ago"
    }
  ]);

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

  // 2. Navigation handler that updates URL
  const handleNavigate = (newView) => {
    setView(newView);
    setSearchParams({ view: newView });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Function to add a new post to the list
  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]); // Put the newest post at the top
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header activeView={view} onNavigate={handleNavigate} />
      
      <main className="pb-12">
        {/* Dashboard View */}
        {view === 'DASHBOARD' && (
          <Dashboard user={user} onNavigate={handleNavigate} />
        )}
        
        {/* Symptom Checker Flow */}
        {view.startsWith('SYMPTOM_') && (
          <SymptomFlow 
            currentStep={view} 
            setCurrentStep={setView} 
            onBack={() => setView('DASHBOARD')} 
          />
        )}

        {/* Community Feed - Receives the posts list */}
        {view === 'COMMUNITY_INTRO' && (
          <CommunityFeed 
            posts={posts} 
            onNavigate={handleNavigate} 
          />
        )}

        {/* Create Post Form - Receives the function to add data */}
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