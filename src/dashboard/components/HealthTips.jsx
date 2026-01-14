import React, { useState } from "react";
import {
  ArrowLeft,
  Lightbulb,
  Check,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { HEALTH_TIPS_DATA } from "../HealthTipsData";

const HealthTips = ({ onBack }) => {
  const [expandedTip, setExpandedTip] = useState(null);

  const toggleTip = (tipId) => {
    setExpandedTip(expandedTip === tipId ? null : tipId);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "low":
        return "bg-green-50 text-green-700 border-green-200";
      case "medium":
        return "bg-orange-50 text-orange-700 border-orange-200";
      case "high":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 font-semibold mb-8 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center mb-8">
          <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Health Tips</h1>
          <p className="text-gray-400 font-medium mb-6">
            Expert advice and guidance for your health and wellness
          </p>

          {/* Disclaimer */}
          <div className="bg-[#EBF5F9] border border-[#CCE8F1] rounded-2xl p-6 text-left flex gap-4">
            <div className="w-8 h-8 flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-[#1D749B]" />
            </div>
            <p className="text-[#1D749B] text-xs leading-relaxed font-semibold">
              <span className="font-bold">Important:</span>{" "}
              {HEALTH_TIPS_DATA.appInfo.disclaimer}
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {HEALTH_TIPS_DATA.categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.tips.map((tip) => (
                  <div
                    key={tip.id}
                    className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {/* Tip Header */}
                    <button
                      onClick={() => toggleTip(tip.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">
                            {tip.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(
                              tip.severity
                            )}`}
                          >
                            {tip.severity}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {tip.summary}
                        </p>
                        <p className="text-xs text-gray-400 font-medium mt-2">
                          For: {tip.audience}
                        </p>
                      </div>
                      {expandedTip === tip.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {/* Expanded Content */}
                    {expandedTip === tip.id && (
                      <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100">
                        <div className="space-y-4">
                          {/* Guidance */}
                          <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-500" />
                              Guidance
                            </h4>
                            <ul className="space-y-2">
                              {tip.guidance.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm text-gray-700 font-medium"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#D63D6C] mt-2 flex-shrink-0"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* When to See Doctor (if applicable) */}
                          {tip.whenToSeeDoctor && (
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                When to See a Doctor
                              </h4>
                              <ul className="space-y-2">
                                {tip.whenToSeeDoctor.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm text-red-700 font-medium"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Last updated: {HEALTH_TIPS_DATA.appInfo.lastUpdated} • Version{" "}
            {HEALTH_TIPS_DATA.appInfo.version}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
