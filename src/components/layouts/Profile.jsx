import { Container, Col, Row, Button } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
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
                <span
                  className="ms-1"
                  style={{ color: "#1E2581", fontWeight: "bold" }}
                >
                  {/* Software QA Engineer */}
                </span>
              </h3>
              <p>
                "Ensuring top-notch software with meticulous testing and
                creative solutions. Committed to ensuring reliability and
                functionality for superior user experiences. Dedicated to
                excellence in every line of code. "
              </p>
              <div className="d-flex gap-2 h4 mb-3">
                <a href="/" as="Link" target="blank">
                  <FaFacebook className="text-prime " />
                </a>
                <a href="/" as="Link" target="blank">
                  <FaLinkedin className="text-prime " />
                </a>
                <a href="/" as="Link" target="blank">
                  <FaGithub className="text-prime " />
                </a>
                <a href="/" as="Link" target="blank">
                  <FaWhatsapp className="text-prime " />
                </a>
              </div>
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
