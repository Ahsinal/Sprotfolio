import Profile from "../components/layouts/Profile";
import Contact from "../components/layouts/Contact";
import About from "../components/layouts/About";
import Services from "../components/layouts/Services";
import Projects from "../components/layouts/Projects";
const Home = () => {
  return (
    <div className="app">
      <div className="sections">
        <Profile />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
