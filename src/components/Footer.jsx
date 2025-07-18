import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0a1931', padding: '60px 0' }}>
      <Container>
        <Row className="gy-4">
          {/* Logo Section */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <img src="assets/bluemario_logo.png" alt="Blue Mario" style={{ height: '80px' }} />
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={4}>
            <h6 className="text-uppercase fw-bold mb-3 text-light">Contact</h6>
            <p className="mb-1 text-light"><FaMapLocation className='me-2 text-light'/>Perumbilissery, Thrissur, Kerala 680561</p>
            <p className='text-light'><FaPhone className='me-2 text-light'/>7593091408, 9633793951</p>
            <p className="mt-2 text-light">
              <FaEnvelope className="me-2 text-light" />
              info@bluemarioevents.com
            </p>
          </Col>

          {/* Menu Links */}
          <Col xs={12} md={4}>
            <h6 className="text-uppercase fw-bold mb-3 text-light">Menu</h6>
            <div className="d-flex flex-wrap gap-4">
              <div className="d-flex flex-column">
                <Link className="text-light text-decoration-none mb-1" to={"/"}>Home</Link>
                <Link className="text-light text-decoration-none mb-1" to={"/about"}>About Us</Link>
                <Link className="text-light text-decoration-none mb-1" to={"/services"}>Services</Link>
                <Link className="text-light text-decoration-none mb-1" to={"/our-work"}>Our Work</Link>
                <Link className="text-light text-decoration-none mb-1" to={"/contact"}>Contact Us</Link>
              </div>
            </div>
            
            <div className="mt-4 d-flex gap-3">
              <a href="https://www.instagram.com/bluemariodecorationsandevents/" target='_blank'><FaInstagram className="text-light fs-5" /></a>
              <a href="https://www.facebook.com/Bluemariodecorations/" target='_blank'><FaFacebookF className="text-light fs-5" /></a>
            </div>
          </Col>
        </Row>
        <div className='copyright'>
              <p className='text-secondary mt-5'>©2025 BlueMario Events All rights reserved.</p>
              <p className='text-secondary'>Designed By <a href='https://theaitsolutions.net/' target='_blank'>Thea IT Solutions</a></p>
            </div>
      </Container>
    </footer>
  );
};

export default Footer;
