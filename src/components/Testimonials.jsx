import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'animate.css';

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
  {
    name: "Anjali Joy",
    message: `The stage decoration was absolutely stunning and exceeded all expectations. Every detail, from the lighting to the floral arrangements and backdrop design, was thoughtfully planned and beautifully executed.`,
  },
  {
    name: "Veena K",
    message: `Bluemario Decorations and Events turned my wedding dreams into a reality. Initially, I was hesitant because they were a bit distant, but their professionalism and talent quickly won me over.`,
  },
  {
    name: "Sedwin Vadukut",
    message: `This is the second time we are partnering with BlueMario for an event. This time it was for my son’s First Holy Communion. We virtually engaged Darwin and his team from our home base in Florida.`,
  },
  {
    name: "Saritha John",
    message: `It was such a good experience with bluemario team as the most efficient and budget friendly team. Truly a trustworthy and hardworking team. Highly recommended.`,
  },
  {
    name: "Swati Sukumar",
    message: `We were completely satisfied with their work. They were very professional and on time. The stage setup was lovely—perfectly minimal and elegant.`,
  },
  {
    name: "Namrata Antony",
    message: `BLUEMARIO! This is our third function with them. Special thanks to Darwin. He turns our dreams into reality. Truly exceptional team!`,
  },
  {
    name: "Varsha Paul",
    message: `Blue Mario team did a fab job for my betrothal. The flowers and banquet setup were beautiful and just how I wanted. Guests loved it.`,
  },
  {
    name: "Ashok Kumar",
    message: `It’s my cousin's baby’s baptism. They gave us a wonderful heavenly experience. Darwin and Visakh are very creative and customer friendly.`,
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section py-5 bg-light text-center">
      <h2 className="fw-bold mb-4 text-secondary animate__animated animate__fadeInDown">TESTIMONIALS</h2>
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
            <blockquote className="mx-auto animate__animated animate__fadeInUp" style={{ maxWidth: '900px' }}>
              <p className="fst-italic fs-7 text-muted">
                <span style={{ fontSize: '1.1rem', opacity: 0.1, verticalAlign: 'top' }}>&ldquo;</span>
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
