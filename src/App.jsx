import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// 1. IMPORT LOGIN COMPONENT HERE
import Login from './components/Login'; 
import Home from './components/home/Home';
import MainRender from './dashboard/MainRender';
import LandingPage from './landingpage/LandingPAge';
import Profile from './profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Onboarding Flow */}
        <Route path="/home" element={<Home />} />
        
        {/* Main Dashboard */}
        <Route path="/app" element={<MainRender />} />
        
        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        
        {/* Redirects */}
        <Route path="/dashboard" element={<Navigate to="/app" replace />} />

        {/* 404 Redirect */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;