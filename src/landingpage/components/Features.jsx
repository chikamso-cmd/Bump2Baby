import React from 'react';
import { Calendar, Stethoscope, Users, MapPin } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-white" />,
    title: 'Pregnancy & Baby Tracking',
    description: 'Monitor your baby\'s development week-by-week with personalized insights and milestones tracking.',
    bgColor: 'bg-[#e83e8c]',
    view: 'DASHBOARD' // Navigates to main dashboard
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    title: 'Symptoms Checker',
    description: 'Get quick, reliable information about pregnancy symptoms with our AI-powered maternal health assistant.',
    bgColor: 'bg-[#9333ea]',
    view: 'SYMPTOM_1' // Navigates to start of symptom flow
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Community Support',
    description: 'Connect with other parents, share experiences, and get support from a caring community.',
    bgColor: 'bg-[#06b6d4]',
    view: 'COMMUNITY_INTRO' // Navigates to the feed
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: 'Hospital Finder',
    description: 'Locate trusted hospitals and healthcare providers near you with reviewed maternal care services.',
    bgColor: 'bg-[#8b5cf6]',
    view: 'HOSPITALS' // Placeholder for future feature
  }
];

// 1. Accept onNavigate as a prop
const Features = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need for a <span className="text-[#007bff]">healthy journey</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive tools and resources designed to support you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              // 2. Add onClick to trigger navigation
              onClick={() => onNavigate?.(feature.view)}
              className="p-8 rounded-3xl border border-gray-100 hover:border-[#e83e8c]/30 hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer active:scale-95"
            >
              <div className={`${feature.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e83e8c] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;