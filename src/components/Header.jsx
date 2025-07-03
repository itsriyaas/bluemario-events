import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar py-3" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src="assets/bluemario_logo.png" alt="Blue Mario Logo" height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 bg-light" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About Us
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Services
            </NavLink>
            <NavLink to="/our-work" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Our Work
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
