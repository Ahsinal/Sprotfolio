import React from "react";
import Profile from "./components/profile/Profile";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Services from "./components/services/Services";
import PortfolioSlider from "./components/protfolio/PortfolioSlider";
const Home = () => {
  return (
    <div className="app">
      <div className="sections">
        <Profile />
        <About />
        <Services />
        {/* <Tools /> */}
        {/* <Swipers/> */}
        <PortfolioSlider />
        {/* <Projects /> */}
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Home;
