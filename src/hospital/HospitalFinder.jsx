import React, { useState, useMemo } from "react";
import HospitalCard from "./components/HospitalCard";
import MapSection from "./components/MapSection";
import FilterPopover from "./components/FilterPopover";
import HospitalDetails from "./components/HospitalDetails";
import { MOCK_HOSPITALS, Icons } from "../Constant";

const HospitalFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [filters, setFilters] = useState({
    maxDistance: 20,
    minRating: 0,
    hospitalType: "All",
  });

  const filteredHospitals = useMemo(() => {
    return MOCK_HOSPITALS.filter((h) => {
      const matchesSearch =
        h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.address.toLowerCase().includes(searchQuery.toLowerCase());
      const distanceValue = parseFloat(h.distance.split(" ")[0]);
      const matchesDistance = distanceValue <= filters.maxDistance;
      const matchesRating = h.rating >= filters.minRating;
      const matchesType =
        filters.hospitalType === "All" || h.type === filters.hospitalType;

      return matchesSearch && matchesDistance && matchesRating && matchesType;
    });
  }, [searchQuery, filters]);

  const resetFilters = () => {
    setFilters({
      maxDistance: 20,
      minRating: 0,
      hospitalType: "All",
    });
  };

  const handleViewDetails = (hospital) => {
    setSelectedHospital(hospital);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col bg-transparent">
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        {selectedHospital ? (
          <HospitalDetails
            hospital={selectedHospital}
            onBack={() => setSelectedHospital(null)}
          />
        ) : (
          <>
            {/* Title Section */}
            <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-300">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Find Nearby Hospitals
              </h1>
              <p className="text-gray-500 text-sm">
                Discover maternal and child health facilities near you
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 relative">
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Icons.Search />
                </div>
                <input
                  type="text"
                  placeholder="Search by hospital name or location..."
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D84374] focus:ring-opacity-20 bg-[#FAFAFA] transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center space-x-2 px-6 py-3.5 border rounded-xl font-medium text-sm transition-all shadow-sm ${
                    showFilters
                      ? "bg-[#D84374] text-white border-[#D84374]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <Icons.Filter />
                  <span>Filters</span>
                </button>

                {showFilters && (
                  <FilterPopover
                    filters={filters}
                    onChange={setFilters}
                    onReset={resetFilters}
                    onClose={() => setShowFilters(false)}
                  />
                )}
              </div>
            </div>

            {/* Map Visualization */}
            <MapSection />

            {/* Results Section */}
            {filteredHospitals.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                  {filteredHospitals.map((hospital) => (
                    <HospitalCard
                      key={hospital.id}
                      hospital={hospital}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>

                <div className="flex flex-col items-center space-y-6">
                  <button className="text-[#3B82F6] font-bold text-sm hover:underline decoration-2 underline-offset-4">
                    Show All {MOCK_HOSPITALS.length} Hospitals
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <div className="max-w-xs mx-auto">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icons.Search />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    No hospitals found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Try adjusting your filters or search terms to find what
                    you're looking for.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="mt-6 text-[#D84374] font-bold text-sm hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-gray-100 mt-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-bold">Emergency?</span> Call 911 immediately
            or visit the nearest emergency room.
          </p>
          <p className="text-xs text-gray-400">
            Bump2Baby Hospital Finder . Maternal & Child Health Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HospitalFinder;
