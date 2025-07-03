import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90CW4d0wqTB3Xjlx5gXDn79u-LOpkAJcsWbVFamtOmBP7GXy0loNz7drYfmETJEEO9R_jGP0RIeIICFmqlSdFGU8NmKCNOlqPWhxYSCpSVfKMNqro4OPguu8WI5zeJjjapuyxJpR4Q=s3840-w3840-h1902-rw',
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:1000/1*Fyog5mfmYFNUu08GR3OZjw.jpeg',
  },
  {
    image: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/02/002-3.jpg',
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
