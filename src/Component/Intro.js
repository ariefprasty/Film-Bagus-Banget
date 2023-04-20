import { Col, Container, Row, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">TONTON SEMUA FILM BAGUS </div>
            <div className="title">DISINI</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua Film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
