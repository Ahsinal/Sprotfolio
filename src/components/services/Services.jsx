import "./services.scss";
import { Container, Row, Col } from "react-bootstrap";
const Services = () => {
  const data = [
    {
      id: "1",
      img: "/assets/api.jpeg",
      title: "API testing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemid perferendis debitis.",
    },
    {
      id: "2",
      img: "/assets/mobile.jpeg",
      title: "Mobile testing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemid perferendis debitis.",
    },
    {
      id: "3",
      img: "/assets/web.jpeg",
      title: "Web testing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemid perferendis debitis.",
    },
    {
      id: "4",
      img: "/assets/load.jpeg",
      title: "Load testing",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidemid perferendis debitis.",
    },
  ];
  return (
    <section className="services py-2" id="services">
      <Container className="py-5">
        <Row className=" g-3 ">
          <h6 style={{ color: "rgb(31, 37, 128)" }}> What I Do</h6>
          {data.map((d, i) => {
            return (
              <Col lg={3} sm={6} className="" key={i}>
                <div className="work-card   d-flex flex-column align-items-center px-3 py-5">
                  <div className="icon-img">
                    <img src={d.img} alt="" />
                  </div>
                  <h6 className="mt-2 fw-bold">{d.title}</h6>
                  <p>{d.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-5">
          {/* <h3 className="text-center">Tools I use</h3> */}
          <h6 className="text-center">Primary Skills on</h6>
          <div className="d-flex justify-content-center gap-4 mt-2">
            <div className="tool-box">
              <div className="tool-image p-3">
                <img
                  src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689665.jpg?t=st=1708945809~exp=1708949409~hmac=b7042c249b152f57f29a56e3006f9e5c6b835ce73dc8bc64bc2f313984913e00&w=1060"
                  alt="tools"
                />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
          </div>
          <h6 className="text-center mt-3">Primary Skills I Have</h6>
          <div className="d-flex justify-content-center gap-4 mt-2">
            <div className="tool-box">
              <div className="tool-image p-3">
                <img
                  src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689665.jpg?t=st=1708945809~exp=1708949409~hmac=b7042c249b152f57f29a56e3006f9e5c6b835ce73dc8bc64bc2f313984913e00&w=1060"
                  alt="tools"
                />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
            <div className="tool-box">
              <div className="tool-image p-3">
                <img src="" alt="tools" />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
