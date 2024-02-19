import React,{useState} from "react";
import "./about.scss";
import Counter from "./Counter";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <section className="about py-5" id="about">
      <Container>
        <Row>
          <h3 className="text-center my-4"> About Me</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla,
            fugiat libero tenetur temporibus unde! Omnis deserunt rem quam sit
            ipsam odio ea commodi similique. Incidunt cupiditate itaque vel
            reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam, consequuntur explicabo! Commodi, expedita fuga? Eaque, qui
            animi! Molestiae, nobis rem ipsa laborum consectetur explicabo
            pariatur ducimus facere blanditiis fugiat a! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Exercitationem soluta at veniam
            et adipisci sint officia voluptas, eveniet a, quisquam eligendi ex
            molestiae accusantium consectetur facilis enim inventore unde dicta!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            cumque delectus optio praesentium similique ullam distinctio debitis
            eveniet harum, expedita porro officiis quo odit quaerat, quos
            voluptatem eligendi quae voluptatibus.
          </p>
        </Row>
        <Row className="d-flex align-items-center mt-4">
          <Col lg={6} sm={12} className="d-flex flex-column ">
            <div className="d-flex gap-4">
              <Counter />
            </div>
            <h5 className="mt-5 pb-2">Companies I've Worked with</h5>
            <div className="img-wrapper d-flex">
              <div className="image">
                <img
                  src="data:image/png;base64,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"
                  alt="comp1"
                  className="comp-img"
                />
              </div>

              <div className="image">
                <img
                  src="data:image/png;base64,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"
                  alt="comp1"
                  className="comp-img"
                />
              </div>

              <div className="image">
                <img
                  src="data:image/png;base64,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"
                  alt="comp1"
                  className="comp-img"
                />
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} className="bg-info">
            1
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
