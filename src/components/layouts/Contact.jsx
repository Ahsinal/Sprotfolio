import { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  FormControl,
  FormLabel,
  Modal,
} from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Form from "react-bootstrap/Form";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [modalShow, setModalShow] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form validation here
    // Once validated, show the modal
    setModalShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="py-4 contact" id="contact">
      <Container>
        <h6 className="text-prime mb-0"> Contact</h6>
        <Row className="gx-5 align-items-center">
          <Col lg={5} sm={12} className="d-flex flex-column ">
            <div className="contact-img mb-2">
              <img
                src="https://img.freepik.com/free-photo/connect-incoming-call-communication-concept_53876-125112.jpg?t=st=1709013385~exp=1709016985~hmac=2d5a37561349400ab6f0f9cdd3acac7b02668b4cfb56b62e355cd8d4e4884801&w=1480"
                alt="contact-img"
                className="img-fluid rounded-2"
              />
            </div>
            <div className=" contact-box d-flex align-items-center gap-4  p-3 mb-2">
              <div className="circle">
                <MdEmail className="h3" />
              </div>
              <div className="contact-box-content ">
                Send Mail at
                <p>parajuli.sagar1998@gmail.com</p>
              </div>
            </div>
            <div className=" contact-box d-flex align-items-center gap-4  p-3 mb-2">
              <div className="circle">
                <FaPhone className="h4" />
              </div>
              <div className="contact-box-content ">
                Contact Me at
                <p>+1 437-878-5778</p>
              </div>
            </div>
            <div className=" contact-box d-flex align-items-center gap-4  p-3">
              <div className="circle">
                <FaLocationDot className="h4" />
              </div>
              <div className="contact-box-content ">
                My Location
                <p>Toronto,Ontario,Canada</p>
              </div>
            </div>
          </Col>
          <Col lg={7} sm={12} className="p-5">
            <h5 className="text-prime ">Lets Work together.</h5>
            <Form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <FormLabel htmlFor="" className="mb-0">
                  Full Name
                </FormLabel>
                <FormControl type="text" required />
              </div>
              <div className="mb-3">
                <FormLabel htmlFor="" className="mb-0">E-mail</FormLabel>
                <FormControl type="email" required />
              </div>
              <div className="mb-3">
                <FormLabel htmlFor="" className="mb-0" >Phone No</FormLabel>
                <FormControl type="phone" required />
              </div>
              <div className="mb-4">
                <FormLabel htmlFor="" className="mb-0">Message</FormLabel>
                <FormControl as="textarea" rows="6" required />
              </div>
              <Button
                className="btn btn-xs rounded-12 btn-block text-white"
                type="submit"
              >
                Send Message
              </Button>
            </Form>
          </Col>
          <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Thanks for contacting me. I'll get back to you as soon as
              possible.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setModalShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
