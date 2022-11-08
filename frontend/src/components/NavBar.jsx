import React from "react";

// Import Link for routes
import { Link } from "react-router-dom";
import * as userService from "./../utilities/users-service";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar({ user, setUser }) {
  // Create a function responsible for login the user out
  const handleLogOut = async (e) => {
    // Call the logout function
    userService.logOut();
    // Set the user back to null
    setUser(null);
  };
  console.log(user);
  return (
    <nav>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Retro-Gaming Rental Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Platform Dropdown */}
              <NavDropdown title="Platforms" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Xbox Games
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Nintendo Games
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Playstation Games
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* Consoles Dropdown */}
              <NavDropdown title="Consoles" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Xbox</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Nintendo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Playstation
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Container className="d-flex justify-content-end ms-1">
                {user ? (
                  <>
                    <Navbar.Text>
                      Welcome {user.newUser?.name || user.currentUser?.name}
                    </Navbar.Text>
                    <Nav.Link
                      to=""
                      onClick={() => {
                        return handleLogOut();
                      }}
                    >
                      Log Out
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" className="mx-auto">
                    SignUp/Login
                  </Nav.Link>
                )}
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;
