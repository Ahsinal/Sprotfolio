import { Container, Row, Col } from "react-bootstrap";
import { FaSchool } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
const About = () => {
  return (
    <>
      <section className="about mt-3" id="about">
        <Container>
          <h6 className="text-prime"> About Me</h6>
          <div className="mb-4">
            <p className="p-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum exercitationem beatae nostrum eum recusandae quidem
              laudantium excepturi, possimus blanditiis eveniet quibusdam
              doloremque autem maiores quasi qui eos maxime necessitatibus. In,
              quis! Illum accusantium eius sunt cumque eaque assumenda. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <p className="p-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              rerum exercitationem beatae nostrum eum recusandae quidem
              laudantium excepturi, possimus blanditiis eveniet quibusdam
              doloremque autem maiores quasi qui eos maxime necessitatibus. In,
              quis! Illum accusantium eius sunt cumque eaque assumenda. Quisquam
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <Row className=" g-5">
            <Col lg={6} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-2 text-prime">
                <FaSchool className="h3" />
                <h5>Education</h5>
              </div>
              <div className="d-flex box py-3 gap-5 align-items-center">
                <div className="circle">03</div>
                <div className="content">
                  <p>2018 - 2022</p>
                  <h5 className="my-1">LVF</h5>
                  <p>Collage Name</p>
                </div>
              </div>
              <div className="d-flex box py-3 gap-5 align-items-center">
                <div className="circle">03</div>
                <div className="content">
                  <p>2018 - 2022</p>
                  <h5 className="my-1">LVF</h5>
                  <p>Collage Name</p>
                </div>
              </div>
              {/* <div className="ps-3 ">
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
              </div> */}
            </Col>
            <Col lg={6} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-2 text-prime">
                <MdWork className="h3" />
                <h5>Work Experience</h5>
              </div>
              <div className="ps-3 ">
                <div className="d-flex box py-3 gap-5 align-items-center">
                  <div className="circle">03</div>
                  <div className="content">
                    <p>2018 - 2022</p>
                    <h5 className="my-1">LVF</h5>
                    <p>position</p>
                  </div>
                </div>
                <div className="d-flex box py-3 gap-5 align-items-center">
                  <div className="circle">03</div>
                  <div className="content">
                    <p>2018 - 2022</p>
                    <h5 className="my-1">LVF</h5>
                    <p>position</p>
                  </div>
                </div>
                <div className="d-flex box py-3 gap-5 align-items-center">
                  <div className="circle">03</div>
                  <div className="content">
                    <p>2018 - 2022</p>
                    <h5 className="my-1">LVF</h5>
                    <p>position</p>
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col lg={5} sm={12} className="pt-5">
  
              <h6 className="mb-3">Work Experience</h6>
              <div className="d-flex box py-3 gap-5 align-items-center mb-4">
                <div className="circle">01</div>
                <div className="content">
                  <p> Jan 2024 - Present</p>
                  <h5>Zebec</h5>
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
