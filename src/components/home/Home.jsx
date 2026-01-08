
import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';
import { 
  WelcomeStep, 
  RoleStep, 
  AccountStep, 
  BabyAgeStep, 
  AccountReadyStep, 
  PersonalizeStep, 
  FinalSuccessStep 
} from '../Steps';
import { OnboardingStep } from '../../types';

const getYear = () => new Date().getFullYear();

const Home = () => {
  const [step, setStep] = useState(OnboardingStep.Welcome);
  const [data, setData] = useState({
    role: null,
    fullName: 'Mary', // Hardcoded for final screen demo as per "You're all set, Mary!"
    email: '',
    journeyStage: null,
    babyAge: null
  });

  const nextStep = () => {
    if (step < OnboardingStep.FinalSuccess) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > OnboardingStep.Welcome) {
      setStep(step - 1);
    }
  };

  const updateRole = (role) => setData({ ...data, role });
  const updateBabyAge = (babyAge) => setData({ ...data, babyAge });

  const renderStep = () => {
    switch (step) {
      case OnboardingStep.Welcome:
        return <WelcomeStep onNext={nextStep} />;
      case OnboardingStep.RoleSelection:
        return <RoleStep selected={data.role} onSelect={updateRole} onNext={nextStep} />;
      case OnboardingStep.JourneyDetail:
        // In the reference image, it shows the baby age selection grid
        return <BabyAgeStep selected={data.babyAge} onSelect={updateBabyAge} onNext={nextStep} />;
      case OnboardingStep.AccountCreation:
        return <AccountStep onNext={nextStep} />;
      case OnboardingStep.AccountReady:
        return <AccountReadyStep onNext={nextStep} />;
      case OnboardingStep.Personalize:
        return <PersonalizeStep onNext={nextStep} />;
      case OnboardingStep.FinalSuccess:
        return <FinalSuccessStep />;
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  const totalSteps = 6; // Excluding Welcome and FinalSuccess from bar if needed, or including them

  return (
    <div className="min-h-screen bg-[#F4F7FF] flex flex-col items-center justify-center p-4">
      {/* Background decoration elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="w-full max-w-2xl relative z-10">
        {step !== OnboardingStep.Welcome && step !== OnboardingStep.FinalSuccess && (
          <div className="relative">
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

        {/* Branding Footer */}
        {step === OnboardingStep.Welcome && (
          <div className="mt-8 text-center text-[10px] text-gray-300 font-bold uppercase tracking-widest">
            Bump2baby &copy; {getYear()} • All Rights Reserved
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
