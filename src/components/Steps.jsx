
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const StepCard = ({ children }) => (
  <div className="bg-white rounded-[40px] shadow-sm p-8 md:p-12 w-full max-w-lg mx-auto flex flex-col items-center transition-all animate-in fade-in slide-in-from-bottom-4 duration-500">
    {children}
  </div>
);

// Welcome Step
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
      <button className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors">
        Already Registered? Log In
      </button>
    </div>
  </StepCard>
);

// Role Selection Step
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
            onClick={() => { onSelect(role.id); onNext(); }}
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

// Baby Age Step
export const BabyAgeStep = ({ selected, onSelect, onNext }) => {
  const ages = ['Newborn', '1mo', '2mo', '3mo', '4mo', '5mo', '6mo', '9mo', '12mo', '13+ months'];
  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Tell us about your baby</h2>
      <p className="text-gray-400 text-xs mb-8">This helps us provide personalized content</p>
      <div className="w-full">
        <p className="text-[10px] font-bold text-gray-400 mb-4 text-center">How old is your baby? (in months)</p>
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
        <button
          onClick={() => onSelect('13+ months')}
          className={`w-full py-3 mb-6 text-[11px] rounded-xl border transition-all font-medium ${selected === '13+ months' ? 'bg-[#E6F4FF] border-[#66B5F0] text-[#007AFF]' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-300'}`}
        >
          13+ months
        </button>
        <div className="bg-[#EBF9F2] p-3 rounded-2xl flex items-center justify-center gap-2 mb-8">
          <span className="text-sm">🌟</span>
          <p className="text-[10px] text-[#2D8A5B] font-medium">growing fast! everyday brings new milestone</p>
        </div>
        <button onClick={onNext} disabled={!selected} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors">
          Continue
        </button>
      </div>
    </StepCard>
  );
};

// account creation step
export const AccountStep = ({ onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Let's get to know you</h2>
      <p className="text-gray-400 text-xs mb-8">Create account to continue</p>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          required 
          autoComplete="off"
          className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-pink-100" 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          required 
          autoComplete="off"
          className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-pink-100" 
        />
        <input 
          type="password" 
          placeholder="Create Password" 
          required 
          autoComplete="new-password"
          className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-pink-100" 
        />
        <button type="submit" className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors mt-2">
          Continue
        </button>
      

      {/* Reference Image Section Start */}
      <div className="pt-4 space-y-6">
        <p className="text-[12px] text-gray-600 text-center font-normal">
          By continuing, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>
        </p>

        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-gray-200" />
          <span className="text-sm text-gray-400 font-normal">or</span>
          <div className="flex-1 h-[1px] bg-gray-200" />
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-4 border border-gray-400 rounded-full text-base text-gray-700 hover:bg-gray-50 transition-all font-medium">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-4 border border-gray-400 rounded-full text-base text-gray-700 hover:bg-gray-50 transition-all font-medium">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>
      </div>
      </form>
    </StepCard>
  );
};

// account ready step
export const AccountReadyStep = ({ onNext }) => (
  <StepCard>
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">You're all set!</h2>
      <p className="text-gray-400 text-xs mb-10">Let's finish setting up your account</p>
      <button onClick={onNext} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold px-20 hover:bg-[#c1325d] transition-colors">
        Continue
      </button>
    </div>
  </StepCard>
);

// personalize step
export const PersonalizeStep = ({ onNext }) => {
  const [notifs, setNotifs] = useState(false);
  return (
    <StepCard>
      <h2 className="text-xl font-bold text-gray-800 mb-1">Personalize your experience</h2>
      <p className="text-gray-400 text-xs mb-8">Helps us support you better</p>
      
      <div className="w-full space-y-4 mb-8 text-left">
        <div className="border border-gray-100 rounded-3xl p-6 flex items-start gap-4">
          <div className="bg-red-50 p-2 rounded-xl">
             <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm text-gray-800">Enable notifications</h3>
            <p className="text-[10px] text-gray-400 mb-3">Get reminders for appointments, milestones, and helpful tips</p>
            <div 
              onClick={() => setNotifs(!notifs)}
              className={`w-10 h-5 rounded-full relative transition-all cursor-pointer ${notifs ? 'bg-[#D83D6C]' : 'bg-gray-200'}`}
            >
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${notifs ? 'left-5.5' : 'left-0.5'}`} />
            </div>
          </div>
        </div>

        <div className="bg-[#F0FFF7] rounded-3xl p-6 flex items-start gap-4">
          <div className="bg-white p-2 rounded-xl shadow-sm">
             <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <div>
            <h3 className="font-bold text-sm text-[#2D8A5B]">Your privacy matters</h3>
            <p className="text-[10px] text-[#2D8A5B] opacity-80">Your personal data is encrypted and secure. We never share your information with third parties. You have full control over your data.</p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-2 mb-8">
        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-medium">
          <div className="w-1 h-1 rounded-full bg-[#D83D6C]" />
          Customize notification preferences anytime in settings
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-medium">
          <div className="w-1 h-1 rounded-full bg-[#D83D6C]" />
          All data is stored securely and HIPAA-compliant
        </div>
        <div className="flex items-center gap-2 text-[9px] text-gray-400 font-medium">
          <div className="w-1 h-1 rounded-full bg-[#D83D6C]" />
          You can export or delete your data at any time
        </div>
      </div>

      <button onClick={onNext} className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold hover:bg-[#c1325d] transition-colors">
        Continue
      </button>
    </StepCard>
  );
};

// final success step

export const FinalSuccessStep = () => (
  <StepCard>
    <div className="relative mb-6">
      <div className="bg-[#FFF0F4] p-5 rounded-full relative z-10 animate-pulse">
        <svg className="w-8 h-8 text-[#D83D6C]" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12 2.247l.848 2.61h2.744l-2.22 1.613.848 2.61-2.22-1.612-2.22 1.612.848-2.61-2.22-1.613h2.744l.848-2.61zm0 2.247zM5.5 14a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm13 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12 21a5 5 0 005-5H7a5 5 0 005 5z" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-pink-200 blur-xl opacity-30 rounded-full scale-150" />
    </div>

    <h2 className="text-xl font-bold text-gray-800 mb-2">You're all set, Mary!</h2>
    <p className="text-[10px] text-gray-400 text-center mb-10 px-6 leading-relaxed">
      Welcome to Bump2baby! Your personalized journey starts now. We're here to support you every step of the way.
    </p>

    <div className="grid grid-cols-3 gap-3 w-full mb-10">
      <div className="bg-[#F4F1FB] p-4 rounded-3xl flex flex-col items-center">
        <div className="mb-2">📱</div>
        <span className="text-[12px] font-bold text-gray-800 text-center">track progress</span>
        <span className="text-[10px] text-gray-400 text-center">milestones & updates at your fingertips</span>
      </div>
      <div className="bg-[#E7F7FF] p-4 rounded-3xl flex flex-col items-center">
        <div className="mb-2">👥</div>
        <span className="text-[12px] font-bold text-gray-800 text-center">connect</span>
        <span className="text-[10px] text-gray-400 text-center">expert advice & community support</span>
      </div>
      <div className="bg-[#FFF0F4] p-4 rounded-3xl flex flex-col items-center">
        <div className="mb-2">💡</div>
        <span className="text-[12px] font-bold text-gray-800 text-center">learn</span>
        <span className="text-[10px] text-gray-400 text-center">expert tips & personal guidance</span>
      </div>
    </div>

    <Link 
      to="/dashboard" 
      className='w-full'
      onClick={() => localStorage.setItem('bump2baby_onboarded', 'true')}
    >
    <button className="w-full bg-[#D83D6C] text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#c1325d] transition-colors">
      Go to Dashboard <span className="text-sm text-white">< FaHeart /></span>
    </button>
    </Link>
    <p className="mt-6 text-[13px] text-gray-300 font-medium">need help? we're here for you 24/7</p>
  </StepCard>
);
