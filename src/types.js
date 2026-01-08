
export const OnboardingRole = 'pregnant' | 'new-parent' | 'caregiver' | null;

export const OnboardingStep = {
  Welcome: 0,
  RoleSelection: 1,
  JourneyDetail: 2, 
  AccountCreation: 3,
  AccountReady: 4, 
  Personalize: 5,    
  FinalSuccess: 6    
}

export const AppView = 'DASHBOARD' | 'SYMPTOM_INTRO' | 'SYMPTOM_SELECT' | 'SYMPTOM_DETAILS' | 'SYMPTOM_RESULT';

// export const Symptom {
//   id: string;
//   label: string;
// }

// export const GuidanceData {
//   riskLevel : 'Low Risk' | 'Moderate Risk' | 'High Risk';
//   riskColor: string;
//   action: string;
//   causes: string;
//   tips: string;
//   monitorFor: string;
// }

// export const UserState {
//   name: string;
//   email: string;
//   phone: string;
//   role: OnboardingRole;
//   journeyStage: number;
//   babyAgeMonths: number;
// }

