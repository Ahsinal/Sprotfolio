import { Row, Col } from "react-bootstrap";
import "./protfolio.scss";
const Projectcard = (props) => {
  return (
    <div className="portfolio-card   p-3">
      <div className="portfolio-img ">
        <img src={props.img} alt="project-img" />
      </div>
      <div className="detail mt-3">
        <h6>{props.title}</h6>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Projectcard;
