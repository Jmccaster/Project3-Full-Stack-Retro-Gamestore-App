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

function NavBar({ user, setUser, setPlatform, cart }) {
  // Create a function responsible for login the user out
  const handleLogOut = async (e) => {
    // Call the logout function
    userService.logOut();
    // Set the user back to null
    setUser(null);
  };
  // console.log(user);
  return (
    <nav>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Retro-Gaming Rental Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Platform Dropdown */}
              <NavDropdown title="Platforms" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/api/videogames/xbox">
                  Xbox Games
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/api/videogames/nintendo">
                  Nintendo Games
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/api/videogames/playstation">
                  Playstation Games
                </NavDropdown.Item>
              </NavDropdown>
              {/* Consoles Dropdown */}
              <NavDropdown title="Consoles" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/api/consoles/xbox">
                  Xbox
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/api/consoles/nintendo">
                  Nintendo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/api/consoles/playstation">
                  Playstation
                </NavDropdown.Item>
              </NavDropdown>
              {/* SIGN UP LOG IN CART */}
              <div>
                <Container
                  className="d-flex justify-content-end ms-1"
                  style={{ paddingLeft: 400 }}
                >
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
                  <Nav.Link as={Link} to="/cart">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                      width="25px"
                      height="25px"
                    />
                  </Nav.Link>
                  {/* <Navbar.Text>{cart.length}</Navbar.Text> */}
                </Container>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;
