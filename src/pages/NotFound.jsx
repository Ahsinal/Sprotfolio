import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <section className="my-5 py-5">
        <Container className="my-5 py-5">
          <h1>Page not found</h1>
          <a href="/" as="Link">
            Go to Home page
          </a>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
