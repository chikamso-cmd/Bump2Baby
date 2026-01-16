import React from 'react';
import Header from './Header'; // This is the Nav from your screenshot
import Footer from './Footer'; // Adding the footer too for a complete look

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* This adds the Nav bar with 'Home', 'Features', 'About Us' and 'Get Started' */}
      <Header /> 

      <main className="max-w-4xl mx-auto py-20 px-6 mt-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E293B] mb-6">Contact Us</h1>
          <p className="text-xl text-slate-500">
            Have questions about your journey? Our team is here to support you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input type="text" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D9437E] outline-none" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D9437E] outline-none" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea className="w-full p-4 bg-slate-50 border-none rounded-2xl h-40 focus:ring-2 focus:ring-[#D9437E] outline-none resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 bg-[#D9437E] text-white font-bold rounded-2xl hover:bg-[#c1325d] shadow-lg shadow-pink-100 transition-all active:scale-95">
              Send Message
            </button>
          </form>

          {/* Support Details */}
          <div className="space-y-10 py-4">
            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Support Email</h3>
              <p className="text-lg text-slate-500">support@bump2baby.com</p>
              <p className="text-sm text-pink-500 font-medium mt-1">Average response time: 24h</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Location</h3>
              <p className="text-lg text-slate-500">123 Care Avenue, Motherhood District<br />Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;