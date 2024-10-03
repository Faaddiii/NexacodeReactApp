import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Navbar from './Components/Navbars/Navbar';
import BackgroundVideo from './Components/Background/BackgroundVideo';
import IconCloudDemo from './Components/AnimationComponents/IconCloudDemo';
import FixedFooter from './Components/Footer/FixedFooter';
import Home from './Components/Home/Main';
import Portfoliodemo from "./Components/Portfolio/Portfoliodemo";
import PortfolioNavbar from "./Components/Navbars/PortfolioNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedCursor />
        <Routes>
          <Route path="/" element={<><Navbar /><BackgroundVideo /><IconCloudDemo /><Home /></>} />
          <Route path="/portfolio" element={<><PortfolioNavbar /><BackgroundVideo /><Portfoliodemo /></>} />
        </Routes>
        <FixedFooter />
      </div>
    </Router>
  );
}

export default App;
