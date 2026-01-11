import React, { useState } from 'react';
// Import all necessary icons from lucide-react
import { Search, Bell, Menu, User, MessageCircle, Heart, TrendingUp, Clock, ChevronDown, ArrowLeft, Info } from 'lucide-react';
import CommunityFeed from './communityFeed';
import CreatePost from './communityCreatePost';



export default function App() {
  // State to track which screen to show: 'feed' or 'create'
  const [currentView, setCurrentView] = useState('feed');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {currentView === 'feed' ? (
        <CommunityFeed onViewChange={setCurrentView} />
      ) : (
        <CreatePostForm onViewChange={setCurrentView} />
      )}
    </div>
  );
}

// --- SUB-COMPONENT: COMMUNITY FEED ---
const CommunityFeed = ({ onViewChange }) => {
  const categories = ["All", "Pregnancy", "New Parents", "Health & Wellness", "General"];
  
  return (
    <div className="animate-in fade-in duration-500">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-[#D5335E] font-bold text-lg md:text-xl flex items-center gap-2">
            <div className="bg-pink-100 p-1.5 rounded-lg text-pink-600 text-xs md:text-sm">B</div> Bump2baby
          </span>
          <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#">Home</a><a href="#">Symptom checker</a><a href="#">Find Hospital</a><a href="#">Community</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <Bell size={20} className="text-gray-400" />
           <div className="w-9 h-9 bg-pink-100 rounded-full flex items-center justify-center"><User size={18} className="text-pink-600" /></div>
           <Menu size={24} className="lg:hidden" />
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar mb-6">
          {categories.map((cat, i) => (
            <button key={i} className={`px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap border ${cat === 'Pregnancy' ? 'bg-[#D5335E] text-white' : 'bg-white text-pink-600 border-gray-100'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Action - TRIGGERS STATE CHANGE */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search..." className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-2 focus:ring-pink-500/20" />
          </div>
          <button 
            onClick={() => onViewChange('create')} 
            className="bg-[#D5335E] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-pink-100"
          >
            Create Post
          </button>
        </div>

        {/* Post Card */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-50">
           <div className="inline-block px-4 py-1.5 rounded-lg border-2 border-pink-50 text-pink-600 text-xs font-bold mb-4 uppercase">Health & Wellness</div>
           <h2 className="text-xl md:text-2xl font-bold mb-3">Prenatal yoga recommendations</h2>
           <p className="text-gray-500 mb-6">Has anyone tried prenatal yoga? Did it help the back pain and stress?</p>
           <div className="flex items-center gap-4 pt-6 border-t border-gray-50 text-gray-400 text-sm font-medium">
             <span className="text-slate-700">Amanda k.</span>
             <span className="flex items-center gap-1"><MessageCircle size={16}/> 19</span>
             <span className="flex items-center gap-1"><Heart size={16}/> 28</span>
           </div>
        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENT: CREATE POST FORM ---
const CreatePostForm = ({ onViewChange }) => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <main className="max-w-3xl mx-auto p-4 md:pt-10">
        {/* Back Button - TRIGGERS STATE CHANGE */}
        <button 
          onClick={() => onViewChange('feed')}
          className="flex items-center text-gray-500 text-sm mb-6 hover:text-pink-600"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Community
        </button>

        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 md:p-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">Create New Post</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Title *</label>
              <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 outline-none focus:border-pink-500" placeholder="e.g. First trimester nausea?" />
            </div>

            <div className="flex items-center justify-between bg-sky-50/30 p-4 rounded-xl border border-sky-50/50">
              <div>
                <p className="text-sm font-bold">Post Anonymously</p>
                <p className="text-xs text-gray-500">Your identity will be hidden</p>
              </div>
              <button 
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${isAnonymous ? 'bg-slate-800' : 'bg-gray-300'}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${isAnonymous ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button onClick={() => onViewChange('feed')} className="flex-1 order-2 md:order-1 py-4 px-6 rounded-xl font-bold text-gray-500 bg-gray-100">Cancel</button>
              <button className="flex-1 order-1 md:order-2 py-4 px-6 rounded-xl font-bold text-white bg-[#D5335E]">Post to Community</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}