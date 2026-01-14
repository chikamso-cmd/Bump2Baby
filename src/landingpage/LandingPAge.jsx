import React, { useState } from "react";
import Header from "../landingpage/components/Header";
import Hero from "../landingpage/components/Hero";
import Features from "../landingpage/components/Features";
import Testimonials from "../landingpage/components/Testimonial";
import CTA from "../landingpage/components/CTA";
import Footer from "../landingpage/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
