import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'assets/works/stage2.jpg',
  },
   {
    image: 'assets/works/stage6.jpg',
  },
  {
    image: 'assets/works/stage1.jpg',
  },
  {
    image: 'https://sunandseabeachweddings.com/wp-content/uploads/2021/11/0V9A7796-2-2.jpg',
  },
];

const SliderSection = () => {
  return (
    <div className="slider-wrapper" style={{ position: 'relative' }}>
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
            <div style={{ position: 'relative' }}>
              {/* Dark overlay on the left */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '40%',
                  height: '100%',
                  background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  zIndex: 1,
                }}
              ></div>

              {/* Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="slider-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSection;
