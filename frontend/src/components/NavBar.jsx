import React from "react";

// Import Link for routes
import { Link } from "react-router-dom";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar(user, setUser) {
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
            </Nav>
          </Navbar.Collapse>
        </Container>
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
      </Navbar>
    </nav>
  );
}

export default NavBar;
