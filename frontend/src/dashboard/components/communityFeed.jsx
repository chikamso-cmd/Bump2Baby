import React, { useState } from 'react';
import { Search, MessageCircle, Heart, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

const CommunityFeed = ({ onNavigate }) => {
  const categories = ["All", "Pregnancy", "New Parents", "Health & Wellness", "General"];
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Data exactly as marked in your screenshots
  const staticPosts = [
    {
      id: 1,
      category: "Health & Wellness",
      isHelpful: true,
      title: "First trimester exhaustion - when does it get better?",
      content: "I'm 8 weeks pregnant and can barely keep my eyes open by 2pm. Is this normal? How long did this last for you?",
      user: "Sarah M.",
      replies: 12,
      likes: 24,
      date: "2 hours ago"
    },
    {
      id: 2,
      category: "New Parents",
      isHelpful: false,
      title: "Recommended baby monitors?",
      content: "Looking for a reliable baby monitor with video. What brands do you trust and recommend?",
      user: "Jessica L.",
      replies: 18,
      likes: 15,
      date: "4 hours ago"
    },
    {
      id: 3,
      category: "Pregnancy",
      isHelpful: true,
      title: "Dealing with morning sickness at work",
      content: "Any tips for managing nausea while working? I haven't told my boss yet and it's getting harder to hide.",
      user: "Anonymous",
      replies: 31,
      likes: 45,
      date: "5 hours ago"
    },
    {
      id: 4,
      category: "Pregnancy",
      isHelpful: false,
      title: "When did you start showing?",
      content: "I'm 14 weeks and still waiting for a visible bump. First pregnancy - is this normal?",
      user: "Emily R.",
      replies: 27,
      likes: 32,
      date: "1 day ago"
    },
    {
      id: 5,
      category: "New Parents",
      isHelpful: true,
      title: "Sleep training methods - gentle approaches?",
      content: "My 4-month-old still wakes every 2 hours. Looking for gentle sleep training methods that worked for you.",
      user: "Anonymous",
      replies: 42,
      likes: 58,
      date: "1 day ago"
    },
    {
      id: 6,
      category: "Health & Wellness",
      isHelpful: false,
      title: "Prenatal yoga recommendations",
      content: "Has anyone tried prenatal yoga? Did it help the back pain and stress? Any YouTube channels or apps you recommend?",
      user: "Amanda k.",
      replies: 19,
      likes: 28,
      date: "2 days ago"
    },
    {
      id: 7,
      category: "Health & Wellness",
      isHelpful: true,
      title: "Post-partum hair loss when does it stop?",
      content: "I'm 4 months post-partum and losing so much hair! Please tell me this is temporary.",
      user: "Rachel T.",
      replies: 23,
      likes: 38,
      date: "2 days ago"
    },
    {
      id: 8,
      category: "General",
      isHelpful: false,
      title: "Partner support during pregnancy",
      content: "How did you help your partner understand what you're going through? Looking for ways to communicate better.",
      user: "Anonymous",
      replies: 16,
      likes: 21,
      date: "3 days ago"
    }
  ];

  // 2. Filter Logic: Handles both the Category selection AND Search text
  const filteredPosts = staticPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen">
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        
        {/* Category Filters */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 no-scrollbar mb-6 snap-x">
          {categories.map((cat, i) => (
            <button 
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 md:px-7 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold border transition-all duration-200 whitespace-nowrap snap-start active:scale-95
                ${activeCategory === cat 
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

        {/* Disclaimer Box */}
        <div className="bg-[#FFF4E8] border border-orange-100 p-4 rounded-2xl mb-10 flex items-center gap-3">
          <Heart size={16} className="text-orange-400 fill-orange-400 shrink-0" />
          <p className="text-[11px] md:text-sm text-orange-900/70 leading-relaxed font-medium">
            This community does not replace professional medical advice. Please consult your healthcare provider for medical concerns.
          </p>
        </div>

        {/* Dynamic Post Cards */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group animate-in slide-in-from-bottom-2 duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-lg border border-pink-100 text-[#D5335E] text-[10px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                  {post.isHelpful && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg text-[10px] font-bold border border-green-100">
                      <CheckCircle2 size={12} /> Helpful
                    </div>
                  )}
                </div>

                <h2 className="text-lg md:text-xl font-extrabold text-slate-800 mb-2 leading-tight group-hover:text-[#D5335E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm md:text-base mb-6 leading-relaxed">
                  {post.content}
                </p>
                
                <div className="flex items-center gap-4 md:gap-6 pt-5 border-t border-gray-50 text-gray-400 text-[11px] md:text-sm font-medium">
                  <span className="font-bold text-slate-700">{post.user}</span>
                  <div className="flex items-center gap-1.5"><MessageCircle size={16}/> {post.replies} replies</div>
                  <div className="flex items-center gap-1.5"><Heart size={16}/> {post.likes}</div>
                  <span className="ml-auto text-gray-300 text-[10px]">{post.date}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-gray-200">
              <p className="text-gray-400">No posts match your filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CommunityFeed;