# Bump2Baby

A React application for pregnancy tracking and information.

## Technology Stack

This project is built with the following technologies:

- **Core Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React, React Icons
- **Linting**: ESLint

## Features

- **Landing Page**: A comprehensive landing page featuring a hero section, feature highlights, and testimonials.
- **Pregnancy Tracking**: Track your pregnancy journey, weekly progress, and baby's development via the home dashboard.
- **Symptom Checker**: Interactive tool to check symptoms, assess risk levels, and get guidance on next steps.
- **User Profile Management**: Manage user details, preferences (including unit systems), and account actions.
- **Theme Support**: Integrated dark and light mode support across the application.
- **Responsive Navigation**: Optimized for both desktop and mobile, including a dedicated bottom navigation bar for mobile devices.

## Project Structure

```
Bump2Baby/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets
│   ├── components/      # Shared React components
│   │   ├── home/        # Home dashboard components
│   │   ├── BottomNav.jsx # Mobile-optimized navigation
│   │   ├── ProgressBar.jsx
│   │   └── Steps.jsx
│   ├── dashboard/       # Dashboard & Symptom Checker feature
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Header.jsx
│   │   │   └── SymptomFlow.jsx
│   │   ├── Constants.jsx
│   │   └── MainRender.jsx
│   ├── landingpage/     # Landing page components
│   │   ├── components/
│   │   │   ├── CTA.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Testimonial.jsx
│   │   └── LandingPAge.jsx
│   ├── profile/         # User profile management
│   │   ├── components/
│   │   │   ├── AccountsAction.jsx
│   │   │   ├── EditProfile.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Preference.jsx
│   │   │   ├── ProfileMain.jsx
│   │   │   ├── Toast.jsx
│   │   │   └── UI.jsx
│   │   └── Profile.jsx
│   ├── App.css          # App-wide styles
│   ├── App.jsx          # Main App component with routing
│   ├── index.css        # Global styles (Tailwind imports)
│   ├── main.jsx         # Entry point
│   └── types.js         # Type definitions and constants
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  **Build for production:**

    ```bash
    npm run build
    ```
