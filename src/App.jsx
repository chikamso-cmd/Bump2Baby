import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login'; 
import Home from './components/home/Home';
import MainRender from './dashboard/MainRender';
import LandingPage from './landingpage/LandingPAge';
import Profile from './profile/Profile';
import CommunityFeed from './dashboard/components/communityFeed';
import CreatePost from './dashboard/components/communityCreatePost';
import HospitalFinder from './hospital/HospitalFinder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing & Auth */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Onboarding Flow */}
        <Route path="/home" element={<Home />} />
        
        {/* Main Dashboard - We keep /app as the primary route */}
        <Route path="/app" element={<MainRender />} />
        <Route path="/dashboard" element={<Navigate to="/app" replace />} />
        
        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        
        {/* Community & Features from Main */}
        <Route path="/community" element={<CommunityFeed />} />
        <Route path="/community/create" element={<CreatePost />} />
        <Route path="/hospital" element={<HospitalFinder />} />

        {/* 404 Redirect */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;