import { useState, useEffect } from "react";

/**
 * Custom hook to get user's geolocation
 * @returns {Object} { location, loading, error }
 */
export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    const successHandler = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      });
      setLoading(false);
      setError(null);
    };

    const errorHandler = (err) => {
      let errorMessage = "Unable to retrieve your location";

      switch (err.code) {
        case err.PERMISSION_DENIED:
          errorMessage =
            "Location permission denied. Please enable location access.";
          break;
        case err.POSITION_UNAVAILABLE:
          errorMessage = "Location information is unavailable.";
          break;
        case err.TIMEOUT:
          errorMessage = "Location request timed out.";
          break;
        default:
          errorMessage = "An unknown error occurred.";
      }

      setError(errorMessage);
      setLoading(false);
    };

    // Get current position
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  }, []);

  return { location, loading, error };
};
