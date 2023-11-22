import Navbar from "./components/navbar/Navbar";
import Intro from './components/intro/Intro'
import Protfolio from './components/protfolio/Protfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact"
import "./app.scss"
function App() {
  return (
  <div className="app">
    <Navbar/>
    <div className="sections">
      <Intro/>
      <Protfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </div>
  </div>
  );
}

export default App;
