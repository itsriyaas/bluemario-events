// GallerySection.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  { src: 'https://i.pinimg.com/originals/21/ee/6f/21ee6f8e553834393ef669a984accb5e.jpg', alt: 'Wedding decor' },
  { src: 'https://www.framehunt.com/wp-content/uploads/2021/04/Traditional-Kerala-Hindu-Wedding-1.jpg', alt: 'Stage lighting' },
  { src: 'assets/works/AJU08185-min.jpg', alt: 'Reception setup' },
  { src: 'assets/works/DSC07782-min.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/AJU08186-min.jpg', alt: 'Traditional setup' },
  { src: 'assets/works/DSC09988-min.jpg', alt: 'Traditional setup' },
];

const videos = [
  { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Promo Video 1' },
  { src: 'https://www.youtube.com/embed/tgbNymZ7vqY', title: 'Behind the Scenes' },
];

const GallerySection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [show, setShow] = useState(false);
  const [content, setContent] = useState(null);
  const [type, setType] = useState('image');

  const handleShow = (item, itemType) => {
    setContent(item);
    setType(itemType);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Our Works</h2>

      <Row className="g-4">
        {images.map((img, idx) => (
          <Col xs={12} sm={6} md={4} key={idx} data-aos="fade-up">
            <div className="gallery-img-wrapper rounded overflow-hidden shadow-sm" onClick={() => handleShow(img, 'image')}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-100 h-100 object-fit-cover"
                style={{ maxHeight: '250px', cursor: 'pointer' }}
              />
            </div>
          </Col>
        ))}
        {videos.map((video, idx) => (
          <Col xs={12} sm={6} md={6} key={idx + images.length} data-aos="fade-up">
            <div
              className="ratio ratio-16x9 rounded shadow-sm video-thumbnail"
              onClick={() => handleShow(video, 'video')}
              style={{ cursor: 'pointer' }}
            >
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ pointerEvents: 'none' }}
              ></iframe>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Body className="p-0">
          {type === 'image' ? (
            <img
              src={content?.src}
              alt={content?.alt}
              className="img-fluid w-100 rounded"
            />
          ) : (
            <div className="ratio ratio-16x9">
              <iframe
                src={content?.src}
                title={content?.title}
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GallerySection;
