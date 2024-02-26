import { Container } from "@mui/material";
import "./contact.scss";
import { Email, FmdGood, Phone, Send } from "@mui/icons-material/";
import Form from "react-bootstrap/Form";
import { Col, Row, Button, FormControl, FormLabel } from "react-bootstrap";
const Contact = () => {
  return (
    <Container>
      <h6 style={{ color: "rgb(31, 37, 128)" }}> Contact</h6>
      <Row className="g-5">
        <Col lg={6} sm={12}>
          1
        </Col>
        <Col lg={6} sm={12}>
          <Form>
            <div className="mb-2">
              <FormLabel htmlFor="">Full Name</FormLabel>
              <FormControl type="text" required />
            </div>
            <div className="mb-2">
              <FormLabel htmlFor="">E-mail</FormLabel>
              <FormControl type="email" required />
            </div>
            <div className="mb-2">
              <FormLabel htmlFor="">Phone No</FormLabel>
              <FormControl type="phone" required />
            </div>
            <div className="mb-3">
              <FormLabel htmlFor=""></FormLabel>
              <FormControl as="textarea" rows="6" required />
            </div>
            <Button
              className="btn btn-xs rounded-12 text-white"
              variant="info"
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
