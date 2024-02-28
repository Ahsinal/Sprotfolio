import { Container, Col, Row, Button } from "react-bootstrap";
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
                a
                <span className="ms-1" style={{ color: "#1E2581" }}>
                  Software QA Engineer
                </span>
              </h3>
              <p>
                "Enhancing software quality with meticulous testing and
                innovative solutions. Committed to ensuring reliability and
                functionality for superior user experiences. Dedicated to
                excellence in every code line."
              </p>
              <div className="">
                <a
                  as="Link"
                  href="assets/cv.pdf"
                  download="cv.pdf"
                  className="me-4 btn btn-outline "
                >
                  Download CV
                </a>
                <a
                  as="Link"
                  href="#contact"
                  className="me-4 btn  btn-md btn-block text-white"
                >
                  Hire Me
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Intro;
