import React from "react";


export const COLORS = {
  primary: "#D84374", // The signature Bump2Baby Pink
  secondary: "#5C5C5C",
  accentBlue: "#3B82F6",
  background: "#FAFAFA",
};

export const MOCK_HOSPITALS = [
  {
    id: "1",
    name: "Sunrise Women's Health Center",
    distance: "0.8 km",
    rating: 4.9,
    type: "Private",
    address: "789 Wellness Way, San Francisco, CA 94104",
    phone: "(415) 555-0789",
    categories: [
      "Maternity",
      "Pediatrics",
      "Parental Care",
      "Lactation Support",
    ],
    lat: 37.785,
    lng: -122.406,
  },
  {
    id: "2",
    name: "Mercy Family Hospital",
    distance: "2.9 km",
    rating: 4.7,
    type: "Private",
    address: "753 Family Ave, San Francisco, CA 94109",
    phone: "(415) 555-0290",
    categories: ["Maternity", "Pediatrics", "Emergency"],
    lat: 37.792,
    lng: -122.415,
  },
  {
    id: "3",
    name: "St. Jude Children's Hospital",
    distance: "1.2 km",
    rating: 5.0,
    type: "Public",
    address: "101 Healing St, San Francisco, CA 94103",
    phone: "(415) 555-0101",
    categories: ["Pediatrics", "Special Care"],
    lat: 37.778,
    lng: -122.412,
  },
  {
    id: "4",
    name: "Golden Gate Maternal Clinic",
    distance: "4.5 km",
    rating: 4.5,
    type: "Private",
    address: "22 Ocean Blvd, San Francisco, CA 94121",
    phone: "(415) 555-0450",
    categories: ["Maternity", "Prenatal Care"],
    lat: 37.781,
    lng: -122.485,
  },
];

export const Icons = {
  Search: () => (
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  Filter: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  ),
  Bell: () => (
    <svg
      className="w-6 h-6 text-gray-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
  Location: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Pin: ({ className }) => (
    <svg
      className={className || "w-6 h-6 text-red-500"}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  ),
  Back: () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  ),
  Phone: ({ className }) => (
    <svg
      className={className || "w-4 h-4"}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  ),
  Direction: ({ className }) => (
    <svg
      className={className || "w-4 h-4"}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  ),
};
