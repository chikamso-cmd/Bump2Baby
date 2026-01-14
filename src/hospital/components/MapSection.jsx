import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom pink hospital marker icon
const hospitalIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
      <path fill="#D84374" d="M12 0C7.802 0 4.403 3.403 4.403 7.602c0 5.927 7.597 16.398 7.597 16.398s7.597-10.471 7.597-16.398C19.597 3.403 16.198 0 12 0zm0 11.5c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
      <path fill="white" d="M13.5 6h-1v1.5H11V9h1.5v1.5h1V9H15V7.5h-1.5z"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Custom blue user location marker icon
const userIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="8" fill="#3B82F6" stroke="white" stroke-width="3"/>
      <circle cx="12" cy="12" r="3" fill="white"/>
    </svg>
  `),
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

// Component to handle map bounds and centering
const MapController = ({ hospitals, userLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (hospitals.length > 0 && userLocation) {
      const bounds = L.latLngBounds([
        [userLocation.latitude, userLocation.longitude],
        ...hospitals.map(h => [h.lat, h.lng])
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (userLocation) {
      map.setView([userLocation.latitude, userLocation.longitude], 13);
    }
  }, [hospitals, userLocation, map]);

  return null;
};

const MapSection = ({ hospitals = [], userLocation, onHospitalClick, loading }) => {
  // Default center (San Francisco)
  const defaultCenter = [37.7749, -122.4194];
  const center = userLocation 
    ? [userLocation.latitude, userLocation.longitude]
    : defaultCenter;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-900">Map View</h2>
        <span className="text-xs text-gray-500 font-medium">
          {loading ? 'Loading...' : `${hospitals.length} locations`}
        </span>
      </div>

      <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-gray-100">
        {loading ? (
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D84374] mx-auto mb-4"></div>
              <p className="text-sm text-gray-600">Loading map...</p>
            </div>
          </div>
        ) : (
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* User location marker */}
            {userLocation && (
              <Marker 
                position={[userLocation.latitude, userLocation.longitude]}
                icon={userIcon}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>Your Location</strong>
                  </div>
                </Popup>
              </Marker>
            )}

            {/* Hospital markers */}
            {hospitals.map((hospital) => (
              <Marker
                key={hospital.id}
                position={[hospital.lat, hospital.lng]}
                icon={hospitalIcon}
                eventHandlers={{
                  click: () => {
                    if (onHospitalClick) {
                      onHospitalClick(hospital);
                    }
                  },
                }}
              >
                <Popup>
                  <div className="text-sm max-w-xs">
                    <h3 className="font-bold text-gray-900 mb-1">{hospital.name}</h3>
                    <p className="text-gray-600 text-xs mb-2">{hospital.address}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{hospital.rating}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{hospital.distance}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {hospital.categories.slice(0, 3).map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-pink-50 text-[#D84374] text-xs rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    {onHospitalClick && (
                      <button
                        onClick={() => onHospitalClick(hospital)}
                        className="text-[#D84374] text-xs font-semibold hover:underline"
                      >
                        View Details →
                      </button>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}

            <MapController hospitals={hospitals} userLocation={userLocation} />
          </MapContainer>
        )}
      </div>

      {/* Legend */}
      {!loading && (
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Your Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#D84374]"></div>
            <span>Hospitals</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapSection;
