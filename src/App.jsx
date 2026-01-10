import Home from './components/home/Home'
import MainRender from './dashboard/MainRender'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landingpage/LandingPAge'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<MainRender />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
