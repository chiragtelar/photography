import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col md={12} lg={4} className="footerleft">
            <Navbar.Brand href="/">
              <img src={logo} alt="" width={"250px"} height={"70px"} />
              <p className="text-wrap my-2" style={{ width: "20rem"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.  
              </p>
            </Navbar.Brand>
          </Col>

          <Col md={12} lg={4} className="footermid">
            <h3>Contact Info</h3>
            <p>
              Phone:{" "}
              <a className="h6" href="tel:8238002535">
                +91 82380 02535
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="h6" href="mailto:ankitaphotography@gmail.com">
                ankitaphotography@gmail.com
              </a>
            </p>
            <p>
              Address:{" "}
              <>
                204 Anand Nagar, Wadgoun Sheri <br></br>Pune Maharastra
              </>
            </p>
          </Col>

          <Col md={12} lg={4} className="footerright">
            <h3> Follow Us</h3>
            <Link to='http://www.facebook.com' className="h6 gap-2" target="_blank">
              <FaFacebook />
            </Link>
            <Link to='http://www.instagram.com' className="h6 ms-4 gap-2" target="_blank">
              <FaInstagram />
            </Link>
            <Link to='http://www.youtube.com' className="h6 ms-4 gap-2" target="_blank">
              <FaYoutube />
            </Link>
            <Link to='http://www.pinterest.com' className="h6 ms-4 gap-2" target="_blank">
              <FaPinterest />
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <hr></hr>
        <p>Copyright © 2024 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
