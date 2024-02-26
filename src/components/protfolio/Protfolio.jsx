import { useEffect, useState } from "react";
import Protfoliolist from "../protfolioList/Protfoliolist";
import "./protfolio.scss";
import { zebecProtfolio, swiftProtfolio, lvfProtfolio } from "../../data";
import { Col, Container, Row } from "react-bootstrap";

const Protfolio = () => {
  const [selected, setSelected] = useState("zebec");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "zebec",
      title: "Zebec",
    },
    {
      id: "swift",
      title: "Swift",
    },
    {
      id: "lvf",
      title: "LVF",
    },
  ];

  //useeffect
  useEffect(() => {
    switch (selected) {
      case "zebec":
        setData(zebecProtfolio);
        break;
      case "swift":
        setData(swiftProtfolio);
        break;
      case "lvf":
        setData(lvfProtfolio);
        break;
      default:
        setData(zebecProtfolio);
    }
  }, [selected]);

  return (
    <>
      <Container className="protfolio my-5" id="portfolio">
        <h6 style={{ color: "rgb(31, 37, 128)" }}> Portfolio</h6>
        <div className="d-flex align-items-center">
          <ul>
            {list.map((item) => (
              <Protfoliolist
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        <Row className="g-3">
          {data.slice(0, 3).map((d, i) => {
            return (
              <Col lg={4} sm={12} key={i}>
                <div className="portfolio-card   p-3">
                  <div className="portfolio-img ">
                    <img src={d.img} alt="project-img" />
                  </div>
                  <div className="detail mt-3">
                    <h6>{d.title}</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore vero voluptatem vel accusamus sint accusantium
                      deserunt placeat maiores excepturi quae!
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="pic" />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div> */}
      </Container>
    </>
  );
};

export default Protfolio;
