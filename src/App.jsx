import "./app.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import from react-router-dom
import Navbar from "./components/navbar/Header";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Services from "./components/services/Services";
import PortfolioSlider from "./components/protfolio/PortfolioSlider";
import Footer from "./components/footer/Footer";
import Home from "./Home"; // Assuming Home is a component you've defined
import Certificates from "./components/certificates/Certificates";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
