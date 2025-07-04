// src/components/ContactSection.jsx
import React from 'react';
import { BiMobile } from 'react-icons/bi';
import { FaHospital, FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

const ContactSection = () => {
  return (
    <>
      <section className="contact-section py-5">
        <div className="container">
          <div className="text-center mb-3">
            <h1 className="display-5 fw-bold">Contact Us</h1>
          </div>
          <div className="row g-4 align-items-stretch">
            {/* Contact Form */}
            <div className="col-md-6" data-aos="fade-right">
              <form className="p-4 bg-light rounded shadow-sm">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
  
            {/* Map Embed */}
            <div className="col-md-6" data-aos="fade-right">
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
            <div className='contact-info mt-5'>
              <p><FaHospital className='me-2'/> Blue Mario Events</p>
              <p><IoLocationOutline className='me-2' />Perumbilissery, Thrissur, Kerala 680561</p>
              <a href="tel:7593091408"><BiMobile className='me-2'/>7593091408, 9633793951</a><br />
              <a href='mailto:info@bluemarioevents.com'><IoMdMail className='me-2'/>info@bluemarioevents.com</a>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;