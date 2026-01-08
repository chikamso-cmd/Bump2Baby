
export const OnboardingRole = 'pregnant' | 'new-parent' | 'caregiver' | null;

// export const OnboardingData = {
//   role: OnboardingRole,
//   fullName: string,
//   email: string,
//   journeyStage: number | null, 
//   babyAge: string | null,      
// }

export const OnboardingStep = {
  Welcome: 0,
  RoleSelection: 1,
  JourneyDetail: 2, 
  AccountCreation: 3,
  AccountReady: 4, 
  Personalize: 5,    
  FinalSuccess: 6    
}
