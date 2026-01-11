import React from 'react';
import { Search, Bell, Menu, User, MessageCircle, Heart, TrendingUp, Clock, ChevronDown } from 'lucide-react';

const CommunityFeed = () => {
  const categories = ["All", "Pregnancy", "New Parents", "Health & Wellness", "General"];
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* 1. Navbar - Responsive padding and hidden links */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-[#D5335E] font-bold text-lg md:text-xl flex items-center gap-2">
            <div className="bg-pink-100 p-1.5 rounded-lg text-pink-600 text-xs md:text-sm">B</div> 
            Bump2baby
          </span>
          <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Symptom checker</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Find Hospital</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Community</a>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Bell size={20} className="text-gray-400 cursor-pointer hover:text-pink-600 transition-colors" />
          <div className="w-8 h-8 md:w-9 md:h-9 bg-pink-100 rounded-full flex items-center justify-center cursor-pointer border border-pink-200">
            <User size={18} className="text-pink-600" />
          </div>
          <Menu size={24} className="lg:hidden text-gray-600 cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        
        {/* 2. Category Filters - Horizontally scrollable on mobile */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 no-scrollbar mb-6 snap-x">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`px-5 md:px-7 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold border transition-all whitespace-nowrap snap-start
                ${cat === 'Pregnancy' || cat === 'Health & Wellness' 
                  ? 'bg-[#D5335E] text-white border-[#D5335E] shadow-lg shadow-pink-100' 
                  : 'bg-white text-pink-600 border-gray-100 hover:border-pink-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Search & Create - Stacks on mobile, side-by-side on md screens */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search community posts..."
              className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
          <button className="bg-[#D5335E] text-white px-8 py-3.5 md:py-4 rounded-2xl font-bold hover:bg-[#b82a50] transition-all shadow-lg shadow-pink-200 active:scale-95">
            Create Post
          </button>
        </div>

        {/* 4. Sort Filters - Responsive text sizing */}
        <div className="flex items-center gap-4 md:gap-8 mb-8 text-[11px] md:text-sm font-bold text-gray-500 overflow-x-auto whitespace-nowrap no-scrollbar">
          <span className="text-gray-400 uppercase tracking-widest text-[10px]">Sort by:</span>
          <button className="flex items-center gap-2 text-pink-600 border-b-2 border-pink-600 pb-1 px-1">
            <Clock size={16}/> Latest
          </button>
          <button className="flex items-center gap-2 hover:text-pink-600 transition-colors pb-1">
             Latest <ChevronDown size={14}/>
          </button>
          <button className="flex items-center gap-2 hover:text-pink-600 transition-colors bg-pink-50 px-3 py-1 rounded-full text-pink-600">
            <TrendingUp size={16}/> Trending
          </button>
        </div>

        {/* 5. Disclaimer Box - Better padding and font for mobile */}
        <div className="bg-[#FFF4E8] border border-orange-100 p-4 md:p-5 rounded-2xl mb-10 flex items-start gap-4">
          <div className="bg-orange-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold shadow-sm">i</div>
          <p className="text-[11px] md:text-sm text-orange-900/80 leading-relaxed font-medium">
            This community does not replace professional medical advice. Please consult your healthcare provider for medical concerns.
          </p>
        </div>

        {/* 6. Post Card - More rounded on desktop, tighter on mobile */}
        <div className="bg-white rounded-[24px] md:rounded-[40px] p-5 md:p-10 shadow-sm border border-gray-100 mb-6 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-lg border-2 border-pink-50 text-pink-600 text-[10px] md:text-xs font-black uppercase tracking-wider mb-4">
            Health & Wellness
          </div>
          <h2 className="text-lg md:text-2xl font-extrabold text-slate-800 mb-3 leading-tight group-hover:text-[#D5335E] transition-colors">
            Prenatal yoga recommendations
          </h2>
          <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed max-w-2xl font-medium">
            Has anyone tried prenatal yoga? Did it help the back pain and stress? Any YouTube channels or apps you recommend?
          </p>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-6 pt-6 border-t border-gray-50 text-gray-400 text-[11px] md:text-sm">
            <span className="font-bold text-slate-700">Amanda k.</span>
            <div className="flex items-center gap-1.5"><MessageCircle size={18} className="text-slate-300"/> 19 replies</div>
            <div className="flex items-center gap-1.5"><Heart size={18} className="text-slate-300"/> 28</div>
            <span className="text-gray-300">•</span>
            <span>2 days ago</span>
          </div>
        </div>

      </main>
    </div>
  );
};

export default CommunityFeed;