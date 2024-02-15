import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col md={12} lg={4} className="footerleft">
            <Navbar.Brand href="/">
              <img src={logo} alt="" width={"250px"} height={"70px"} />
            </Navbar.Brand>
          </Col>

          <Col md={12} lg={4} className="footermid">
            <h3>Contact Info</h3> 
            <p>Email: <a className="h6" href="mailto:ankitaphotography@gmail.com">ankitaphotography@gmail.com</a></p> 
          </Col>

          <Col md={12} lg={4} className="footerright">
            <h3> Follow Us</h3>
            <a className="h6 gap-2">
              <FaFacebook/>
            </a>
            <a className="h6 ms-4 gap-2">
              <FaInstagram/>
            </a>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <hr></hr>
        <p>Copyright © 2014 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
