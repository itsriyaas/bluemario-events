// ServicesSection.jsx
import React from 'react';
import styled from 'styled-components';
import {
  FaMapMarkerAlt, FaWallet, FaCamera, FaHotel,
  FaUtensils, FaTruck, FaMusic, FaGift, FaPaintBrush
} from 'react-icons/fa';
const Wrapper = styled.div`
  padding: 4rem 2rem;

  .services-title {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #0a1931, #b3cfe5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .services-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .bgblue {
    background: linear-gradient(135deg, #fffffff5, #0a1931, #ffffff98);
    padding: 1px;
    border-radius: 1.2rem;
    box-shadow: 0px 1rem 1.5rem -0.9rem #000000e1;
  }

  .card {
    background: linear-gradient(135deg, #b3cfe5 0%, #0a1931 43%, #0d1120 100%);
    color: #dee3ec;
    padding: 2rem;
    border-radius: 1.2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .icon svg {
    color:rgb(255, 255, 255);
  }

  @media (max-width: 768px) {
    .services-title {
      font-size: 2.4rem;
    }
  }
`;
const services = [
  {
    icon: <FaMapMarkerAlt size={40} />,
    title: 'Destination & Venues',
    description: 'We help you find dream venues, handle bookings, and manage liaisons. Just show up and enjoy.',
  },
  {
    icon: <FaWallet size={40} />,
    title: 'Budget Management',
    description: 'We allocate and monitor wedding budgets while matching you with vendors within your range.',
  },
  {
    icon: <FaCamera size={40} />,
    title: 'Vendor Management',
    description: 'From photographers to makeup artists, we manage and coordinate all vendor communications.',
  },
  {
    icon: <FaHotel size={40} />,
    title: 'Hospitality & Guest Management',
    description: 'Hotel bookings, guest RSVPs, and seamless communication for an unforgettable guest experience.',
  },
  {
    icon: <FaUtensils size={40} />,
    title: 'Food and Beverage',
    description: 'Curate your ideal menu, hire caterers and bartenders, and make your taste buds sing!',
  },
  {
    icon: <FaTruck size={40} />,
    title: 'Logistics',
    description: 'Visas, travel, transport—we handle all the ground logistics so your event runs flawlessly.',
  },
  {
    icon: <FaMusic size={40} />,
    title: 'Entertainment',
    description: 'From DJs to live bands, we source talent to match your vibe and wow your guests.',
  },
  {
    icon: <FaGift size={40} />,
    title: 'Invitations & Gifting',
    description: 'We design beautiful invitations and custom gifting solutions your guests will love.',
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: 'Decor Management',
    description: 'We collaborate with decorators to bring your visual dreams to life with elegance and flair.',
  },
];

const ServicesSection = () => {
  return (
    <Wrapper>
     <div className="hero-text-container text-center">
                <h1 className="services-hero-text mb-5">SERVICES</h1>
            </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="bgblue" key={index} data-aos="fade-up">
            <div className="card">
              <div className="icon text-white mb-3">{service.icon}</div>
              <h5 className="text-white">{service.title}</h5>
              <p className="text-light">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ServicesSection;
