import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Intro = () => {
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
            <Col lg={6} sm={12} className="">
              <h2>Hi There, I'm</h2>
              <h1 className="display-3 fw-normal">Sagar Parajuli</h1>
              <h3>
                a <span className="ms-1 text-info">Software QA Engineer</span>
              </h3>
              <p>
                "Enhancing software quality with meticulous testing and
                innovative solutions. Committed to ensuring reliability and
                functionality for superior user experiences. Dedicated to
                excellence in every code line."
              </p>
              <div className="">
                <Link
                  href="assets/cv.pdf"
                  download="cv.pdf"
                  className="me-4 btn btn-outline-info btn-md"
                >
                  Download CV
                </Link>
                <Link
                  href="contact"
                  className="me-4 btn  btn-md text-white"
                  style={{"backgroundColor":"#1F2580"}}
                >
                  Hire Me
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
