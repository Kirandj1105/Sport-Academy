import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './css/LogoNavbar.css';
import lakshyalogo from './images/lakshyalogo.png';

export function LogoNavbar() {
  return (
    <Navbar className="logo-navbar" expand="lg" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <div className="d-flex align-items-center">
              <div>
                <img src={lakshyalogo} className="lakshyalogo" alt="lakshya logo" />
              </div>
              <div>
                <h3 id="logo">LAKSHYA <h6>ACADEMY</h6></h3>
              </div>
            </div>
          </Navbar.Brand>
        </LinkContainer>

        <LinkContainer id="content" to="/all-news">
               <Nav.Link className="logonavbar-headlines"><b>| All News</b></Nav.Link>
             </LinkContainer>

             <LinkContainer id="content" to="/topHeadlines">
               <Nav.Link className="logonavbar-headlines"><b>| Top Headlines</b></Nav.Link>
             </LinkContainer>

             <LinkContainer id="content" to="/weather">
               <Nav.Link className="logonavbar-headlines"><b>| Weather</b></Nav.Link>
             </LinkContainer>

      </Container>
    </Navbar>

  );
}
