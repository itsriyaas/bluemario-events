import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'assets/works/slider1.webp',
  },
  {
    image: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/02/002-3.jpg',
  },
  {
    image: 'assets/works/AJU08151-min.jpg',
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
            <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
