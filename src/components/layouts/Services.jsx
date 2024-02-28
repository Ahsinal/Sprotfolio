import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const primarySkills = [
    {
      id: "1",
      img: "",
      title: "tool1",
    },
    {
      id: "2",
      img: "",
      title: "tool",
    },
    {
      id: "3",
      img: "",
      title: "tool",
    },
    {
      id: "4",
      img: "",
      title: "tool",
    },
    {
      id: "5",
      img: "",
      title: "tool",
    },
    {
      id: "6",
      img: "",
      title: "tool",
    },
    {
      id: "7",
      img: "",
      title: "tool",
    },
    {
      id: "8",
      img: "",
      title: "tool",
    },
    {
      id: "9",
      img: "",
      title: "tool",
    },
    {
      id: "10",
      img: "",
      title: "tool",
    },
  ];
  const secondarySkills = [
    {
      id: "1",
      img: "",
      title: "",
    },
    {
      id: "2",
      img: "",
      title: "",
    },
    {
      id: "3",
      img: "",
      title: "",
    },
    {
      id: "4",
      img: "",
      title: "",
    },
    {
      id: "5",
      img: "",
      title: "",
    },
    {
      id: "6",
      img: "",
      title: "",
    },
    {
      id: "7",
      img: "",
      title: "",
    },
    {
      id: "8",
      img: "",
      title: "",
    },
    {
      id: "9",
      img: "",
      title: "",
    },
    {
      id: "10",
      img: "",
      title: "",
    },
  ];
  const renderTooltip = (title) => (
    <Tooltip id={`tooltip-${title}`}>{title}</Tooltip>
  );
  return (
    <section className="services py-5" id="services">
      <Container>
        <Row className=" gx-3 ">
          <h6 className="text-prime mb-3"> What I Do</h6>
          {data.map((d, i) => {
            return (
              <Col lg={3} sm={6} className="" key={i}>
                <div className="work-card   d-flex flex-column align-items-center justify-content-center px-3 py-4">
                  <div className="icon-img mb-2">
                    <img src={d.img} alt="" />
                  </div>
                  <h6 className="mt-2 fw-bold">{d.title}</h6>
                  <p className="pb-0 mb-0">{d.desc}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-5">
          <h6 className="text-center text-prime">Primary Skills </h6>
          <div className="d-flex justify-content-center gap-4 mt-1">
            {primarySkills.slice(0, 6).map((d, i) => {
              return (
                <OverlayTrigger
                  key={i}
                  placement="bottom"
                  overlay={renderTooltip(d.title)}
                >
                  <div className="tool-box">
                    <div className="tool-image p-2">
                      <img src={d.img} alt="tools" />
                    </div>
                  </div>
                </OverlayTrigger>
              );
            })}
          </div>
          <div className="d-flex justify-content-center gap-4 mt-2 mb-4">
            {primarySkills.slice(6, 11).map((d, i) => {
              return (
                <OverlayTrigger
                  key={i}
                  placement="bottom"
                  overlay={renderTooltip(d.title)}
                >
                  <div className="tool-box">
                    <div className="tool-image p-2">
                      <img src="" alt="tools" />
                    </div>
                  </div>
                </OverlayTrigger>
              );
            })}
          </div>
          <h6 className="text-center text-prime">Other Skills</h6>
          <div className="d-flex justify-content-center gap-4 mt-1">
            {secondarySkills.map((d, i) => {
              return (
                <OverlayTrigger
                  key={i}
                  placement="bottom"
                  overlay={renderTooltip(d.title)}
                >
                  <div className="tool-box" key={i}>
                    <div className="tool-image p-2">
                      <img src="/assets/tools/github.png" alt="tools" />
                    </div>
                  </div>
                </OverlayTrigger>
              );
            })}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
