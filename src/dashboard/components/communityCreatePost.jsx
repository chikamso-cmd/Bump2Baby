import React, { useState } from 'react';
import { ArrowLeft, Info, Bell, User, Menu } from 'lucide-react';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-pink-600 font-bold text-lg md:text-xl flex items-center gap-2">
            <div className="bg-pink-100 p-1.5 rounded-lg text-pink-600 text-sm">B</div> 
            Bump2baby
          </span>
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Symptom checker</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Find Hospital</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Community</a>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-5">
          <Bell size={20} className="text-gray-400 cursor-pointer hover:text-pink-600" />
          <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 rounded-full flex items-center justify-center cursor-pointer">
            <User size={18} className="text-pink-600" />
          </div>
          {/* Mobile Menu Icon */}
          <Menu size={24} className="lg:hidden text-gray-600 cursor-pointer" />
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto p-4 md:pt-10 md:pb-20">
        <button className="flex items-center text-gray-500 text-sm mb-4 hover:text-pink-600 transition-all group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back
        </button>

        <div className="bg-white rounded-2xl md:rounded-[40px] shadow-sm border border-gray-100 p-5 md:p-12">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">Create New Post</h1>
          <p className="text-gray-500 text-sm mb-8">Share your question or experience with the community</p>

          {/* Guidelines Box */}
          <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-4 mb-8">
            <div className="flex gap-3">
              <Info size={18} className="text-sky-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-sky-900 mb-1">Community Guidelines</h4>
                <ul className="text-xs text-sky-800/80 space-y-1 list-disc ml-4 leading-relaxed">
                  <li>Be respectful and supportive</li>
                  <li>This is not a substitute for medical advice</li>
                  <li>Keep conversation clear and appropriate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Title *</label>
              <input 
                type="text" 
                placeholder="e.g. First trimester nausea remedies?"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
              <div className="relative">
                <select className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 text-gray-500 focus:bg-white outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 appearance-none cursor-pointer">
                  <option>Select a category</option>
                  <option>Pregnancy</option>
                  <option>Health & Wellness</option>
                  <option>Baby Care</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Content *</label>
              <textarea 
                rows="5"
                placeholder="Share your question, experience, or thoughts in detail..."
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 focus:bg-white outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <p className="text-xs text-gray-400 mt-2 font-medium">{content.length} characters</p>
            </div>

            <div className="flex items-center justify-between bg-sky-50/30 p-4 rounded-xl border border-sky-50/50">
              <div>
                <p className="text-sm font-bold text-gray-800">Post Anonymously</p>
                <p className="text-[11px] md:text-xs text-gray-500">Your identity will be hidden from other users</p>
              </div>
              <button 
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isAnonymous ? 'bg-slate-800' : 'bg-gray-300'}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${isAnonymous ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Buttons: Stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button className="flex-1 order-2 md:order-1 py-4 px-6 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all">
                Cancel
              </button>
              <button className="flex-1 order-1 md:order-2 py-4 px-6 rounded-xl font-bold text-white bg-[#D5335E] hover:bg-[#b82a50] shadow-lg shadow-pink-200 transition-all">
                Post to Community
              </button>
            </div>
          </div>

          <p className="text-center text-[10px] md:text-[11px] text-gray-400 mt-10 leading-relaxed px-4">
            By posting you agree to our <span className="underline cursor-pointer">community guidelines</span> and understand that post may be moderated
          </p>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;