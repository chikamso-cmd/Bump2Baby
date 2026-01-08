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

- **Pregnancy Tracking**: Track your pregnancy journey, weekly progress, and baby's development.
- **Symptom Checker**: Interactive tool to check symptoms, assess risk levels, and get guidance on next steps.
- **Dashboard**: Centralized hub to view your status, upcoming appointments, and access tools.
- **Responsive Design**: Mobile-friendly interface for easy access on any device.

## Project Structure

```
Bump2Baby/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets
│   │   └── react.svg
│   ├── components/      # Shared React components
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   ├── ProgressBar.jsx
│   │   └── Steps.jsx
│   ├── dashboard/       # Dashboard & Symptom Checker feature
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Header.jsx
│   │   │   └── SymptomFlow.jsx
│   │   ├── Constants.jsx
│   │   └── MainRender.jsx
│   ├── App.css          # App-wide styles
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles (Tailwind imports)
│   ├── main.jsx         # Entry point
│   └── types.js         # Type definitions/constants
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
