import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="footer py-3 ">
      <Container className="d-flex align-items-center justify-content-between  text-white ">
        <p className="p-0 m-0">
          Copyright © 2024 Sagar Parajuli | All rights are reserved.
        </p>
        <div className="d-flex gap-2 h5">
          <Link href="">
            <FaFacebook className="icon text-white" />
          </Link>
          <Link href="">
            <FaLinkedin className="icon text-white" />
          </Link>
          <Link href="">
            <FaGithub className="icon text-white" />
          </Link>
          <Link href="">
            <FaWhatsapp className="icon text-white" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
