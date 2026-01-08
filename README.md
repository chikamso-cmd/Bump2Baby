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

## Project Structure

```
Bump2Baby/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets
│   │   └── react.svg
│   ├── components/      # React components
│   │   ├── home/
│   │   │   └── Home.jsx
│   │   ├── ProgressBar.jsx
│   │   └── Steps.jsx
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
