// ServicesSection.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaMapMarkerAlt, FaWallet, FaCamera, FaHotel,
  FaUtensils, FaTruck, FaMusic, FaGift, FaPaintBrush
} from 'react-icons/fa';

const services = [
  {
    icon: <FaMapMarkerAlt size={40} className="text-primary" />,
    title: 'Destination & Venues',
    description: 'We help you find dream venues, handle bookings, and manage liaisons. Just show up and enjoy.',
  },
  {
    icon: <FaWallet size={40} className="text-success" />,
    title: 'Budget Management',
    description: 'We allocate and monitor wedding budgets while matching you with vendors within your range.',
  },
  {
    icon: <FaCamera size={40} className="text-danger" />,
    title: 'Vendor Management',
    description: 'From photographers to makeup artists, we manage and coordinate all vendor communications.',
  },
  {
    icon: <FaHotel size={40} className="text-warning" />,
    title: 'Hospitality & Guest Management',
    description: 'Hotel bookings, guest RSVPs, and seamless communication for an unforgettable guest experience.',
  },
  {
    icon: <FaUtensils size={40} className="text-info" />,
    title: 'Food and Beverage',
    description: 'Curate your ideal menu, hire caterers and bartenders, and make your taste buds sing!',
  },
  {
    icon: <FaTruck size={40} className="text-secondary" />,
    title: 'Logistics',
    description: 'Visas, travel, transport—we handle all the ground logistics so your event runs flawlessly.',
  },
  {
    icon: <FaMusic size={40} className="text-purple" />,
    title: 'Entertainment',
    description: 'From DJs to live bands, we source talent to match your vibe and wow your guests.',
  },
  {
    icon: <FaGift size={40} className="text-pink" />,
    title: 'Invitations & Gifting',
    description: 'We design beautiful invitations and custom gifting solutions your guests will love.',
  },
  {
    icon: <FaPaintBrush size={40} className="text-dark" />,
    title: 'Decor Management',
    description: 'We collaborate with decorators to bring your visual dreams to life with elegance and flair.',
  },
];

const ServicesSection = () => {
  return (
    <Container className="my-5">
        <div className="hero-text-container text-center">
                <h1 className="services-hero-text mt-5">SERVICES</h1>
            </div>
      <Row className="g-4">
        {services.map((service, idx) => (
          <Col key={idx} xs={12} md={6} lg={4}>
            <Card className="p-4 text-center border-0 shadow-sm h-100" data-aos="fade-up">
              <div className="mb-3">{service.icon}</div>
              <h5 className="fw-bold">{service.title}</h5>
              <p className="text-muted small mt-2">{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;
