import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "./components/DashboardHeader"; // Ensure this matches the file we just updated
import Dashboard from "./components/Dashboard";
import SymptomFlow from "./components/SymptomFlow";
import BottomNav from "../components/BottomNav";
import CommunityFeed from "./components/communityFeed";
import CreatePost from "./components/communityCreatePost";
import HospitalFinder from "../hospital/HospitalFinder";
import HealthTips from "./components/HealthTips";

const MainRender = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [view, setView] = useState(searchParams.get("view") || "DASHBOARD");

  // 1. PERSISTENT USER STATE: Now includes profilePic
  // In MainRender.jsx, update your user state initialization:
  // Inside MainRender.jsx
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("bump2baby_user");
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error("Error parsing saved user:", e);
      }
    }
    // Fallback for new users before they finish onboarding
    return {
      name: "",
      email: "",
      isPregnancy: true,
      pregnancyWeek: 1,
      babyAgeMonths: 0,
      profilePic: null,
    };
  });

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("bump2baby_posts");
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
        userImg: null, // Placeholder for future use
        title: "Prenatal yoga recommendations",
        content:
          "Has anyone tried prenatal yoga? Did it help the back pain and stress?",
        replies: 19,
        likes: 28,
        category: "Health & Wellness",
        date: "2 days ago",
        isHelpful: false,
      },
    ];
  });

  // Sync state back to localStorage
  useEffect(() => {
    localStorage.setItem("bump2baby_posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("bump2baby_user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const viewParam = searchParams.get("view");
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
      // Use the actual logged-in user's name!
      user: postData.isAnonymous ? "Anonymous Member" : user.name,
      userImg: postData.isAnonymous ? null : user.profilePic,
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

  const isKnownView =
    [
      "DASHBOARD",
      "COMMUNITY_INTRO",
      "COMMUNITY_CREATE",
      "HOSPITAL_INTRO",
      "HEALTH_TIPS",
    ].includes(view) || view.startsWith("SYMPTOM_");

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* CRITICAL UPDATE: Pass the 'user' object to the Header 
          so it can show the profile picture in the top right.
      */}
      <Header activeView={view} onNavigate={handleNavigate} user={user} />

      <main className="pb-12">
        {(view === "DASHBOARD" || !isKnownView) && (
          <Dashboard user={user} onNavigate={handleNavigate} />
        )}

        {view.startsWith("SYMPTOM_") && (
          <SymptomFlow
            currentStep={view}
            setCurrentStep={handleNavigate}
            onBack={() => handleNavigate("DASHBOARD")}
          />
        )}

        {view === "COMMUNITY_INTRO" && (
          <CommunityFeed posts={posts} onNavigate={handleNavigate} />
        )}

        {view === "COMMUNITY_CREATE" && (
          <CreatePost onNavigate={handleNavigate} onAddPost={addNewPost} />
        )}

        {view === "HOSPITAL_INTRO" && <HospitalFinder />}

        {view === "HEALTH_TIPS" && (
          <HealthTips onBack={() => handleNavigate("DASHBOARD")} />
        )}
      </main>

      <BottomNav activeView={view} onNavigate={handleNavigate} />
    </div>
  );
};

export default MainRender;
