import React from "react";
import HomeSlider from "../components/HomeSlider";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import sliderOne from "../assets/slider_1.jpg";
import babyLeft from "../assets/baby_left.jpg";
function Home() {
  return (
    <>
      <HomeSlider />
      <Container> 
        <Row className="py-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={sliderOne} height="300px"/>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="py-4">
          <Col md={6}>
            <Image src={babyLeft} fluid />
          </Col>
          <Col md={6}>
            <h1 className="fs-1">Why is Momma Story Arts the best?</h1>
            <div>
              <p className="fs-4">
                A baby photoshoot is not only a delightful experience but also
                an essential and meaningful way to capture and preserve the
                precious moments of your baby’s early days.
              </p>
              <p className="fs-4">
                A baby photoshoot is not just about taking pictures; it’s about
                preserving cherished memories, celebrating milestones, and
                creating a lasting legacy. It’s a beautiful way to capture the
                essence of your baby’s early days and hold onto those fleeting
                moments that pass all too quickly.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-4">
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
