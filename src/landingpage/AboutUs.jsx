import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Heart,
  ShieldCheck,
  Users,
  Target,
  Rocket,
  Award,
  Star,
  Globe,
  Zap,
} from "lucide-react";
// Import the generated hero image (using the relative path from the app root)
// Since we can't easily import from .gemini dir in code, we'll use a placeholder or assume it's moved
// For this environment, I'll use the absolute path in a style tag for demonstration
const heroBg =
  "C:/Users/User/.gemini/antigravity/brain/a619bfb9-2261-4634-93c0-70c923a4ab0d/about_us_hero_v2_bg_1768390144396.png";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Compassion",
      description:
        "We lead with empathy, understanding the deeply personal journey of motherhood.",
      bgColor: "bg-pink-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Trust",
      description:
        "Providing reliable, medical-grade information you can depend on.",
      bgColor: "bg-indigo-500",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Community",
      description:
        "Building a safe space for mothers to connect, share, and grow together.",
      bgColor: "bg-cyan-500",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Accessibility",
      description:
        "Ensuring maternal health resources are available to every woman, everywhere.",
      bgColor: "bg-purple-500",
    },
  ];

  const stats = [
    {
      label: "Mothers Supported",
      value: "50,000+",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Hospitals Verified",
      value: "2,500+",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      label: "Community Tips",
      value: "120,000+",
      icon: <Star className="w-5 h-5" />,
    },
    { label: "AI Checks Run", value: "1M+", icon: <Zap className="w-5 h-5" /> },
  ];

  const team = [
    {
      name: "Rawas Ololade",
      role: "CEO & Founder",
      bio: "Passionate advocate for maternal health with 15 years in healthcare tech.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    },
    {
      name: "Veronica Adibe",
      role: "Chief Medical Officer",
      bio: "Board-certified OB-GYN ensuring clinical accuracy in everything we build.",
      img: "https://images.unsplash.com/photo-1559839734-2b71f153673f?q=80&w=200&h=200&fit=crop",
    },
    {
      name: "Oge Ayibiowu",
      role: "Product Designer",
      bio: "Focused on creating calming, intuitive experiences for expectant parents.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main className="grow">
        {/* Hero Section with Refined Background */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center p-6 md:p-12 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 240, 246, 0.8), rgba(255, 255, 255, 0.95)), url('${heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
            <Heart size={400} className="text-[#e83e8c]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#e83e8c] text-xs font-bold uppercase tracking-wider mb-6 animate-bounce">
              <Award size={14} />
              <span>Award Winning Platform 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1E293B] mb-8 tracking-tight leading-tight">
              Empowering Every <span className="text-[#e83e8c]">Mother</span>,
              <br className="hidden md:block" /> Every Step of the Way
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Bump2Baby is your dedicated companion for the most important
              journey of your life—from conception through early parenthood.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-slate-500 font-bold text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#e83e8c]" /> CLINICALLY
                VALIDATED
              </span>
              <span className="flex items-center gap-2">
                <Globe size={18} className="text-indigo-500" /> GLOBAL COMMUNITY
              </span>
              <span className="flex items-center gap-2">
                <Heart size={18} className="text-pink-500" /> PRIVACY FIRST
              </span>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-16 bg-white relative -mt-10 z-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white shadow-2xl shadow-pink-100 rounded-[3rem] p-10 md:p-14 border border-slate-50">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#e83e8c] group-hover:bg-[#e83e8c] group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-[#e83e8c] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-200">
                  <Rocket className="text-white w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  We are here to bridge the gap in maternal healthcare by
                  providing every mother with immediate, trustworthy, and
                  actionable health data at her fingertips.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                  <Award className="text-white w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  A future where no woman feels isolated in her pregnancy
                  journey, and maternal mortality is a challenge of the past
                  through proactive and personalized digital care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Leadership
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Meet the minds behind the platform dedicated to your well-being.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {team.map((m, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="relative mb-8 pt-4">
                    <div className="absolute inset-0 bg-pink-100 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform"></div>
                    <img
                      src={m.img}
                      alt={m.name}
                      className="relative z-10 w-full h-72 object-cover rounded-[2.5rem] shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {m.name}
                  </h3>
                  <div className="text-[#e83e8c] font-bold text-sm uppercase tracking-wider mb-4">
                    {m.role}
                  </div>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {m.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-[#F8FAFF] px-4 rounded-[5rem] mx-4 my-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                The principles that guide every feature we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:translate-y-[-10px] transition-all duration-300"
                >
                  <div
                    className={`${v.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
              ESTABLISHED 2021
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 font-serif text-left italic">
              Our Story
            </h2>
            <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium text-left">
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-[#e83e8c] first-letter:mr-3 first-letter:float-left">
                Bump2Baby began with a simple but powerful realization: mothers
                deserve more than stay-at-home search results. They need a
                support system that travels with them.
              </p>
              <p>
                Watching the struggles of expectant parents navigating
                fragmented medical advice and isolation, we decided to create a
                single source of truth—one that combines AI-driven clinical
                insights with the warmth of a real-world community.
              </p>
              <p className="p-8 bg-pink-50 rounded-[2rem] border-l-8 border-[#e83e8c] text-slate-800 italic">
                "We didn't just want to build an app. We wanted to build a
                promise: that through information and togetherness, every
                pregnancy can be a journey of confidence rather than worry."
              </p>
              <p>
                Today, Bump2Baby is more than a platform. It's a movement
                towards safer, smarter maternal care for everyone, everywhere.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
