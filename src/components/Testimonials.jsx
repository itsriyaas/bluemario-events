import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Nitisha Suresh",
    message: `We had a very good experience with Blue Mario event management team. Darwin and his team were very professional, prompt and had good ideas with very reasonable rates. I would highly recommend their services.`,
  },
  {
    name: "Theres Thomas",
    message: `Had associated with Bluemario team for 2 events… Would like to appreciate the patience of the team to consider all our suggestions and the effort put in..Loved the decor.. 👌… All the arrangements where to point.. Highly Recommended….👍🏻`,
  },
  {
    name: "Sowmya Binoy",
    message: `I recently had the pleasure of working with Blue Mario for our event, and I was thoroughly impressed with their stage decor services. From the initial consultation to the final setup, their attention to detail and creative vision were evident.`,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section py-5 bg-light text-center">
      <h2 className="fw-bold mb-4 text-secondary">TESTIMONIALS</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <blockquote className="mx-auto" style={{ maxWidth: '900px' }}>
              <p className="fst-italic fs-5 text-muted">
                <span style={{ fontSize: '3rem', opacity: 0.1, verticalAlign: 'top' }}>&ldquo;</span>
                {testimonial.message}
              </p>
              <h5 className="fw-bold text-dark mt-3">{testimonial.name}</h5>
            </blockquote>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
