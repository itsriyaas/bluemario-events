import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TasteSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container taste-section">
      <div className="taste-content" data-aos="fade-right">
        <h3>Crafting Moments<br /><small>Creating Memories</small></h3>
        <p className="description">
          At Blue Mario Events, we go beyond event planning — we craft unforgettable experiences tailored to your vision. From elegant weddings and dynamic corporate galas to themed celebrations full of personality, our team brings unmatched creativity, professionalism, and passion to every detail.
        </p>
        <div className="button-group">
          <a href='https://www.instagram.com/bluemariodecorationsandevents/' target='_blank' rel="noreferrer">
            <button className="btn btn-primary">Know More</button>
          </a>
          <Link to={"/contact"}>
            <button className="btn btn-secondary">Contact Us</button>
          </Link>
        </div>
      </div>

      <div className="taste-images" data-aos="fade-right">
        <img src="assets/works/wed14.jpg" alt="Dessert" className="image image-left" />
        <img src="assets/works/wed2.jpg" alt="Drinks" className="image image-right" />
      </div>
    </section>
  );
};

export default TasteSection;
