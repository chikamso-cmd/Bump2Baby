import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { 
  Eye, EyeOff, Loader2, ArrowLeft, Leaf, 
  Bell, ShieldCheck, Sparkles, Smartphone, Users, Lightbulb 
} from "lucide-react";

// Register Logic (Cleaned up from merge conflict)
const registerUser = async (userData) => {
  // Uncomment this when you are ready to connect to your live backend
  /*
  try {
    const response = await fetch("https://bump2baby.onrender.com/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Registration failed");
    return data;
  } catch (error) {
    throw error;
  }
  */
};

export const StepCard = ({ children }) => (
  <div className="bg-white rounded-[40px] shadow-sm p-8 md:p-12 w-full max-w-lg mx-auto flex flex-col items-center transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
    {children}
  </div>
);

// 1. Welcome Step
export const WelcomeStep = ({ onNext }) => (
  <StepCard>
    <div className="bg-[#FFF0F4] p-4 rounded-full mb-6">
      <svg className="w-8 h-8 text-[#D83D6C]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
    <h1 className="text-2xl md:text-3xl font-bold text-[#D83D6C] text-center mb-4 leading-tight">
      Your pregnancy journey, supported.
    </h1>
    <p className="text-gray-500 text-center text-sm mb-10 leading-relaxed px-4">
      Bump2baby is your trusted companion through pregnancy and early parenthood.
    </p>
    <div className="w-full space-y-4">
      <button onClick={onNext} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors flex items-center justify-center gap-2">
        Get Started <ArrowLeft className="w-4 h-4 rotate-180" />
      </button>
      <Link to="/login" className="block w-full">
        <button className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
          Already Registered? Log In
        </button>
      </Link>
    </div>
  </StepCard>
);

// 2. Role Selection Step
export const RoleStep = ({ selected, onSelect, onNext }) => {
  const roles = [
    { id: "pregnant", title: "Pregnant", desc: "Expecting and tracking your pregnancy", icon: "🤰" },
    { id: "new-parent", title: "New Parent", desc: "Raising your newborn or young child", icon: "👶" },
    { id: "caregiver", title: "Caregiver", desc: "Supporting a loved one through their journey", icon: "👪" },
  ];
  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Tell us about yourself</h2>
      <p className="text-gray-400 text-xs mb-8">This helps us personalize your experience</p>
      <div className="w-full space-y-4">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => { onSelect(role.id); onNext(); }}
            className={`w-full flex items-center p-4 rounded-2xl border transition-all text-left ${
              selected === role.id ? "border-[#D83D6C] bg-pink-50 ring-1 ring-[#D83D6C]" : "border-gray-100 bg-white hover:border-gray-300"
            }`}
          >
            <div className="text-2xl mr-4">{role.icon}</div>
            <div>
              <p className={`font-semibold text-sm ${selected === role.id ? "text-[#D83D6C]" : "text-gray-800"}`}>{role.title}</p>
              <p className="text-[10px] text-gray-400">{role.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </StepCard>
  );
};

// 3. Trimester Selection Step
export const TrimesterStep = ({ selected, onSelect, onNext, onBack }) => {
  const trimesters = [
    { id: 1, label: '1-13 weeks', info: 'First trimester! your baby is developing rapidly!' },
    { id: 2, label: '14-27 weeks', info: 'Second trimester! Your baby is growing stronger!' },
    { id: 3, label: '28-40 weeks', info: 'Third trimester! Almost time to meet your baby!' }
  ];
  const currentInfo = trimesters.find(t => t.id === selected)?.info;

  return (
    <StepCard>
      <button onClick={onBack} className="absolute left-6 top-8 p-2 hover:bg-gray-50 rounded-full transition-colors">
        <ArrowLeft size={20} className="text-gray-400" />
      </button>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Where are you in your journey?</h2>
      <p className="text-gray-400 text-xs mb-8">This helps us provide personalized content</p>
      <p className="w-full text-left text-[11px] font-semibold text-gray-400 mb-4 uppercase">Select your trimester</p>
      <div className="grid grid-cols-3 gap-3 w-full mb-6">
        {trimesters.map((t) => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
              selected === t.id ? 'border-[#D83D6C] bg-pink-50' : 'border-gray-50 bg-white hover:border-gray-200'
            }`}
          >
            <span className={`text-3xl font-bold mb-1 ${selected === t.id ? 'text-[#D83D6C]' : 'text-gray-300'}`}>{t.id}</span>
            <span className="text-[9px] font-bold text-gray-500 uppercase">{t.label}</span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="w-full bg-pink-50 border border-pink-100 rounded-2xl p-4 flex items-center justify-center gap-2 mb-8 animate-in fade-in zoom-in">
          <Leaf size={16} className="text-green-500" />
          <p className="text-[11px] font-medium text-[#D83D6C] italic">{currentInfo}</p>
        </div>
      )}
      <button onClick={onNext} disabled={!selected} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] disabled:opacity-50">Continue</button>
    </StepCard>
  );
};

// 4. Personalize Step
export const PersonalizeStep = ({ onNext, onBack }) => {
  const [notifs, setNotifs] = useState(false);
  return (
    <StepCard>
      <button onClick={onBack} className="absolute left-6 top-8 p-2 hover:bg-gray-50 rounded-full transition-colors">
        <ArrowLeft size={20} className="text-gray-400" />
      </button>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Personalize your experience</h2>
      <p className="text-gray-400 text-xs mb-8">Helps us support you better</p>
      <div className="w-full space-y-4 mb-8">
        <div className="p-4 rounded-2xl border border-gray-100 bg-white flex items-start gap-4">
          <div className="p-2 bg-pink-50 rounded-lg"><Bell size={20} className="text-[#D83D6C]" /></div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-800">Enable notifications</h3>
            <p className="text-[10px] text-gray-500 leading-tight mb-2">Get reminders for appointments and milestones.</p>
            <div onClick={() => setNotifs(!notifs)} className={`w-10 h-5 rounded-full relative transition-all cursor-pointer ${notifs ? "bg-[#D83D6C]" : "bg-gray-200"}`}>
              <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${notifs ? "left-6" : "left-1"}`} />
            </div>
          </div>
        </div>
        <div className="p-4 rounded-2xl border border-green-100 bg-green-50/50 flex items-start gap-4">
          <div className="p-2 bg-white rounded-lg"><ShieldCheck size={20} className="text-green-500" /></div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-green-700">Your privacy matters</h3>
            <p className="text-[10px] text-green-600/80 leading-tight">Your data is encrypted and secure. We never share with third parties.</p>
          </div>
        </div>
      </div>
      <button onClick={onNext} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d]">Continue</button>
    </StepCard>
  );
};

// 5. Final Success Step
export const FinalSuccessStep = ({ userName, handle, role, trimester }) => {
  const navigate = useNavigate();

  const handleFinish = () => {
    const trimesterStartWeeks = { 1: 4, 2: 14, 3: 28 };
    const userData = {
      name: userName || "Mama",
      handle: handle || "",
      role: role || "pregnant",
      trimester: trimester || 1,
      onboardingDate: new Date().toISOString(), 
      startWeek: trimesterStartWeeks[trimester] || 4,
      onboardedAt: new Date().toISOString()
    };
    localStorage.setItem("bump2baby_user", JSON.stringify(userData));
    localStorage.setItem("bump2baby_onboarded", "true");
    navigate("/app"); 
  };

  return (
    <StepCard>
      <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-6 relative">
        <Sparkles size={32} className="text-[#D83D6C]" />
        <div className="absolute inset-0 bg-pink-100 rounded-full animate-ping opacity-20"></div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">You're all set, {userName.split(' ')[0] || 'Mary'}!</h2>
      <p className="text-gray-400 text-xs mb-10 text-center max-w-[280px]">Your personalized journey starts now.</p>
      <div className="grid grid-cols-3 gap-4 w-full mb-10">
        {[
          { icon: <Smartphone size={18} />, label: 'Track', bg: 'bg-indigo-50', color: 'text-indigo-600' },
          { icon: <Users size={18} />, label: 'Connect', bg: 'bg-blue-50', color: 'text-blue-600' },
          { icon: <Lightbulb size={18} />, label: 'Learn', bg: 'bg-orange-50', color: 'text-orange-600' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>{item.icon}</div>
            <span className="text-[9px] font-bold text-gray-500 uppercase">{item.label}</span>
          </div>
        ))}
      </div>
      <button onClick={handleFinish} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] flex items-center justify-center gap-2">
        Go to Dashboard <FaHeart className="text-xs" />
      </button>
    </StepCard>
  );
};

// 6. Account Step
export const AccountStep = ({ onNext, setUserName, setHandle, role }) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      // Currently local-only. Uncomment registerUser() logic to use API.
      setUserName(nameInput);
      if (setHandle) setHandle(emailInput);
      onNext();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Let's get to know you</h2>
      <p className="text-gray-400 text-xs mb-8">Create your profile to continue</p>
      {error && <div className="w-full bg-red-50 text-red-500 text-xs p-3 rounded-xl mb-4 text-center">{error}</div>}
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input type="text" placeholder="Full Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm" />
        <input type="email" placeholder="Email Address" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm" />
        <div className="relative">
          <input type={showPassword ? "text" : "password"} placeholder="Create Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} required className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm pr-12" />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
        </div>
        <button type="submit" disabled={isLoading} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold flex items-center justify-center disabled:opacity-70">{isLoading ? <Loader2 className="animate-spin mr-2" /> : "Continue"}</button>
      </form>
    </StepCard>
  );
};