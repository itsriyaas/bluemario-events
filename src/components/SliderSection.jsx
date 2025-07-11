import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'assets/works/AJU08151-min.jpg',
  },
  {
    image: 'assets/works/wedding-02.jpg',
  },
  {
    image: 'assets/works/slider1.webp',
  },
];

const SliderSection = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        loop={true}
        speed={1000}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
