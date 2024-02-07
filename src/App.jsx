import Navbar from "./components/navbar/Header";
import Profile from "./components/profile/Profile";
import Protfolio from "./components/protfolio/Protfolio";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import { Button } from "react-bootstrap";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Profile />
        <About />
        <Protfolio />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
