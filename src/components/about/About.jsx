import React from "react";
import "./about.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Loop,
  Reddit,
  WhatsApp,
  School,
  Work,
  Verified,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
const About = () => {
  return (
    <>
      <section className="about py-5" id="about">
        <Container>
          <h6 style={{ color: "rgb(31, 37, 128)" }}> About Me</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum
            exercitationem beatae nostrum eum recusandae quidem laudantium
            excepturi, possimus blanditiis eveniet quibusdam doloremque autem
            maiores quasi qui eos maxime necessitatibus. In, quis! Illum
            accusantium eius sunt cumque eaque assumenda. Quisquam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Unde rerum
            exercitationem beatae nostrum eum recusandae quidem laudantium
            excepturi, possimus blanditiis eveniet quibusdam doloremque autem
            maiores quasi qui eos maxime necessitatibus. In,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum
            exercitationem beatae nostrum eum recusandae quidem laudantium
            excepturi, possimus blanditiis eveniet quibusdam doloremque autem
            maiores quasi qui eos maxime necessitatibus. In, quis! Illum
            accusantium eius sunt cumque eaque assumenda. Quisquam Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Unde rerum
            exercitationem beatae nostrum eum recusandae quidem laudantium
            excepturi, possimus blanditiis eveniet quibusdam doloremque autem
            maiores quasi qui eos maxime necessitatibus. In,
          </p>
          <Row className=" g-4">
            <Col lg={6} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-3 ">
                <School className="h3" />
                <h4>Education</h4>
              </div>
              <div className="ps-3 ">
                <div className="box-edu  p-3 mb-3">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">Project Management in IT</h6>
                  <h6 className="fw-normal">Lambton Collage,Toronto</h6>
                </div>
                <div className="box-edu  p-3 ">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">BSC. CSIT</h6>
                  <h6 className="fw-normal">Lambton Collage,Toronto</h6>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-3 ">
                <Work className="h5" />
                <h4>Work Experience</h4>
              </div>
              <div className="ps-3 ">
                <div className="box-edu  p-3 mb-3">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">Zebec</h6>
                  <h6 className="fw-normal">Sr. QA</h6>
                </div>
                <div className="box-edu  p-3 mb-3">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">BSC. CSIT</h6>
                  <h6 className="fw-normal">Software QA Engineer</h6>
                </div>
                <div className="box-edu  p-3 ">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">LVF Technology</h6>
                  <h6 className="fw-normal">Software QA Engineer</h6>
                </div>
              </div>
            </Col>
            {/* <Col lg={4} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-3 ">
                <Verified className="h5" />
                <h4>Certifications</h4>
              </div>
              <div className="ps-3 ">
                <div className="box-edu  p-3 mb-3">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">Zebec</h6>
                  <h6 className="fw-normal">Sr. QA</h6>
                </div>
                <div className="box-edu  p-3 mb-3">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">BSC. CSIT</h6>
                  <h6 className="fw-normal">Software QA Engineer</h6>
                </div>
                <div className="box-edu  p-3 ">
                  <p>Jan 2024 - Present</p>
                  <h6 className="mt-2">LVF Technology</h6>
                  <h6 className="fw-normal">Software QA Engineer</h6>
                </div>
              </div>
            </Col> */}
            {/* <Col lg={5} sm={12} className="pt-5">
  
              <h6 className="mb-3">Work Experience</h6>
              <div className="d-flex box py-3 gap-5 align-items-center mb-4">
                <div className="circle">01</div>
                <div className="content">
                  <p> Jan 2024 - Present</p>
                  <h5>Zebec</h5>
                </div>
              </div>
              <div className="d-flex box py-3 gap-5 align-items-center mb-4">
                <div className="circle">02</div>
                <div className="content">
                  <p>2018 - 2022</p>
                  <h5>Swift</h5>
                </div>
              </div>
              <div className="d-flex box py-3 gap-5 align-items-center mb-4">
                <div className="circle">03</div>
                <div className="content">
                  <p>2018 - 2022</p>
                  <h5>LVF</h5>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
