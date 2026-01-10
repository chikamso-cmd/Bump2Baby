
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#e83e8c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#e83e8c]">Bump2baby</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Your trusted companion for pregnancy and early parenting. Expert guidance, personalized tracking, and community support, all in one place.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#e83e8c] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#e83e8c] transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#e83e8c] transition-colors">About</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#e83e8c] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#e83e8c] transition-colors">Terms of service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#e83e8c] transition-colors">Cookie policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bump2baby, all rights reserved. Made with love for families everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
