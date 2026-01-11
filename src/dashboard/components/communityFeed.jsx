import React, { useState } from 'react';
import { Search, MessageCircle, Heart, TrendingUp, Clock, ChevronDown } from 'lucide-react';

const CommunityFeed = ({ onNavigate, posts = [] }) => {
  const categories = ["All", "Pregnancy", "New Parents", "Health & Wellness", "General"];
  
  // 1. Add state for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Filter posts based on the search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen">
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        
        {/* Category Filters */}
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

        {/* Search & Create Post */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" size={20} />
            {/* 3. Connect input to search state */}
            <input 
              type="text" 
              placeholder="Search community posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 md:py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
          <button 
            onClick={() => onNavigate?.('COMMUNITY_CREATE')} 
            className="bg-[#D5335E] text-white px-8 py-3.5 md:py-4 rounded-2xl font-bold hover:bg-[#b82a50] transition-all shadow-lg shadow-pink-200 active:scale-95"
          >
            Create Post
          </button>
        </div>

        {/* Sort Filters */}
        <div className="flex items-center gap-4 md:gap-8 mb-8 text-[11px] md:text-sm font-bold text-gray-500 overflow-x-auto whitespace-nowrap no-scrollbar">
          <span className="text-gray-400 uppercase tracking-widest text-[10px]">Sort by:</span>
          <button className="flex items-center gap-2 text-pink-600 border-b-2 border-pink-600 pb-1 px-1">
            <Clock size={16}/> Latest
          </button>
          <button className="flex items-center gap-2 hover:text-pink-600 transition-colors pb-1">
             Trending <TrendingUp size={16}/>
          </button>
        </div>

        {/* Dynamic Post Cards */}
        <div className="space-y-6">
          {/* 4. Map over filteredPosts instead of posts */}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-[24px] md:rounded-[40px] p-5 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group animate-in slide-in-from-bottom-2 duration-300"
              >
                <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-lg border-2 border-pink-50 text-pink-600 text-[10px] md:text-xs font-black uppercase tracking-wider mb-4">
                  {post.category}
                </div>
                <h2 className="text-lg md:text-2xl font-extrabold text-slate-800 mb-3 leading-tight group-hover:text-[#D5335E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed max-w-2xl font-medium">
                  {post.content}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-6 pt-6 border-t border-gray-50 text-gray-400 text-[11px] md:text-sm">
                  <span className="font-bold text-slate-700">{post.user}</span>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle size={18} className="text-slate-300"/> {post.replies} replies
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart size={18} className="text-slate-300"/> {post.likes}
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
              <p className="text-gray-400">No posts match "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CommunityFeed;