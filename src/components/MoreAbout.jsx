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

          Blue Mario Events creates unforgettable moments from your ideas. We combine innovation, elegance, and passion to deliver seamless experiences that reflect your unique style and celebration goals, whether they're dreamy weddings or stylish corporate gatherings.

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
