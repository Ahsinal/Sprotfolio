import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Certificates = () => {

  const data = [
    {
      id: "1",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-3e7a7220.png?alt=media&token=745f67ad-413f-4931-9774-218af258a4da",
      link: "https://testautomationu.applitools.com/certificate/?id=3e7a7220",
    },
    {
      id: "2",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-c1250d8c.png?alt=media&token=e0dbc094-6779-482b-8495-89c31fc53059",
      link: "https://testautomationu.applitools.com/certificate/?id=c1250d8c",
    },
    {
      id: "3",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-35d1cb74.png?alt=media&token=ed49cd5e-3781-4612-991b-609e53496024",
      link: "https://testautomationu.applitools.com/certificate/?id=35d1cb74",
    },
    {
      id: "4",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-2d263638.png?alt=media&token=daa2beef-ebb3-42f3-8afe-77a3f179ce91",
      link: "https://testautomationu.applitools.com/certificate/?id=2d263638",
    },

    {
      id: "5",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-5118da83.png?alt=media&token=8f88970a-6465-4247-9ae5-2575594c1906",
      link: "https://testautomationu.applitools.com/certificate/?id=5118da83",
    },
    {
      id: "6",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-619feaf0.png?alt=media&token=251297e8-979b-490a-b197-e56bd1b08848",
      link: "https://testautomationu.applitools.com/certificate/?id=619feaf0",
    },
    {
      id: "7",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-57ce049e.png?alt=media&token=e8fe6161-8f3d-462c-990a-e923c24a98ed",
      link: "https://testautomationu.applitools.com/certificate/?id=57ce049e",
    },
    {
      id: "8",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-5d404a0f.png?alt=media&token=9c0b8035-70c3-4f13-9f04-2936ca5fab49",
      link: "https://testautomationu.applitools.com/certificate/?id=5d404a0f",
    },
    {
      id: "9",
      img: "https://firebasestorage.googleapis.com/v0/b/testautomationu-9e0b6.appspot.com/o/certificates%2FTAU-001d50de.png?alt=media&token=61bc1292-a863-4b2f-b728-930b0c6fd907",
      link: "https://testautomationu.applitools.com/certificate/?id=001d50de",
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
                  <div className="position-relative">
                    <img src={d.img} alt="certificate" className="img-fluid" />
                    <a
                      href={d.link}
                      target="blank"
                      className="stretched-link"
                    ></a>
                  </div>
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
