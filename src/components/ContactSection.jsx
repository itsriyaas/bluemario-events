import React, { useState } from 'react';
import { BiMobile } from 'react-icons/bi';
import { FaHospital } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;

    const whatsappNumber = '919633793951';
    const text = `New Contact Form Submission:\n\n Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-3">
          <h1 className="display-5 fw-bold">Contact Us</h1>
        </div>
        <div className="row g-4 align-items-stretch">
          {/* Contact Form */}
          <div className="col-md-6" data-aos="fade-right">
            <form className="p-4 bg-light rounded shadow-sm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message via WhatsApp</button>
            </form>
          </div>

          {/* Map Embed */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="h-100 rounded shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.6313013456415!2d76.2090132!3d10.450803700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f186e939ad0d%3A0x58e0687a90a8a1a4!2sBLUEMARIO-%20Event%20management%2C%20Stage%20decoration%2C%20Wedding%2C%20Birthday%2C%20in%20Thrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1751541076905!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="border-0 w-100 h-100"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info mt-5">
          <p><FaHospital className="me-2" /> Blue Mario Events</p>
          <p><IoLocationOutline className="me-2" /> Perumbilissery, Thrissur, Kerala 680561</p>
          <p><a href="tel:7593091408"><BiMobile className="me-2" /> 7593091408, 9633793951</a></p>
          <p><a href="mailto:info@bluemarioevents.com"><IoMdMail className="me-2" /> info@bluemarioevents.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
