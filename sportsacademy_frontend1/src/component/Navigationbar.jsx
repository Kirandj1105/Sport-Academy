import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import './css/Navigationbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Navigationbar() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: localStorage.getItem("username"),
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    isLoggedIn: localStorage.getItem("token") ? true : false,
  });

  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setLoggedInUser({
      username: null,
      token: null,
      role: null,
      isLoggedIn: false,
    });
    history("/");
  };

  console.log("loggedInUser:", loggedInUser);


  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer id="content" to="/showSport">
               <Nav.Link>| Sport</Nav.Link>
             </LinkContainer>


            <NavDropdown            
              id="nav-dropdown-dark-examplet"
              className="sports-nav-dd"
              title="| Sports"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#/action-1"><LinkContainer to="/badminton">
                <Nav.Link>Badminton</Nav.Link>
              </LinkContainer></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><LinkContainer to="/cricket">
                <Nav.Link>Cricket</Nav.Link>
              </LinkContainer>

              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Swimming</NavDropdown.Item>
            </NavDropdown>


            <LinkContainer id="content" to="/coaching">
              <Nav.Link>| Coaching</Nav.Link>
            </LinkContainer>
            <LinkContainer id="content" to="/facilities">
              <Nav.Link>| Facilities</Nav.Link>
            </LinkContainer>
            <LinkContainer id="content" to="/showEvent">
              <Nav.Link>| Event</Nav.Link>
            </LinkContainer>
            <LinkContainer id="content" to="/about">
              <Nav.Link>| About</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer id="content" to="/contactus">
               <Nav.Link>| ContactUs</Nav.Link>
             </LinkContainer> */}
            {loggedInUser.isLoggedIn && loggedInUser.role === 'user' && (
              <LinkContainer id="content" to="/userdetails">
                <Nav.Link>| User Details</Nav.Link>
              </LinkContainer>
            )}

            {loggedInUser.isLoggedIn && loggedInUser.role === 'coach' && (
              <LinkContainer id="content" to="/coachdetails">
                <Nav.Link>| Coach Details</Nav.Link>
              </LinkContainer>
            )}

            {loggedInUser.isLoggedIn && loggedInUser.role === 'admin' && (
              <LinkContainer id="content" to="/addevent">
                <Nav.Link>| Add Event</Nav.Link>
              </LinkContainer>
            )}

            {loggedInUser.isLoggedIn && loggedInUser.role === 'admin' && (
              <LinkContainer id="content" to="/showEventAdmin">
                <Nav.Link>| Show Event</Nav.Link>
              </LinkContainer>
            )}

            {loggedInUser.isLoggedIn && loggedInUser.role === 'admin' && (
              <LinkContainer id="content" to="/details">
                <Nav.Link>| Details</Nav.Link>
              </LinkContainer>
            )}
            <LinkContainer id="content" to="/contactus">
              <Nav.Link>| ContactUs</Nav.Link>
            </LinkContainer>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle
              id="content"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Join Us

            </Dropdown.Toggle>
            <Dropdown.Menu>
              {loggedInUser.isLoggedIn ? (
                <>
                  {loggedInUser.role === "admin" && (
                    <Dropdown.Item>
                      <LinkContainer to="/admin-dashboard">
                        <Nav.Link>Admin Dashboard</Nav.Link>
                      </LinkContainer>
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item>
                    Visit Again {loggedInUser.firstName}!
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item href="#/action-1">
                    <LinkContainer to="/registration">
                      <Nav.Link>Registration</Nav.Link>
                    </LinkContainer>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <LinkContainer to="/login">
                      <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}