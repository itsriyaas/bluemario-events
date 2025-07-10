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
          <h1 className="display-5 fw-bold">ABOUT US</h1>
        </div>
      </div>

      <div className="vision-section py-5">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold" data-aos="fade-up">OUR VISION</h2>
          <p
            className="text-muted mx-auto"
            style={{ maxWidth: '900px' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At <strong>BlueMario Events</strong>, we believe every celebration is a beautiful story waiting to be told and your wedding is the most enchanting chapter of all. From the first detail to the final moment, we craft experiences that are deeply personal, emotionally rich, and unforgettable.
            <br /><br />
            Weddings aren't just events — they're timeless memories, shared laughter, joyful tears, and fleeting moments captured in photographs, held in hearts, and passed down through generations. That's why we approach every wedding with passion, creativity, and the utmost care.
            <br /><br />
            With a team that lives and breathes events, we're here to transform your dreams into a breathtaking reality — whether it's a grand destination affair or an intimate gathering of loved ones. Every element is designed to reflect your story, your style, your spirit.
            <br /><br />
            <strong>Our vision is simple:</strong> To bring your once-in-a-lifetime dreams to life with passion, purpose, and a touch of Blue Mario magic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
