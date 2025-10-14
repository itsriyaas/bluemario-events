import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';
import { FaInstagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-5" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col md={6} data-aos="fade-right">
           <BlurText
  text="About Blue Mario Events"
  delay={150}
  animateBy="words"
  direction="top"
  className="fw-bold fs-3 text-center"
/>
            <p>
             The Blue Mario Events team believes every celebration deserves to be unforgettable. We specialize in creating extraordinary events that reflect your dreams, emotions, and personality as the top wedding planner in Thrissur. <br /><br />
             Our team has years of experience in wedding planning, stage decoration, and event management in Kerala. We handle every detail - so you can simply enjoy your special day.
            </p>
      <Link to={'/about'}><button className='btn mt-3'>Read More</button></Link>
          </Col>

          {/* Insta Video */}
          <Col md={6} data-aos="fade-right" className="Insta mt-4 mt-md-0">
  <div className="insta-image-wrapper">
    <img className="rounded" src="assets/works/wedimg1.jpg" alt="Event" width="100%" />
    <div className="insta-hover-overlay">
      <a href='https://www.instagram.com/bluemariodecorationsandevents/' target='_blank'><FaInstagram className="insta-logo text-light"/></a>
    </div>
  </div>
</Col>


        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;