import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container className="footer-container">
        <Row>
          <Col md={12} lg={4} className="footerleft">
            <img alt="Logo  Hotel"></img>
          </Col>

          <Col md={12} lg={4} className="footermid">
            <h3>Contact Info</h3>
            <hr></hr>

            <p>Email:</p>
          </Col>

          <Col md={12} lg={4} className="footerright">
            <h3> Follow Us</h3>
            <hr></hr>

            <a>
              <img src="" alt="Facebook Logo"></img>
            </a>
            <a>
              <img src="" alt="Instagram Logo"></img>
            </a>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <hr></hr>
        <p>Copyright © 2014 All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
