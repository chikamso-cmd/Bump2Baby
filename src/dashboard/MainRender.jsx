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
  
  // 1. UPDATED: Initialize user from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('bump2baby_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error("Error parsing saved user:", e);
      }
    }
    // Fallback default if no one has signed up yet
    return {
      name: 'Mary',
      isPregnancy: true,
      pregnancyWeek: 8,
      babyAgeMonths: 5
    };
  });

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('bump2baby_posts');
    if (savedPosts) {
      try {
        return JSON.parse(savedPosts);
      } catch (e) {
        console.error("Error parsing saved posts:", e);
      }
    }
    return [
      {
        id: 1,
        user: "Amanda k.",
        title: "Prenatal yoga recommendations",
        content: "Has anyone tried prenatal yoga? Did it help the back pain and stress?",
        replies: 19,
        likes: 28,
        category: "Health & Wellness",
        date: "2 days ago",
        isHelpful: false
      }
    ];
  });

  // 2. Sync User and Posts to localStorage
  useEffect(() => {
    localStorage.setItem('bump2baby_posts', JSON.stringify(posts));
  }, [posts]);

  // Added effect to keep user data in sync if updated
  useEffect(() => {
    localStorage.setItem('bump2baby_user', JSON.stringify(user));
  }, [user]);

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
      // Use the dynamic user name here!
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

  const isKnownView = ['DASHBOARD', 'COMMUNITY_INTRO', 'COMMUNITY_CREATE'].includes(view) || view.startsWith('SYMPTOM_');

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header activeView={view} onNavigate={handleNavigate} />
      
      <main className="pb-12">
        {(view === 'DASHBOARD' || !isKnownView) && (
          <Dashboard user={user} onNavigate={handleNavigate} />
        )}
        
        {view.startsWith('SYMPTOM_') && (
          <SymptomFlow 
            currentStep={view} 
            setCurrentStep={setView} 
            onBack={() => setView('DASHBOARD')} 
          />
        )}

        {view === 'COMMUNITY_INTRO' && (
          <CommunityFeed 
            posts={posts} 
            onNavigate={handleNavigate} 
          />
        )}

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