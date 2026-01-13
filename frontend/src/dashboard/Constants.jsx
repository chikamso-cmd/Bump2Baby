
import React from 'react';
// import { Symptom } from './types';

export const ALL_SYMPTOMS = [
  { id: 'nausea', label: 'Nausea' },
  { id: 'headache', label: 'Headache' },
  { id: 'dizziness', label: 'Dizziness' },
  { id: 'fever', label: 'Fever' },
  { id: 'abdominal_pain', label: 'Abdominal pain' },
  { id: 'contractions', label: 'Contractions' },
  { id: 'reduced_movement', label: 'Reduced movement' },
  { id: 'blurred_vision', label: 'Blurred vision' },
  { id: 'severe_fatigue', label: 'Severe fatigue' },
  { id: 'shortness_of_breath', label: 'Shortness of breath' },
  { id: 'bleeding', label: 'Bleeding' },
  { id: 'swelling', label: 'Swelling' },
];

export const COLORS = {
  primary: '#D63D6C',
  secondary: '#00AEEF',
  bg: '#F8FAFF',
  lightPink: '#FDF2F5',
};

export const SYMPTOM_CHECKER_STEPS = [
  { number: 1, title: 'Share your symptoms', description: 'Tell us what you are experiencing' },
  { number: 2, title: 'Answer a few questions', description: 'Help us understand your situation better' },
  { number: 3, title: 'Receive guidance', description: 'Get clear next steps and recommendations' },
];
