import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
import { 
  WelcomeStep, 
  RoleStep, 
  AccountStep, 
  TrimesterStep, 
  PersonalizeStep, 
  FinalSuccessStep 
} from '../Steps';

const getYear = () => new Date().getFullYear();

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onboarded = localStorage.getItem('bump2baby_onboarded');
    if (onboarded === 'true') {
      navigate('/app', { replace: true });
    }
  }, [navigate]);

  // Using numeric values 1-6 to keep the logic simple for the 5-step progress bar
  const [step, setStep] = useState(1);
  
  const [data, setData] = useState({
    role: null,
    fullName: '', 
    username: '', // email/handle
    trimester: null,
  });

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateData = (fields) => setData(prev => ({ ...prev, ...fields }));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep onNext={nextStep} />;
      
      case 2:
        return <RoleStep 
                 selected={data.role} 
                 onSelect={(role) => updateData({ role })} 
                 onNext={nextStep} 
               />;
      
      case 3:
        return <TrimesterStep 
                 selected={data.trimester} 
                 onSelect={(trimester) => updateData({ trimester })} 
                 onNext={nextStep} 
                 onBack={prevStep}
               />;
      
      case 4:
        return <AccountStep 
                 onNext={nextStep} 
                 role={data.role}
                 setUserName={(name) => updateData({ fullName: name })} 
                 setHandle={(handle) => updateData({ username: handle })} 
               />;
      
      case 5:
        return <PersonalizeStep 
                 onNext={nextStep} 
                 onBack={prevStep} 
               />;

      case 6:
        return <FinalSuccessStep 
                 userName={data.fullName} 
                 handle={data.username}
                 role={data.role}
                 trimester={data.trimester}
               />;
      
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  const totalSteps = 5;

  return (
    <div className="min-h-screen bg-[#F4F7FF] flex flex-col items-center justify-center p-4">
      {/* Background Blurs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress bar and Back Button (Merged UI from Main) */}
        {step > 1 && step < 6 && (
          <div className="relative mb-8">
            <ProgressBar currentStep={step} totalSteps={totalSteps} />
            <button
              onClick={prevStep}
              className="absolute top-0 left-0 p-1 text-gray-300 hover:text-gray-500 transition-colors"
              title="Back"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        )}
        
        <div className="flex justify-center items-center">
          {renderStep()}
        </div>

        {step === 1 && (
          <div className="mt-8 text-center text-[10px] text-gray-300 font-bold uppercase tracking-widest">
            Bump2baby &copy; {getYear()} • All Rights Reserved
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;