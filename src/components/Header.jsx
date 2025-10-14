import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Collapse navbar after click
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="custom-navbar py-3"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="assets/bluemario_logo.png" alt="Blue Mario Logo" height={60} />
        </Navbar.Brand>

        {/* Custom Toggle Button */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0 bg-transparent p-0"
          onClick={() => setExpanded(!expanded)}
        >
          {/* Custom White Hamburger Icon */}
          <div style={{ width: '30px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ height: '3px', background: 'white', borderRadius: '2px' }}></span>
            <span style={{ height: '3px', background: 'white', borderRadius: '2px' }}></span>
            <span style={{ height: '3px', background: 'white', borderRadius: '2px' }}></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <NavLink to="/" className="nav-link" onClick={handleNavClick}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
              About Us
            </NavLink>
            <NavLink to="/services" className="nav-link" onClick={handleNavClick}>
              Services
            </NavLink>
            <NavLink to="/our-work" className="nav-link" onClick={handleNavClick}>
              Our Work
            </NavLink>
            <NavLink to="/blog" className="nav-link" onClick={handleNavClick}>
              Blogs
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
