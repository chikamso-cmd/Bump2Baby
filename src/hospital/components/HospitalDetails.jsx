import React from "react";
import { Icons } from "../../Constant";
import { MapPin, Phone, Star, Navigation, ShieldAlert } from "lucide-react";

const HospitalDetails = ({ hospital, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 md:px-0 py-8 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Back Link */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 font-semibold mb-8 hover:text-gray-800 transition-colors"
      >
        <Icons.Back />
        <span>Back to Hospitals</span>
      </button>

      {/* Header Card */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              {hospital.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-base font-bold text-gray-900">
                  {hospital.rating}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  Rating
                </span>
              </div>

              <div className="h-4 w-px bg-gray-200"></div>

              <div className="px-4 py-1.5 bg-pink-50 border border-pink-200 rounded-full">
                <span className="text-sm font-bold text-[#D63D6C]">
                  {hospital.type} Hospital
                </span>
              </div>

              <div className="h-4 w-px bg-gray-200"></div>

              <div className="flex items-center gap-2 text-[#00AEEF]">
                <Navigation className="w-4 h-4" />
                <span className="text-sm font-bold">
                  {hospital.distance} away
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 bg-[#D63D6C] text-white py-4 px-6 rounded-2xl font-bold text-base hover:bg-[#c2335f] active:scale-[0.98] transition-all shadow-sm">
            <Navigation className="w-5 h-5" />
            <span>Get Directions</span>
          </button>
          <button className="flex items-center justify-center gap-3 bg-[#059669] text-white py-4 px-6 rounded-2xl font-bold text-base hover:bg-[#048558] active:scale-[0.98] transition-all shadow-sm">
            <Phone className="w-5 h-5" />
            <span>Call Hospital</span>
          </button>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Address Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-2xl">
              <MapPin className="w-5 h-5 text-[#00AEEF]" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Address</h2>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed">
            {hospital.address.split(",").map((part, i) => (
              <React.Fragment key={i}>
                {part.trim()}
                {i < hospital.address.split(",").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-50 rounded-2xl">
              <Phone className="w-5 h-5 text-[#059669]" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Contact</h2>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed">
            {hospital.phone}
          </p>
          <button className="mt-4 text-[#059669] text-sm font-bold hover:underline">
            Save to Contacts
          </button>
        </div>
      </div>

      {/* Available Services */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Available Services
        </h2>
        <div className="flex flex-wrap gap-3">
          {hospital.categories.map((service, index) => (
            <span
              key={index}
              className="px-5 py-2.5 bg-gray-50 border border-gray-100 text-gray-700 rounded-2xl text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Emergency Note */}
      <div className="bg-[#EBF5F9] border border-[#CCE8F1] rounded-3xl p-6 flex gap-4">
        <div className="w-8 h-8 flex-shrink-0">
          <ShieldAlert className="w-6 h-6 text-[#1D749B]" />
        </div>
        <p className="text-[#1D749B] text-sm leading-relaxed font-semibold">
          <span className="font-bold">Emergency Notice:</span> In case of a
          medical emergency, please call 911 immediately or visit the nearest
          emergency room. Do not delay seeking immediate medical attention.
        </p>
      </div>
    </div>
  );
};

export default HospitalDetails;
