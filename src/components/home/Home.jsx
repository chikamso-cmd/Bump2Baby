import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import {
  WelcomeStep,
  RoleStep,
  AccountStep,
  BabyAgeStep,
  AccountReadyStep,
  PersonalizeStep,
  FinalSuccessStep,
} from "../Steps";
import { OnboardingStep } from "../../types";

const getYear = () => new Date().getFullYear();

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onboarded = localStorage.getItem("bump2baby_onboarded");
    if (onboarded === "true") {
      navigate("/app", { replace: true });
    }
  }, [navigate]);

  const [step, setStep] = useState(OnboardingStep.Welcome);

  // UPDATED: Added 'username' to the state object
  const [data, setData] = useState({
    role: null,
    fullName: "",
    username: "", // New field for login handle
    email: "",
    journeyStage: null,
    babyAge: null,
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

  const updateData = (fields) => setData((prev) => ({ ...prev, ...fields }));

  const renderStep = () => {
    switch (step) {
      case OnboardingStep.Welcome:
        return <WelcomeStep onNext={nextStep} />;

      case OnboardingStep.RoleSelection:
        return (
          <RoleStep
            selected={data.role}
            onSelect={(role) => updateData({ role })}
            onNext={nextStep}
          />
        );

      case OnboardingStep.JourneyDetail:
        return (
          <BabyAgeStep
            selected={data.babyAge}
            onSelect={(babyAge) => updateData({ babyAge })}
            onNext={nextStep}
          />
        );

      case OnboardingStep.AccountCreation:
        // UPDATED: Now passing both setUserName and setHandle
        return (
          <AccountStep
            role={data.role}
            onNext={nextStep}
            setUserName={(name) => updateData({ fullName: name })}
            setHandle={(handle) => updateData({ username: handle })}
          />
        );

      case OnboardingStep.AccountReady:
        return <AccountReadyStep onNext={nextStep} />;

      case OnboardingStep.Personalize:
        return <PersonalizeStep onNext={nextStep} />;

      case OnboardingStep.FinalSuccess:
        return (
          <FinalSuccessStep
            userName={data.fullName}
            handle={data.username}
            role={data.role}
            babyAge={data.babyAge} // Add this line!
          />
        );

      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

  const totalSteps = 6;

  return (
    <div className="min-h-screen bg-[#F4F7FF] flex flex-col items-center justify-center p-4">
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {step !== OnboardingStep.Welcome &&
          step !== OnboardingStep.FinalSuccess && (
            <div className="relative mb-8">
              <ProgressBar currentStep={step} totalSteps={totalSteps} />
              <button
                onClick={prevStep}
                className="absolute top-0 left-0 p-1 text-gray-300 hover:text-gray-500 transition-colors"
                title="Back"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          )}

        <div className="flex justify-center items-center">{renderStep()}</div>

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
