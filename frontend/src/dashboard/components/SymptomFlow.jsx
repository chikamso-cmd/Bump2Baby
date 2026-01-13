
import React, { useState } from 'react';
import { ArrowLeft, Search, X, Check, Info, ShieldAlert, MapPin, Users, History, AlertCircle } from 'lucide-react';
import { ALL_SYMPTOMS, SYMPTOM_CHECKER_STEPS } from '../Constants';
// import { AppView, Symptom, GuidanceData } from '../types';

// interface SymptomFlowProps {
//   onBack: () => void;
//   currentStep: AppView;
//   setCurrentStep: (view: AppView) => void;
// }

const SymptomFlow = ({ onBack, currentStep, setCurrentStep }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [trimester, setTrimester] = useState('First');
  const [severity, setSeverity] = useState(4);
  const [duration, setDuration] = useState('About a day');

  const toggleSymptom = (s) => {
    setSelectedSymptoms(prev => 
      prev.find(ps => ps.id === s.id) 
        ? prev.filter(ps => ps.id !== s.id)
        : [...prev, s]
    );
  };

  const filteredSymptoms = ALL_SYMPTOMS.filter(s => 
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getGuidanceData = () => {
    // Mock logic for guidance
    const isHighRisk = selectedSymptoms.some(s => ['bleeding', 'contractions', 'reduced_movement'].includes(s.id));
    if (isHighRisk) {
      return {
        riskLevel: 'High Risk',
        riskColor: 'text-red-600 bg-red-50',
        action: 'Contact Hospital Immediately',
        causes: ['Pre-term labor', 'Placental issues', 'Emergency complications'],
        tips: ['Stay calm', 'Pack essentials', 'Call your provider'],
        monitorFor: ['Increase in bleeding', 'Loss of consciousness', 'Severe abdominal pain']
      };
    }
    return {
      riskLevel: 'Low Risk',
      riskColor: 'text-green-600 bg-green-50',
      action: 'Monitor at Home',
      causes: ['Normal pregnancy symptoms', 'Hormonal changes', 'Physical adjustments to pregnancy'],
      tips: ['Get plenty of rest', 'Stay well hydrated', 'Eat balanced, small meals', 'Light exercise if approved by your doctor', 'Use relaxation techniques'],
      monitorFor: ['Significant increase in severity', 'New symptoms', 'Symptoms lasting more than a week']
    };
  };

  const guidance = getGuidanceData();

  return (
    <div className="min-h-screen pb-20 pt-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-500 font-semibold mb-8 hover:text-gray-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {currentStep === 'SYMPTOM_INTRO' && (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Symptom Checker</h1>
            <p className="text-gray-400 font-medium mb-8">Get quick guidance on symptoms and know when to seek care</p>
            
            <div className="bg-[#EBF5F9] border border-[#CCE8F1] rounded-2xl p-6 text-left flex gap-4 mb-12">
              <div className="w-8 h-8 flex-shrink-0">
                <ShieldAlert className="w-6 h-6 text-[#1D749B]" />
              </div>
              <p className="text-[#1D749B] text-xs leading-relaxed font-semibold">
                <span className="font-bold">Important:</span> This tool provides guidance, not a medical diagnosis. It cannot replace professional medical advice. If you're concerned about your symptoms, please contact your healthcare provider.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              {SYMPTOM_CHECKER_STEPS.map((step) => (
                <div key={step.number} className="flex items-start gap-6 text-left">
                  <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center text-[#D63D6C] font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-400 font-medium">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setCurrentStep('SYMPTOM_SELECT')}
              className="w-full bg-[#D63D6C] text-white py-5 rounded-2xl font-bold hover:bg-[#c2335f] transition-all"
            >
              Check Symptoms
            </button>
          </div>
        )}

        {currentStep === 'SYMPTOM_SELECT' && (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">What symptoms are you experiencing?</h2>
            <p className="text-gray-400 font-medium mb-8">Select all that apply</p>
            
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search symptoms..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D63D6C]/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {selectedSymptoms.length > 0 && (
              <div className="mb-8 p-6 bg-pink-50 rounded-2xl">
                <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Selected symptoms:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map(s => (
                    <button 
                      key={s.id}
                      onClick={() => toggleSymptom(s)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#D63D6C] text-white rounded-full text-sm font-semibold hover:bg-[#c2335f]"
                    >
                      {s.label} <X className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mb-12">
              {filteredSymptoms.map(s => {
                const isSelected = selectedSymptoms.find(ps => ps.id === s.id);
                return (
                  <button 
                    key={s.id}
                    onClick={() => toggleSymptom(s)}
                    className={`px-6 py-3 border rounded-2xl text-sm font-semibold transition-all ${
                      isSelected 
                        ? 'border-[#D63D6C] bg-[#D63D6C] text-white' 
                        : 'border-gray-100 hover:border-gray-200 text-gray-700'
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            <button 
              disabled={selectedSymptoms.length === 0}
              onClick={() => setCurrentStep('SYMPTOM_DETAILS')}
              className={`w-full py-5 rounded-2xl font-bold transition-all ${
                selectedSymptoms.length > 0 
                  ? 'bg-[#D63D6C] text-white hover:bg-[#c2335f]' 
                  : 'bg-pink-100 text-[#D63D6C]/40 cursor-not-allowed'
              }`}
            >
              Continue ({selectedSymptoms.length} symptoms selected)
            </button>
          </div>
        )}

        {currentStep === 'SYMPTOM_DETAILS' && (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border-[3px] border-[#00AEEF] relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">A few more details</h2>
            <p className="text-gray-400 font-medium mb-12">This helps us provide better guidance</p>

            <div className="space-y-12">
              <section>
                <h4 className="font-bold text-gray-900 mb-6">Which trimester are you in?</h4>
                <div className="space-y-6">
                  {['First trimester (week 1-12)', 'Second trimester (week 13-26)', 'Third trimester (week 27+)'].map((opt) => (
                    <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        trimester === opt.split(' ')[0] ? 'border-[#333] bg-[#333]' : 'border-gray-200 group-hover:border-gray-300'
                      }`}>
                        {trimester === opt.split(' ')[0] && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="trimester" 
                        className="hidden" 
                        checked={trimester === opt.split(' ')[0]} 
                        onChange={() => setTrimester(opt.split(' ')[0])} 
                      />
                      <span className="text-gray-700 font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="font-bold text-gray-900 mb-6">How severe are the symptoms?</h4>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={severity}
                    onChange={(e) => setSeverity(parseInt(e.target.value))}
                    className="w-full accent-black h-2 rounded-full appearance-none transition-colors cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, black ${((severity - 1) / 9) * 100}%, #f3f4f6 ${((severity - 1) / 9) * 100}%)`
                    }}
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-400">
                    <span>Mild</span>
                    <span className="text-orange-400">Moderate ({severity}/10)</span>
                    <span>Severe</span>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="font-bold text-gray-900 mb-6">How long have the symptoms lasted?</h4>
                <div className="space-y-6">
                  {['A few hours', 'About a day', 'Several days', 'A week or more'].map((opt) => (
                    <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        duration === opt ? 'border-[#333] bg-[#333]' : 'border-gray-200 group-hover:border-gray-300'
                      }`}>
                        {duration === opt && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="duration" 
                        className="hidden" 
                        checked={duration === opt} 
                        onChange={() => setDuration(opt)} 
                      />
                      <span className="text-gray-700 font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </section>
            </div>

            <button 
              onClick={() => setCurrentStep('SYMPTOM_RESULT')}
              className="w-full mt-12 bg-[#D63D6C] text-white py-5 rounded-2xl font-bold hover:bg-[#c2335f] transition-all"
            >
              Get Guidance
            </button>
          </div>
        )}

        {currentStep === 'SYMPTOM_RESULT' && (
          <div className="space-y-6">
            <div className="bg-[#EBF5F9] border border-[#CCE8F1] rounded-2xl p-4 flex gap-3">
              <ShieldAlert className="w-5 h-5 text-[#1D749B] flex-shrink-0" />
              <p className="text-[#1D749B] text-xs font-bold leading-relaxed">
                <span className="font-bold">Remember:</span> This is not a medical diagnosis. Always consult with a healthcare professional for medical advice.
              </p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border border-green-100 flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-green-400">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <span className="px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Low Risk</span>
                <h3 className="text-xl font-bold text-green-700 mt-1">{guidance.action}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
                <h4 className="font-bold text-gray-800 mb-4">Your Symptoms</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {selectedSymptoms.map(s => (
                    <span key={s.id} className="px-4 py-2 bg-gray-50 border border-gray-100 text-gray-700 text-xs font-bold rounded-xl">{s.label}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
                <h4 className="font-bold text-gray-800 mb-4">Possible Causes</h4>
                <ul className="text-xs text-gray-500 font-medium space-y-2">
                  {guidance.causes.map(c => <li key={c}>• {c}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-[#EBF9F2] rounded-3xl p-8 border border-green-100">
              <h4 className="font-bold text-green-800 mb-2">Where to seek care</h4>
              <p className="text-green-600 text-sm font-medium leading-relaxed">
                Mention these symptoms at your next prenatal appointment. Contact your provider if symptoms worsen.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6">Home care Tips</h4>
              <div className="space-y-4">
                {guidance.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6">Monitor For</h4>
              <div className="space-y-4">
                {guidance.monitorFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-md transition-all group">
                <MapPin className="w-6 h-6 text-gray-400 group-hover:text-[#D63D6C]" />
                <span className="font-bold text-gray-700">Find Nearby Hospitals</span>
              </button>
              <button className="w-full flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-md transition-all group">
                <Users className="w-6 h-6 text-gray-400 group-hover:text-[#D63D6C]" />
                <span className="font-bold text-gray-700">Talk to Community</span>
              </button>
              <button className="w-full flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-md transition-all group">
                <History className="w-6 h-6 text-gray-400 group-hover:text-[#D63D6C]" />
                <span className="font-bold text-gray-700">Save to Health History</span>
              </button>
            </div>

            <div className="text-center pt-8">
               <button 
                onClick={() => setCurrentStep('SYMPTOM_SELECT')}
                className="text-gray-900 font-bold underline mb-4 inline-block"
               >
                 Check Different Symptoms
               </button>
               <p className="text-[10px] text-gray-400 font-medium max-w-md mx-auto leading-relaxed">
                 Emergency: If you have severe chest pain, difficulty breathing, heavy bleeding or you feel that something is seriously wrong call 911 immediately
               </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomFlow;
