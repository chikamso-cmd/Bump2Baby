/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

const toRad = (value) => {
  return (value * Math.PI) / 180;
};

/**
 * Fetch hospitals from Overpass API
 * @param {number} latitude - User's latitude
 * @param {number} longitude - User's longitude
 * @param {number} radius - Search radius in meters (default: 10000m = 10km)
 * @returns {Promise<Array>} Array of hospital objects
 */
export const fetchHospitals = async (latitude, longitude, radius = 10000) => {
  if (!latitude || !longitude) {
    console.error("Invalid coordinates provided to fetchHospitals");
    return [];
  }

  const endpoints = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
    "https://lz4.overpass-api.de/api/interpreter",
  ];

  // Overpass API query for hospitals, clinics, and maternity facilities
  // Adding [out:json][timeout:25]; and out center; to get way centers directly
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="hospital"](around:${radius},${latitude},${longitude});
      node["amenity"="clinic"](around:${radius},${latitude},${longitude});
      node["healthcare"="maternity"](around:${radius},${latitude},${longitude});
      way["amenity"="hospital"](around:${radius},${latitude},${longitude});
      way["amenity"="clinic"](around:${radius},${latitude},${longitude});
      way["healthcare"="maternity"](around:${radius},${latitude},${longitude});
    );
    out center;
  `;

  for (const endpoint of endpoints) {
    try {
      console.log(`Attempting to fetch hospitals from: ${endpoint}`);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `data=${encodeURIComponent(query)}`,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn(
          `Endpoint ${endpoint} failed: ${response.status} ${errorText}`
        );
        continue; // Try next endpoint
      }

      const data = await response.json();

      if (!data.elements) {
        console.warn(`No elements in response from ${endpoint}`);
        continue;
      }

      // Transform Overpass data to our app's format
      const hospitals = transformOverpassData(
        data.elements,
        latitude,
        longitude
      );
      return hospitals;
    } catch (error) {
      console.error(`Error fetching from ${endpoint}:`, error);
      // Continue to next endpoint
    }
  }

  throw new Error("Failed to fetch hospital data from all available sources.");
};

/**
 * Transform Overpass API data to app's hospital format
 * @param {Array} elements - Overpass API elements
 * @param {number} userLat - User's latitude
 * @param {number} userLon - User's longitude
 * @returns {Array} Transformed hospital objects
 */
const transformOverpassData = (elements, userLat, userLon) => {
  const hospitals = [];
  const seenIds = new Set();

  elements.forEach((element) => {
    // Skip if not a node or way, or if we've already processed this element
    if (
      (!element.type === "node" && !element.type === "way") ||
      !element.tags
    ) {
      return;
    }

    // Skip duplicates
    if (seenIds.has(element.id)) {
      return;
    }
    seenIds.add(element.id);

    const tags = element.tags;

    // Only process if it has a name
    if (!tags.name) {
      return;
    }

    // Calculate coordinates (prioritize center property if available, like for ways with out center)
    let lat = element.lat;
    let lon = element.lon;

    if (element.center) {
      lat = element.center.lat;
      lon = element.center.lon;
    }

    if (lat === undefined || lon === undefined) {
      return; // Skip if we can't determine coordinates
    }

    // Calculate distance from user
    const distance = calculateDistance(userLat, userLon, lat, lon);

    // Determine hospital type
    let type = "Public";
    if (tags.operator_type === "private" || tags.healthcare === "private") {
      type = "Private";
    }

    // Determine categories
    const categories = [];
    if (tags.amenity === "hospital" || tags.healthcare === "hospital") {
      categories.push("Emergency");
    }
    if (
      tags.healthcare === "maternity" ||
      tags.name.toLowerCase().includes("maternity")
    ) {
      categories.push("Maternity");
    }
    if (tags.amenity === "clinic" || tags.healthcare === "clinic") {
      categories.push("Pediatrics");
    }
    if (categories.length === 0) {
      categories.push("General Care");
    }

    // Build address
    const addressParts = [];
    if (tags["addr:street"]) addressParts.push(tags["addr:street"]);
    if (tags["addr:housenumber"]) addressParts.push(tags["addr:housenumber"]);
    if (tags["addr:city"]) addressParts.push(tags["addr:city"]);
    if (tags["addr:postcode"]) addressParts.push(tags["addr:postcode"]);

    const address =
      addressParts.length > 0
        ? addressParts.join(", ")
        : tags.address || "Address not available";

    // Create hospital object
    const hospital = {
      id: `osm-${element.type}-${element.id}`,
      name: tags.name,
      distance: `${distance.toFixed(1)} km`,
      distanceValue: distance, // For sorting and filtering
      rating: tags.rating ? parseFloat(tags.rating) : 4.0, // Default rating if not available
      type: type,
      address: address,
      phone: tags.phone || tags["contact:phone"] || "Not available",
      categories: categories,
      lat: lat,
      lng: lon,
      website: tags.website || tags["contact:website"] || null,
      emergency: tags.emergency === "yes",
      wheelchair: tags.wheelchair === "yes",
      beds: tags.beds || null,
    };

    hospitals.push(hospital);
  });

  // Sort by distance
  hospitals.sort((a, b) => a.distanceValue - b.distanceValue);

  return hospitals;
};

/**
 * Get default location (San Francisco) if geolocation fails
 * @returns {Object} Default location coordinates
 */
export const getDefaultLocation = () => {
  return {
    latitude: 37.7749,
    longitude: -122.4194,
  };
};
