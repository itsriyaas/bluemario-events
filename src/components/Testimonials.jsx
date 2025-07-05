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
   {
    name: "Anjali Joy",
    message: `The stage decoration was absolutely stunning and exceeded all expectations. Every detail, from the lighting to the floral arrangements and backdrop design, was thoughtfully planned and beautifully executed. It created a perfect atmosphere and truly elevated the entire event. A big thank you to the team for their creativity and professionalism!`,
  },
  {
    name: "Veena K",
    message: `Bluemario Decorations and Events turned my wedding dreams into a reality. Initially, I was hesitant because they were a bit distant, but their professionalism and talent quickly won me over. They flawlessly captured my vision for a dream Mandapam and transformed it into a stunning reality`,
  },
  {
    name: "Sedwin Vadukut",
    message: `This is the second time we are partnering with BlueMario for an event. This time it was for my son’s First Holy Communion. We virtually engaged Darwin and his team from several weeks before the event from our home base in Florida by sharing examples of how we would like the stage, decor and overall theme to be.`,
  },
  {
    name: "Saritha John",
    message: `It was such a good experience with bluemario team as the most efficient and budget friendly team.. A Truly trust worthy and hard working team, with no doubt a highly recommended event management team. Heartfelt gratitude from our family to bluemario for giving such a memorable work 🫶🏻🫶🏻`,
  },
  {
    name: "Swati Sukumar",
    message: `We were completely satisfied with their work. They were very professional and their work was on time. The stage setup and other arrangements were lovely, creating a perfect balance between minimalism and elegance.I am really happy with their work.We are extremely happy and satisfied with this team and we will make sure to book them for all out future events. Highly recomended.`,
  },
  {
    name: "Namrata Antony",
    message: `BLUEMARIO I really appreciate their hardwork and dedication.This is our third function we are giving to this team. I would like to special thanks to Darwin.He turns our dream into reality. The entire team demonstrated exceptional skill and professionalism, delivering outstanding results at a very competitive price. I will undoubtedly recommend your services to others.Thankyou BLUEMARIO and team to make this event so special❤️`,
  },
  {
    name: "Varsha Paul",
    message: `Blue Mario team did a fab job for my betrothal day decor . From the flower arrangements to the entire banquet setting everything was so beautiful and very well presented , exactly as how I wanted it to be . The guests were all impressed and thanks to the team .❤️`,
  },
   {
    name: "Ashok Kumar",
    message: `It’s my Cousins Babies Baptism at kalady. Worth for money. They have given us a wonderful heavenly experience. I already suggested to my friends in abroad. Mr Darwin and Mr Visakh are very creative and customer friendly.`,
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
