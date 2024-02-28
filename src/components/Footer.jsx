import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer py-3 ">
      <Container className="d-flex align-items-center justify-content-between  text-white ">
        <p className="p-0 m-0 text-white">
          Copyright © 2024 Sagar Parajuli | All rights are reserved | Designed
          by Lanisha Koirala
        </p>

        <div className="d-flex gap-2 h5">
          <a href="/" as="Link" target="blank">
            <FaFacebook className="icon text-white" />
          </a>
          <a href="/" as="Link" target="blank">
            <FaLinkedin className="icon text-white" />
          </a>
          <a href="/" as="Link" target="blank">
            <FaGithub className="icon text-white" />
          </a>
          <a href="/" as="Link" target="blank">
            <FaWhatsapp className="icon text-white" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
