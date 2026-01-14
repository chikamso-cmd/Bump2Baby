import React, { useState } from 'react';
import { ArrowLeft, Info, CheckCircle2 } from 'lucide-react';

const CreatePost = ({ onNavigate, onAddPost }) => {
  // 1. Setup state for all form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Pregnancy');
  const [content, setContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 2. Corrected Handle Submit using State instead of e.target indices
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now(),
      user: isAnonymous ? "Anonymous Member" : "Mary",
      title: title,       // Captured from state
      category: category, // Captured from state
      content: content,   // Captured from state
      replies: 0,
      likes: 0,
      date: "Just now"
    };

    // Send the data up to MainRender
    if (onAddPost) {
      onAddPost(formData);
    }
    
    // Trigger Success UI
    setShowSuccess(true);
    
    // Return to feed after 2 seconds
    setTimeout(() => {
      onNavigate('COMMUNITY_INTRO');
    }, 2000);
  };

  // Success View
  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 text-center max-w-sm w-full animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Post Shared!</h2>
          <p className="text-gray-500 font-medium">Your experience has been shared with the community.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <main className="max-w-3xl mx-auto p-4 md:pt-10 md:pb-20">
        <button 
          type="button"
          onClick={() => onNavigate('COMMUNITY_INTRO')} 
          className="flex items-center text-gray-500 text-sm mb-4 hover:text-pink-600 transition-all group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back
        </button>

        <div className="bg-white rounded-2xl md:rounded-[40px] shadow-sm border border-gray-100 p-5 md:p-12">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-1">Create New Post</h1>
          <p className="text-gray-500 text-sm mb-8">Share your question or experience with the community</p>

          <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-4 mb-8">
            <div className="flex gap-3 text-sky-900">
              <Info size={18} className="text-sky-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold mb-1">Community Guidelines</h4>
                <ul className="text-xs text-sky-800/80 space-y-1 list-disc ml-4">
                  <li>Be respectful and supportive</li>
                  <li>This is not a substitute for medical advice</li>
                  <li>Keep conversation clear and appropriate</li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Title *</label>
              <input 
                required
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. First trimester nausea remedies?"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
              />
            </div>

            {/* Category Select */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
              <div className="relative">
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 text-gray-700 focus:bg-white outline-none focus:ring-2 focus:ring-pink-500/20 appearance-none cursor-pointer"
                >
                  <option value="Pregnancy">Pregnancy</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Baby Care">Baby Care</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
              </div>
            </div>

            {/* Content Textarea */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Post Content *</label>
              <textarea 
                required
                rows="5"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts in detail..."
                className="w-full px-4 py-3.5 rounded-xl border border-gray-100 bg-sky-50/30 focus:bg-white outline-none focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
              ></textarea>
              <p className="text-xs text-gray-400 mt-2 font-medium">{content.length} characters</p>
            </div>

            {/* Anonymous Toggle */}
            <div className="flex items-center justify-between bg-sky-50/30 p-4 rounded-xl border border-sky-50/50">
              <div>
                <p className="text-sm font-bold text-gray-800">Post Anonymously</p>
                <p className="text-[11px] text-gray-500">Your identity will be hidden</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isAnonymous ? 'bg-slate-800' : 'bg-gray-300'}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${isAnonymous ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Form Buttons */}
            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button 
                type="button"
                onClick={() => onNavigate('COMMUNITY_INTRO')} 
                className="flex-1 order-2 md:order-1 py-4 px-6 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 order-1 md:order-2 py-4 px-6 rounded-xl font-bold text-white bg-[#D5335E] hover:bg-[#b82a50] shadow-lg shadow-pink-200 transition-all active:scale-95"
              >
                Post to Community
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;