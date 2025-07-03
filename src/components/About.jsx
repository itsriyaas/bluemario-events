import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section className="py-5 bg-light" id="about">
      <Container>
        <h2 className="text-center fw-bold mb-4">About Blue Mario Events</h2>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col md={6} data-aos="fade-right">
            <p className="lead">
              At <strong>Blue Mario Events</strong>, we don't just plan events we craft unforgettable experiences. Whether it's a dream wedding, corporate gala, or themed celebration, our team brings creativity, professionalism, and passion to every moment.
            </p>
            <p>
              From concept to execution, we handle every detail meticulously venue selection, decor, entertainment, and guest management. Our goal is to make your event stress-free and stunning, reflecting your vision and personality.
            </p>
            <p className="mb-0">
              Join the celebration with Blue Mario Events where your ideas come to life in style.
            </p>
          </Col>

          {/* YouTube Video */}
          <Col md={6} data-aos="fade-right" className="mt-4 mt-md-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/u31qwQUeGuM"
                title="Blue Mario Events"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
