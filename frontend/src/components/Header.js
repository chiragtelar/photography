import React from "react";
import {
  Badge,
  Navbar,
  Nav,
  Container,
  NavbarToggle,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="/">
              <img src={logo} alt="" width={"250px"} height={"70px"} />
            </Navbar.Brand>
          </LinkContainer>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about-us">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio"><Nav.Link>Portfolio</Nav.Link></LinkContainer>
              <LinkContainer to="/contact-us"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
