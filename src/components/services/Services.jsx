import React from "react";
import "./services.scss";
import { Container, Row, Col } from "react-bootstrap";
import { ApiIcon } from "@mui/icons-material";
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
    <section className="services py-5" id="services">
      <Container className="py-5">
        <h4>What I DO</h4>
        <Row className=" gx-1">
          {data.map((d, i) => {
            return (
              <Col lg={3} sm={6} className="p-3" key={i}>
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
      </Container>
    </section>
  );
};

export default Services;
