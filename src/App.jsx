import Home from "./components/home/Home";
import MainRender from "./dashboard/MainRender";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage/LandingPAge";
import Profile from "./profile/Profile";
import CommunityFeed from "./dashboard/components/communityFeed";
import CreatePost from "./dashboard/components/communityCreatePost";
import HospitalFinder from "./hospital/HospitalFinder";
import AboutUs from "./landingpage/AboutUs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<MainRender />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<CommunityFeed />} />
          <Route path="/community/create" element={<CreatePost />} />
          <Route path="/hospital" element={<HospitalFinder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
