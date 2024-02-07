import "./profile.scss";
// import { init } from 'ityped'
import TypewriterComponent from "typewriter-effect";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Reddit,
  WhatsApp,
} from "@mui/icons-material";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef(null);

  // useEffect(()=>{
  //   const textElement=textRef.current;
  //   let typed;
  //   if(textElement){
  //     typed=init(textElement, {
  //       backDelay:1500,
  //       showCursor:true,
  //       strings: ['Associate', 'Engineer','Tester'],
  //     });
  //   }
  //     return ()=>{
  //       if(typed ){
  //         typed.destroy();
  //       }
  //     };
  // },[]);
  return (
    <div className="intro" id="profile">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/sp2.png" alt=""  />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sagar Parajuli</h1>
          <h3>
            QA{" "}
            <span>
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Engineer")
                    .deleteAll()
                    .pauseFor(100)
                    .start();
                }}
              />
            </span>
          </h3>
          <p>
            "Enhancing software quality with meticulous testing and innovative
            solutions. Committed to ensuring reliability and functionality for
            superior user experiences. Dedicated to excellence in every code
            line."
          </p>

          <div className="social-links">
            <Facebook className="icon" />
            <LinkedIn className="icon" />
            <GitHub className="icon" />
            <WhatsApp className="icon" />
            <Reddit className="icon" />
          </div>

          <div className="buttonContainer">
            <a href="assets/cv.pdf" download="cv.pdf">
              <button className="left">Download CV</button>
            </a>
            <button className="right">Guidance</button>
          </div>
        </div>
        {/* <a href="#protfolio">
            <ExpandCircleDownIcon className='icon'/>
          </a> */}
      </div>
    </div>
  );
};

export default Intro;
