
import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = Math.min(Math.round(((currentStep) / totalSteps) * 100), 100);

  return (
    <div className="w-full max-w-md mx-auto mb-6 px-4">
      <div className="flex justify-between items-center mb-1 text-[10px] text-gray-400 font-medium">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#D83D6C] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
