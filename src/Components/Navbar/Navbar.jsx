import React from "react";
import { Navbar, Offcanvas, Button, Nav, Container } from "react-bootstrap";
import Logo from "../Logo";
import './index.css'
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="mb-3 navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-$"lg"`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"lg"`}>
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link to="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              
            </Nav>
              <Button  className="bg-blue btn">Get in touch</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
