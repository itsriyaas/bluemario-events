import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookUsSection = () => {
  return (
    <section className="book-us-section text-white text-center d-flex align-items-center">
      <div className="container py-5">
        <h1 className="display-5 fw-bold mb-3" data-aos="fade-up">Ready to Create Timeless Experiences?</h1>
        <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
          Whether it's your dream wedding, a celebration of love, or a grand gathering Blue Mario is here to
          turn your vision into a spectacular reality. Let us design moments that live forever in hearts and memories.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=919633793951&text=Hello%20Blue%20Mario%20Events!"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <button className="btn btn-light px-5 py-2 rounded-pill fw-semibold">BOOK US NOW</button>
        </a>
      </div>
    </section>
  );
};

export default BookUsSection;
