
import React from 'react';
import { Heart, Stethoscope, MapPin, Users, Lightbulb, ChevronRight, MessageSquare, ThumbsUp } from 'lucide-react';
// import { UserState } from '../types';

// interface DashboardProps {
//   user: UserState;
//   onNavigate: (view: any) => void;
// }

const Dashboard = ({ user, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Column: Progress & Actions */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Progress Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Hi {user.name} 👋</h1>
              <p className="text-gray-500 font-medium">
                {user.isPregnancy ? `First Trimester • Week ${user.pregnancyWeek}` : `${user.babyAgeMonths} months old`}
              </p>
            </div>
            <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#D63D6C] fill-[#D63D6C]" />
            </div>
          </div>
          
          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-sm font-semibold text-gray-700">
              <span>{user.isPregnancy ? 'Pregnancy progress' : 'Growth Journey'}</span>
              <span>33%</span>
            </div>
            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#D63D6C] rounded-full transition-all duration-1000" 
                style={{ width: '33%' }}
              ></div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-400 font-medium">Keep tracking your journey!</p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ActionCard 
              icon={<Stethoscope className="w-6 h-6 text-[#D63D6C]" />}
              title="Symptom Checker"
              desc="Quick health assessment"
              onClick={() => onNavigate('SYMPTOM_INTRO')}
              borderColor="border-pink-200"
              iconBg="bg-pink-50"
            />
            <ActionCard 
              icon={<MapPin className="w-6 h-6 text-[#00AEEF]" />}
              title="Find Nearby Hospitals"
              desc="Quick health assessment"
              onClick={() => {}}
              borderColor="border-blue-200"
              iconBg="bg-blue-50"
            />
            <ActionCard 
              icon={<Users className="w-6 h-6 text-indigo-500" />}
              title="Community"
              desc="Connect with others"
              onClick={() => {}}
              borderColor="border-indigo-100"
              iconBg="bg-indigo-50"
            />
            <ActionCard 
              icon={<Lightbulb className="w-6 h-6 text-orange-400" />}
              title="Health Tips"
              desc="Expert advice and guidance"
              onClick={() => {}}
              borderColor="border-orange-100"
              iconBg="bg-orange-50"
            />
          </div>
        </div>

        {/* Today's Insight */}
        <div className="bg-[#1D749B] rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-2xl">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">😔 Today's Insight</h3>
              <p className="font-semibold text-lg opacity-90 mb-4">Rest and Relax</p>
              <p className="text-sm opacity-80 leading-relaxed max-w-lg">
                Take time to rest when you feel tired. Your body is working hard to nurture your growing baby.
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart className="w-32 h-32 fill-white" />
          </div>
        </div>
      </div>

      {/* Right Column: Upcoming & Community */}
      <div className="lg:col-span-4 space-y-6">
        {/* Upcoming */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Upcoming</h3>
            <button className="text-blue-500 text-sm font-semibold flex items-center">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            <UpcomingItem 
              title="Prenatal Checkup"
              date="Thursday January 15, 2026"
              dotColor="bg-gray-300"
            />
            <UpcomingItem 
              title="Ultrasound Scan"
              date="Thursday January 22, 2026"
              dotColor="bg-[#D63D6C]"
              active
            />
            <UpcomingItem 
              title="Take Prenatal Vitamin"
              date="Daily"
              dotColor="bg-gray-300"
            />
          </div>
        </div>

        {/* Community Feed */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Community</h3>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-400 text-[10px] font-bold rounded uppercase">Live</span>
          </div>
          <div className="space-y-4">
            <CommunityPost 
              author="Titilayo M."
              avatar="TM"
              time="2h ago"
              text="Any tips for dealing with morning sickness? Week 8 here and struggling..."
              isTrending
            />
            <CommunityPost 
              author="Amanda K."
              avatar="AK"
              time="5h ago"
              text="Best baby monitors? Looking for recommendations"
            />
          </div>
          <button className="w-full mt-6 bg-[#D63D6C] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#c2335f] transition-colors">
            Join the conversation <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ActionCard = ({ icon, title, desc, onClick, borderColor, iconBg }) => (
  <button 
    onClick={onClick}
    className={`flex items-start gap-4 p-4 bg-white border ${borderColor} rounded-2xl text-left hover:shadow-md transition-shadow group`}
  >
    <div className={`p-3 ${iconBg} rounded-xl group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
      <p className="text-xs text-gray-400 font-medium">{desc}</p>
    </div>
  </button>
);

const UpcomingItem = ({ title, date, dotColor, active }) => (
  <div className={`p-4 border ${active ? 'border-pink-200' : 'border-gray-100'} rounded-2xl flex items-center gap-4`}>
    <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
    <div>
      <h4 className="text-sm font-bold text-gray-800">{title}</h4>
      <p className="text-[11px] text-gray-400 font-medium">{date}</p>
    </div>
  </div>
);

const CommunityPost = ({ author, avatar, time, text, isTrending }) => (
  <div className="p-4 bg-gray-50 rounded-2xl space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        {avatar}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-gray-800">{author}</span>
          <span className="text-[10px] text-gray-400 font-medium">{time}</span>
          {isTrending && <span className="text-[10px] text-orange-500 font-bold ml-auto">🔥 Trending</span>}
        </div>
      </div>
    </div>
    <p className="text-xs text-gray-600 font-medium leading-relaxed">{text}</p>
    <div className="flex items-center gap-4 text-gray-400">
      <div className="flex items-center gap-1">
        <MessageSquare className="w-3.5 h-3.5" />
        <span className="text-[10px] font-bold">24</span>
      </div>
      <div className="flex items-center gap-1">
        <ThumbsUp className="w-3.5 h-3.5" />
        <span className="text-[10px] font-bold">45</span>
      </div>
    </div>
  </div>
);

export default Dashboard;
