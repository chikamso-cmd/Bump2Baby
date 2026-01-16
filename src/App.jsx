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
import AboutUs from './landingpage/AboutUs';
import ContactUs from './landingpage/components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing & Static Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* Auth & Onboarding */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
        {/* Main Application */}
        <Route path="/app" element={<MainRender />} />
        <Route path="/dashboard" element={<Navigate to="/app" replace />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* Features */}
        <Route path="/community" element={<CommunityFeed />} />
        <Route path="/community/create" element={<CreatePost />} />
        <Route path="/hospital" element={<HospitalFinder />} />

        {/* 404 Redirect */}
        <Route path="*" element={<LandingPage />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;