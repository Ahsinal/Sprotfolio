import "./profile.scss";
// import { init } from 'ityped'
import TypewriterComponent from "typewriter-effect";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Loop,
  Reddit,
  WhatsApp,
} from "@mui/icons-material";
import { useEffect, useRef } from "react";
import {Container, Col, Row, Button } from "react-bootstrap";
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
    <>
      <section>
        <Container fluid className="intro" id="profile" >
          <Row  className="d-flex align-items-center">
            <Col lg={6} sm={12}>
              <div className="imgContainer">
                <img src="assets/sp2.png" alt="" />
              </div>
            </Col>
            <Col lg={6} sm={12} className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Sagar Parajuli</h1>
              <h3>
                QA
                <span>
                  <TypewriterComponent
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Engineer")
                        .deleteAll()
                        .pauseFor(50)
                        .start();
                    }}
                  />
                </span>
              </h3>
              <p>
                "Enhancing software quality with meticulous testing and
                innovative solutions. Committed to ensuring reliability and
                functionality for superior user experiences. Dedicated to
                excellence in every code line."
              </p>
              <div className="social-links">
                <Facebook className="icon" />
                <LinkedIn className="icon" />
                <GitHub className="icon" />
                <WhatsApp className="icon" />
                <Reddit className="icon" />
              </div>
              <div className="mt-4">
                <a href="assets/cv.pdf" download="cv.pdf">
                  <Button variant="outline-info" className="me-4">Download CV</Button>
                </a>
                <Button style={{backgroundColor:"rgba(31, 37, 128, 0.85)"}}>Guidance</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
