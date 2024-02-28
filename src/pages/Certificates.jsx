import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

const Certificates = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: {
        type: "classic",
      },
    });
  }, []); // Run only once on component mount
  const data = [
    {
      id: "1",
      img: "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg?t=st=1709102996~exp=1709106596~hmac=bbe99bd37f751994e1c88573c470dab38b8f85da33d0b92d577561c91904285f&w=1480",
    },
    {
      id: "2",
      img: "https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148973721.jpg?t=st=1709103812~exp=1709107412~hmac=396ed39f4b3acf29c0ea61886bb5e6b3e1e36928ee76217949751f161606cb6e&w=1480",
    },
    {
      id: "3",
      img: "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg?t=st=1709102996~exp=1709106596~hmac=bbe99bd37f751994e1c88573c470dab38b8f85da33d0b92d577561c91904285f&w=1480",
    },
    {
      id: "4",
      img: "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg?t=st=1709102996~exp=1709106596~hmac=bbe99bd37f751994e1c88573c470dab38b8f85da33d0b92d577561c91904285f&w=1480",
    },
    {
      id: "5",
      img: "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg?t=st=1709102996~exp=1709106596~hmac=bbe99bd37f751994e1c88573c470dab38b8f85da33d0b92d577561c91904285f&w=1480",
    },
    {
      id: "6",
      img: "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg?t=st=1709102996~exp=1709106596~hmac=bbe99bd37f751994e1c88573c470dab38b8f85da33d0b92d577561c91904285f&w=1480",
    },
    {
      id: "7",
      img: "https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-blue_53876-157583.jpg?t=st=1709102996~exp=1709106596~hmac=bbe99bd37f751994e1c88573c470dab38b8f85da33d0b92d577561c91904285f&w=1480",
    },
  ];
  return (
    <>
      <section className="certificates mt-5 py-5">
        <Container>
          <h5 className="text-prime"> Certificates</h5>
          <Row className="mt-2 g-4">
            {data.map((d, i) => {
              return (
                <Col sm={12} lg={6} key={i}>
                  <a href={d.img} data-fancybox="gallery">
                    <img src={d.img} alt="certificate" className="img-fluid" />
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Certificates;
