import React, { useState } from 'react';
import { Search, MessageCircle, Heart, ThumbsUp, Send, CheckCircle2, X } from 'lucide-react';

// Sub-component for individual posts to manage local interaction state
const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [localReplies, setLocalReplies] = useState([]);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    }
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    
    const newReply = {
      id: Date.now(),
      text: replyText,
      user: "You", // In a real app, this would be the logged-in user
      date: "Just now"
    };
    
    setLocalReplies([newReply, ...localReplies]);
    setReplyText('');
    // We keep the input open so they can see their reply added
  };

  return (
    <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group animate-in slide-in-from-bottom-2 duration-300">
      {/* Category Badges */}
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
      
      {/* Interaction Bar */}
      <div className="flex items-center gap-4 md:gap-6 pt-5 border-t border-gray-50 text-gray-400 text-[11px] md:text-sm font-medium">
        <span className="font-bold text-slate-700">{post.user}</span>
        
        <button 
          onClick={() => setShowReplyInput(!showReplyInput)}
          className={`flex items-center gap-1.5 transition-colors ${showReplyInput ? 'text-blue-500' : 'hover:text-blue-500'}`}
        >
          <MessageCircle size={16}/> {(post.replies || 0) + localReplies.length} replies
        </button>

        <button 
          onClick={handleLike}
          className={`flex items-center gap-1.5 transition-all active:scale-125 ${isLiked ? 'text-pink-500' : 'hover:text-pink-500'}`}
        >
          <Heart size={16} className={isLiked ? "fill-current" : ""} /> {likes}
        </button>

        <span className="ml-auto text-gray-300 text-[10px]">{post.date}</span>
      </div>

      {/* Reply Section */}
      {showReplyInput && (
        <div className="mt-6 pt-4 border-t border-gray-50 animate-in fade-in slide-in-from-top-2">
          <form onSubmit={handleReplySubmit} className="flex gap-2 mb-4">
            <input 
              type="text"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a helpful reply..."
              className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-100 focus:bg-white transition-all"
            />
            <button 
              type="submit"
              className="bg-[#D5335E] text-white p-2 rounded-xl hover:bg-[#b82a50] transition-colors"
            >
              <Send size={18} />
            </button>
          </form>

          {/* Render local replies */}
          <div className="space-y-3">
            {localReplies.map(reply => (
              <div key={reply.id} className="bg-slate-50 p-3 rounded-2xl border border-slate-100 ml-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-slate-700">{reply.user}</span>
                  <span className="text-[9px] text-slate-400">{reply.date}</span>
                </div>
                <p className="text-xs text-slate-600">{reply.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CommunityFeed = ({ onNavigate, posts = [] }) => {
  const categories = ["All", "Pregnancy", "New Parents", "Health & Wellness", "General"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const titleMatch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const contentMatch = post.content?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return (titleMatch || contentMatch) && matchesCategory;
  });

  return (
    <div className="animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen pb-24">
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
              <PostCard key={post.id} post={post} />
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