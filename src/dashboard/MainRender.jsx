import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./components/DashboardHeader";
import Dashboard from "./components/Dashboard";
import SymptomFlow from "./components/SymptomFlow";
import BottomNav from "../components/BottomNav";
import CommunityFeed from "./components/communityFeed";
import CreatePost from "./components/communityCreatePost";
import HospitalFinder from "../hospital/HospitalFinder";
import HealthTips from "./components/HealthTips";

const MainRender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState(searchParams.get('view') || 'DASHBOARD');
  
  // 1. PERSISTENT USER STATE: Initialize from localStorage (Your branch logic)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('bump2baby_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error("Error parsing saved user:", e);
      }
    }
    // Fallback default
    return {
      name: 'Mary',
      isPregnancy: true,
      pregnancyWeek: 8,
      babyAgeMonths: 5
    };
  });

  // 2. PERSISTENT POSTS STATE: Initialize from localStorage
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

  // Sync state back to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bump2baby_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('bump2baby_user', JSON.stringify(user));
  }, [user]);

  // Sync view state with URL parameters
  useEffect(() => {
    const viewParam = searchParams.get('view');
    if (viewParam && viewParam !== view) {
      setView(viewParam);
    }
  }, [searchParams, view]);

  const handleNavigate = (newView) => {
    setView(newView);
    setSearchParams({ view: newView });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      isHelpful: false,
    };

    setPosts((prevPosts) => [newEntry, ...prevPosts]);

    setTimeout(() => {
      handleNavigate("COMMUNITY_INTRO");
    }, 2000);
  };

  const isKnownView = [
    'DASHBOARD', 
    'COMMUNITY_INTRO', 
    'COMMUNITY_CREATE', 
    'HOSPITAL_INTRO', 
    'HEALTH_TIPS'
  ].includes(view) || view.startsWith('SYMPTOM_');

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header activeView={view} onNavigate={handleNavigate} />

      <main className="pb-12">
        {/* Dashboard View (Default) */}
        {(view === 'DASHBOARD' || !isKnownView) && (
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

        {/* Community Feed */}
        {view === 'COMMUNITY_INTRO' && (
          <CommunityFeed 
            posts={posts} 
            onNavigate={handleNavigate} 
          />
        )}

        {/* Create Post Form */}
        {view === 'COMMUNITY_CREATE' && (
          <CreatePost 
            onNavigate={handleNavigate} 
            onAddPost={addNewPost} 
          />
        )}

        {/* Hospital Finder (New Feature from Main) */}
        {view === "HOSPITAL_INTRO" && <HospitalFinder />}

        {/* Health Tips (New Feature from Main) */}
        {view === "HEALTH_TIPS" && (
          <HealthTips onBack={() => setView("DASHBOARD")} />
        )}
      </main>

      <BottomNav activeView={view} onNavigate={handleNavigate} />
    </div>
  );
};

export default MainRender;