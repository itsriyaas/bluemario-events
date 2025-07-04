
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919633793951&text=Hello"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;