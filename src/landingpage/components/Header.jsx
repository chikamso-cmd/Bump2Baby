import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Stethoscope,
  MapPin,
  Users,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const onboarded = localStorage.getItem("bump2baby_onboarded");
    navigate(onboarded === "true" ? "/dashboard" : "/home");
  };

  const features = [
    {
      name: "Symptoms Checker",
      path: "/dashboard?view=SYMPTOM_INTRO",
      icon: Stethoscope,
      description: "Check your symptoms quickly",
    },
    {
      name: "Hospital Finder",
      path: "/dashboard?view=HOSPITAL_INTRO",
      icon: MapPin,
      description: "Find nearby healthcare facilities",
    },
    {
      name: "Community",
      path: "/dashboard?view=COMMUNITY_INTRO",
      icon: Users,
      description: "Connect with other mothers",
    },
    {
      name: "Health Tips",
      path: "/dashboard?view=HEALTH_TIPS",
      icon: BookOpen,
      description: "Daily wellness and care advice",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="w-50" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-[#e83e8c] font-medium transition-colors"
            >
              Home
            </button>

            {/* Features Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 group-hover:text-[#e83e8c] font-medium transition-colors py-8">
                Features{" "}
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-200"
                />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                <div className="grid gap-1 px-2">
                  {features.map((feature) => (
                    <button
                      key={feature.name}
                      onClick={() => navigate(feature.path)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-50 transition-colors group/item w-full text-left"
                    >
                      <div className="p-2 bg-pink-100 rounded-lg text-[#e83e8c] group-hover/item:bg-[#e83e8c] group-hover/item:text-white transition-colors">
                        <feature.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {feature.name}
                        </p>
                        <p className="text-[11px] text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/about")}
              className="text-gray-700 hover:text-[#e83e8c] font-medium transition-colors"
            >
              About us
            </button>

            {/* Contact Us Desktop Link */}
            <button
              onClick={() => navigate("/contact")}
              className="text-gray-700 hover:text-[#e83e8c] font-medium transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Desktop CTA Button - Changed text to Login */}
          <div className="hidden md:block">
            <button
              onClick={handleGetStarted}
              className="bg-[#e83e8c] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#d63384] transition-all transform hover:scale-105 shadow-md shadow-pink-100"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            <button
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
            >
              Home
            </button>

            {/* Mobile Features Dropdown */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center justify-between w-full px-3 py-4 text-base font-medium text-gray-700"
              >
                Features
                <ChevronDown
                  size={18}
                  className={`${
                    isFeaturesOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>

              {isFeaturesOpen && (
                <div className="bg-gray-50 px-4 py-2 space-y-2 mb-2 rounded-xl">
                  {features.map((feature) => (
                    <button
                      key={feature.name}
                      onClick={() => {
                        navigate(feature.path);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-3 w-full p-3 rounded-lg text-left"
                    >
                      <feature.icon size={20} className="text-[#e83e8c]" />
                      <div>
                        <p className="text-sm font-bold text-gray-900">
                          {feature.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                navigate("/about");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
            >
              About us
            </button>

            <button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
            >
              Contact Us
            </button>

            {/* Mobile Login Button */}
            <div className="pt-4 px-3">
              <button
                onClick={() => {
                  handleGetStarted();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#e83e8c] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-pink-200"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;