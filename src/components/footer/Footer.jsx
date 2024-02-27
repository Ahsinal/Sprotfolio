import React from "react";
import "./footer.scss";
import { Container } from "react-bootstrap";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Loop,
  Reddit,
  WhatsApp,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <section className="footer py-3 ">
      <Container className="d-flex align-items-center justify-content-between  text-white ">
        <p className="p-0 m-0">
          Copyright © 2024 Sagar Parajuli | All rights are reserved.
        </p>
        <div className="social-links ">
          <a href="">
            <Facebook className="icon text-white" />
          </a>
          <a href="">
            <LinkedIn className="icon text-white" />
          </a>
          <a href="">
            <GitHub className="icon text-white" />
          </a>
          <a href="">
            <WhatsApp className="icon text-white" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
