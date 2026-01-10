import Home from './components/home/Home'
import MainRender from './dashboard/MainRender'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landingpage/LandingPAge'
import Profile from './profile/Profile'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<MainRender />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
