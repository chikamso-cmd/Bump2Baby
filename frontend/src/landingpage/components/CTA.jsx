
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="gradient-cta p-12 md:p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Start your journey with confidence?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join Bump2baby today and get personalized support, expert guidance and a thriving community every step of the way.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button className="bg-white text-[#e83e8c] px-10 py-4 rounded-full text-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-all shadow-xl hover:scale-105">
              Get Started <ArrowRight size={20} />
            </button>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/70">
              <span>Free to use</span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Trusted by 100,000+ parents</span>
            </div>
          </div>

          {/* Abstract circles decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
