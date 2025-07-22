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
              At <strong>Blue Mario Events</strong>, we don't just plan events we craft unforgettable experiences. Whether it's a dream wedding, corporate gala, or themed celebration, our team brings creativity, professionalism, and passion to every moment.
            </p>
            <p>
              From concept to execution, we handle every detail meticulously venue selection, decor, entertainment, and guest management. Our goal is to make your event stress-free and stunning, reflecting your vision and personality.
            </p>
            <p className="mb-0">
              Join the celebration with Blue Mario Events where your ideas come to life in style.
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