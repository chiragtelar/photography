import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container, NavbarToggle, NavDropdown } from "react-bootstrap";
import { FaUser } from 'react-icons/fa'; 
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

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
              <LinkContainer to="/portfolio">
                <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact-us">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {userInfo ? (
              <NavDropdown style={{color: '#fff'}} title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer style={{color: '#fff'}} to="/login">
                <Nav.Link>
                  <FaUser /> Sing In
                </Nav.Link>
              </LinkContainer>
            )}

            { userInfo && userInfo.isAdmin && (
                <NavDropdown style={{color: '#fff', marginLeft: "10px" }} title='Admin' id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                        <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer> 
                    <LinkContainer to='/admin/sliderlist'>
                        <NavDropdown.Item>Slider</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/configuration'>
                        <NavDropdown.Item>Configuration</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
