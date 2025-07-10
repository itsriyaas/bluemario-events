import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { src: 'https://i.pinimg.com/originals/e9/89/ab/e989abd00ddc6fc889716d5c7e23bab4.jpg', alt: 'Wedding decor' },
  { src: 'https://www.framehunt.com/wp-content/uploads/2021/04/Traditional-Kerala-Hindu-Wedding-1.jpg', alt: 'Stage lighting' },
  { src: 'assets/works/AJU08185-min.jpg', alt: 'Reception setup' },
  { src: 'assets/works/DSC07782-min.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/AJU08186-min.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/DSC09988-min.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed1.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed2.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed3.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed4.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wedbanner5.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed6.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed7.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed8.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed14.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed10.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed11.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed12.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed15.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/wed16.jpg', alt: 'Traditional setup' },
];

const GallerySection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);

  const handleShow = (img) => {
    setContent(img);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      {/* Banner */}
      <div className="about-banner text-white d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="fade-down">
          <h1 className="display-5 fw-bold">OUR WORKS</h1>
        </div>
      </div>

      <Container className="my-2">
        <Row className="g-4">
          {images.map((img, idx) => (
            <Col xs={12} sm={6} md={4} lg={3} key={idx} data-aos="zoom-in" data-aos-delay={idx * 50}>
              <div
                className="gallery-img-wrapper rounded overflow-hidden shadow-sm position-relative"
                onClick={() => handleShow(img)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-100 h-100 object-fit-cover"
                  style={{ maxHeight: '250px', transition: 'transform 0.3s ease' }}
                />
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} size="xl" centered>
          <Modal.Body className="p-0">
            <img
              src={content?.src}
              alt={content?.alt}
              className="img-fluid w-100 rounded"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default GallerySection;
