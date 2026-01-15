import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; 
import { Eye, EyeOff } from 'lucide-react';

export const StepCard = ({ children }) => (
  <div className="bg-white rounded-[40px] shadow-sm p-8 md:p-12 w-full max-w-lg mx-auto flex flex-col items-center transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
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
      Bump2baby is your trusted companion through pregnancy and early parenthood. Get personalized guidance, track milestones, and connect with a supportive community.
    </p>
    <div className="w-full space-y-4">
      <button 
        onClick={onNext}
        className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors flex items-center justify-center gap-2"
      >
        Get Started 
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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
    { id: 'pregnant', title: 'Pregnant', desc: 'Expecting and tracking your pregnancy', icon: '🤰' },
    { id: 'new-parent', title: 'New Parent', desc: 'Raising your newborn or young child', icon: '👶' },
    { id: 'caregiver', title: 'Caregiver', desc: 'Supporting a loved one through their journey', icon: '👪' },
  ];

  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Tell us about yourself</h2>
      <p className="text-gray-400 text-xs mb-8">This helps us personalize your experience</p>
      <div className="w-full space-y-4">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => { 
              onSelect(role.id);
              onNext(); 
            }}
            className={`w-full flex items-center p-4 rounded-2xl border transition-all text-left ${selected === role.id ? 'border-[#D83D6C] bg-pink-50 ring-1 ring-[#D83D6C]' : 'border-gray-100 bg-white hover:border-gray-300'}`}
          >
            <div className="text-2xl mr-4">{role.icon}</div>
            <div>
              <p className={`font-semibold text-sm ${selected === role.id ? 'text-[#D83D6C]' : 'text-gray-800'}`}>{role.title}</p>
              <p className="text-[10px] text-gray-400">{role.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </StepCard>
  );
};

// 3. Baby Age Step
export const BabyAgeStep = ({ selected, onSelect, onNext }) => {
  const ages = ['Newborn', '1mo', '2mo', '3mo', '4mo', '5mo', '6mo', '9mo', '12mo', '13+ months'];
  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Tell us about your baby</h2>
      <p className="text-gray-400 text-xs mb-8">This helps us provide personalized content</p>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {ages.slice(0, 9).map((age) => (
            <button
              key={age}
              onClick={() => onSelect(age)}
              className={`py-3 px-2 text-[11px] rounded-xl border transition-all font-medium ${selected === age ? 'bg-[#E6F4FF] border-[#66B5F0] text-[#007AFF]' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-300'}`}
            >
              {age}
            </button>
          ))}
        </div>
        <button onClick={onNext} disabled={!selected} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors">
          Continue
        </button>
      </div>
    </StepCard>
  );
};

// 4. Account Step - FIXED: Added missing states and fixed Email logic
export const AccountStep = ({ onNext, setUserName, setHandle }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState(''); // renamed from usernameInput
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(nameInput);
    if (setHandle) setHandle(emailInput); // This sets the handle/email for the next step
    onNext();
  };

  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Let's get to know you</h2>
      <p className="text-gray-400 text-xs mb-8">Create your profile to continue</p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          required 
          className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-pink-100" 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          required 
          className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-pink-100" 
        />
        
        <div className="relative">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Create Password" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required 
            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-pink-100 pr-12" 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button type="submit" className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors mt-2">
          Continue
        </button>
      </form>
    </StepCard>
  );
};

// 5. Account Ready Step
export const AccountReadyStep = ({ onNext }) => (
  <StepCard>
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-green-50 p-4 rounded-full mb-6">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Account Ready!</h2>
      <button onClick={onNext} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold px-20 hover:bg-[#c1325d] transition-colors">
        Continue
      </button>
    </div>
  </StepCard>
);

// 6. Personalize Step
export const PersonalizeStep = ({ onNext }) => {
  const [notifs, setNotifs] = useState(false);
  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Personalize</h2>
      <p className="text-gray-400 text-xs mb-8">Enable notifications for updates</p>
      <div 
        onClick={() => setNotifs(!notifs)}
        className={`w-14 h-7 rounded-full relative transition-all cursor-pointer mb-8 ${notifs ? 'bg-[#D83D6C]' : 'bg-gray-200'}`}
      >
        <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${notifs ? 'left-8' : 'left-1'}`} />
      </div>
      <button onClick={onNext} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors">
        Continue
      </button>
    </StepCard>
  );
};

// 7. Final Success Step - FIXED: Now saves 'email' key explicitly
export const FinalSuccessStep = ({ userName, handle, role, babyAge }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = {
      name: userName || 'New User',
      email: handle || '', // FIXED: Changed key from 'username' to 'email'
      role: role,
      isPregnancy: role === 'pregnant',
      babyAgeMonths: babyAge || 0, 
      pregnancyWeek: role === 'pregnant' ? 12 : null, // Default starting week
      onboardedAt: new Date().toISOString()
    };

    localStorage.setItem('bump2baby_user', JSON.stringify(userData));
    localStorage.setItem('bump2baby_onboarded', 'true');

    const timer = setTimeout(() => {
      navigate('/app', { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, userName, handle, role, babyAge]);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-pink-50 p-6 rounded-full mb-6 relative">
        <div className="absolute inset-0 bg-pink-100 rounded-full animate-ping opacity-20"></div>
        <svg className="w-12 h-12 text-[#D83D6C] relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Complete!</h2>
      <p className="text-gray-500 mb-2">Welcome to the family, {userName}.</p>
      <div className="flex items-center gap-2 justify-center text-[#D83D6C] font-medium text-sm">
        <div className="w-4 h-4 border-2 border-[#D83D6C] border-t-transparent rounded-full animate-spin"></div>
        Setting up your dashboard...
      </div>
    </div>
  );
};