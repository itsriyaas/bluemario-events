import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      {/* Banner */}
      <div className="about-banner text-white d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="fade-down">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="vision-section py-5 p-3">
        <div className="container text-center">
          <h2 className="mb-4" data-aos="fade-up">OUR VISION</h2>
          <p
            className="homep text-muted mx-auto"
            style={{ maxWidth: '900px' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At <strong>Blue Mario Events</strong>, our vision is to become the premier wedding planner in Thrissur, recognized for turning ordinary events into remarkable experiences. We are committed to leading the event management sector in Kerala by embracing creativity, precision, and innovation - guaranteeing that each celebration embodies beauty, emotion, and elegance.
            <br /><br />
           Our goal is to craft unforgettable memories through impeccable wedding decor services, meticulous planning, and outstanding customer support
            <br /><br />
            With a team that lives and breathes events, we're here to transform your dreams into a breathtaking reality whether it's a grand destination affair or an intimate gathering of loved ones. Every element is designed to reflect your story, your style, your spirit.
            <br /><br />
            <strong>Our vision is simple:</strong> To bring your once-in-a-lifetime dreams to life with passion, purpose, and a touch of Blue Mario magic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
