import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import SoftwareServices from "./pages/SoftwareServices";
import CyberSecurityServices from "./pages/CyberSecurityServices";
import InfrastructureServices from "./pages/InfrastructureServices";
import FounderInfo from "./pages/FounderInfo";



import Services from "./pages/Services";
import Founder from "./pages/Founder";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/software" element={<SoftwareServices />} />
        <Route path="/cybersecurity" element={<CyberSecurityServices />} />
        <Route path="/it-services" element={<InfrastructureServices />} />
        <Route path="/founder" element={<FounderInfo />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;