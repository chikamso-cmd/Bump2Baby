import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../landingpage/components/Header';
import Hero from '../landingpage/components/Hero';
import Features from '../landingpage/components/Features';
import Testimonials from '../landingpage/components/Testimonial';
import CTA from '../landingpage/components/CTA';
import Footer from '../landingpage/components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();

  // Unified navigation handler for the landing page
  const handleNavigate = (viewTarget) => {
    // If a specific view is passed (like COMMUNITY_INTRO), 
    // it goes to /app with that query parameter
    if (viewTarget) {
      navigate(`/app?view=${viewTarget}`);
    } else {
      // Default fallback to dashboard
      navigate('/app');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Pass navigation to Header (Login/Join buttons) */}
      <Header onNavigate={() => handleNavigate('DASHBOARD')} />
      
      <main className="flex-grow">
        {/* 2. Pass navigation to Hero (Get Started button) */}
        <Hero onNavigate={() => handleNavigate('DASHBOARD')} />
        
        {/* 3. Pass navigation to Features (The cards we just updated) */}
        <Features onNavigate={handleNavigate} />
        
        <Testimonials />
        
        {/* 4. Pass navigation to CTA (Bottom join button) */}
        <CTA onNavigate={() => handleNavigate('DASHBOARD')} />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;