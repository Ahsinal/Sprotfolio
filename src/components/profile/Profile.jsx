import "./profile.scss";

import { useEffect, useRef } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
const Intro = () => {
  const textRef = useRef(null);

  return (
    <>
      <section className="mt-5 pt-4 intro" id="profile">
        <Container fluid>
          <Row className="d-flex align-items-center">
            <Col lg={6} sm={12}>
              <div className="imgContainer">
                <img src="assets/sp2.png" alt="" />
              </div>
            </Col>
            <Col lg={6} sm={12} className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>Sagar Parajuli</h1>
              <h3>
                a <span className="ms-1 text-info">Software QA Engineer</span>
              </h3>
              <p>
                "Enhancing software quality with meticulous testing and
                innovative solutions. Committed to ensuring reliability and
                functionality for superior user experiences. Dedicated to
                excellence in every code line."
              </p>
              {/* <div className="social-links">
                <Facebook className="icon" />
                <LinkedIn className="icon" />
                <GitHub className="icon" />
                <WhatsApp className="icon" />
              </div> */}
              <div className="">
                <a href="assets/cv.pdf" download="cv.pdf">
                  <Button variant="outline-info" className="me-4">
                    Download CV
                  </Button>
                </a>
                <Button style={{ backgroundColor: "rgba(31, 37, 128, 0.85)" }}>
                  Hire Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
