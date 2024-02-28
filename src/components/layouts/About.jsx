import { Container, Row, Col } from "react-bootstrap";
import { FaSchool } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
const About = () => {
  const eduData = [
    {
      id: "1",
      batch: "2024-Present",
      course: "Project Management in Information Technology",
      collage: "Lambton Collage in Toronto",
    },
    {
      id: "2",
      batch: "2018-2022",
      course: "BSc.Computer Science and Information Technology",
      collage: "Tribhuvan University",
    },
  ];
  const expData = [
    {
      id: "1",
      year: "Jul 2022 - Present",
      company: "Zebec Protocol",
      designation: "Software QA Engineer",
    },
    {
      id: "2",
      year: "Feb 2021 - Jun 2022",
      company: "Swift Technology Pvt. Ltd.",
      designation: "Software QA Engineer",
    },
    {
      id: "3",
      year: "Aug 2019 - Jan 2021",
      company: "LVF Technology Pvt. Ltd.",
      designation: "Associate Software QA Engineer",
    },
  ];
  return (
    <>
      <section className="about mt-3" id="about">
        <Container>
          <h6 className="text-prime"> About Me</h6>
          <div className="mb-4">
            <p className="p-about">
              My name is Sagar Parajuli. I am a Computer Science Engineer who is
              very passionate about Software Quality Testing. I started my
              career back in 2021 A. D. from a Multi-National Company in Nepal
              as an Intern in Software Quality Assurance. Currently, I am
              working as Software Engineer QA at Swift Technology Pvt. Ltd. In
              between, I got an opportunity to serve many companies. Having
              worked at various companies, from a startup to Multi-National
              Companies, one thing I have realized is that
              <br />
              <br />
              “Testing is not just creating and validating test cases rather
              it’s a continuous process to improve the quality of a software”. I
              believe in helping people to be a better version of themselves.
            </p>
          </div>
          <Row className=" gx-5">
            <Col lg={6} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-2 text-prime">
                <MdWork className="h4" />
                <h6>Work Experience</h6>
              </div>
              <div className="ps-3 ">
                {expData.map((d, i) => {
                  return (
                    <div
                      className="d-flex box py-3 gap-5 align-items-center"
                      key={i}
                    >
                      <div className="circle">{d.id}</div>
                      <div className="content">
                        <p>{d.year}</p>
                        <h6 className="my-1">{d.company}</h6>
                        <p className="small">{d.designation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <div className="d-flex align-items-center  gap-2 mb-2 text-prime">
                <FaSchool className="h4" />
                <h6>Education</h6>
              </div>
              {eduData.map((d, i) => {
                return (
                  <div
                    className="d-flex box py-3 gap-5 align-items-center"
                    key={i}
                  >
                    <div className="circle">{d.id}</div>
                    <div className="content">
                      <p>{d.batch}</p>
                      <h6 className="my-1">{d.course}</h6>
                      <p className="small">{d.collage}</p>
                    </div>
                  </div>
                );
              })}
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
