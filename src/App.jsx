import Home from './components/home/Home'
import MainRender from './dashboard/MainRender'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './landingpage/LandingPAge'
import Profile from './profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Landing Page (The entry point) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* 2. Main App Gateway 
            We use /app to match your navigate('/app') calls. 
            MainRender will handle the sub-views like COMMUNITY_INTRO 
            using the ?view= search parameter. */}
        <Route path="/app" element={<MainRender />} />
        
        {/* 3. Other Main Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        
        {/* 4. Legacy Support 
            If you have old links pointing to /dashboard, 
            this will automatically send them to /app instead. */}
        <Route path="/dashboard" element={<Navigate to="/app" replace />} />

        {/* 5. 404 Redirect 
            If a user types a wrong URL, send them back to the landing page */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App