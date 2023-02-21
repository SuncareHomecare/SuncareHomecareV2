import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css';

const about = [
    {
        name: 'Our Mission',
        description: `Suncare Homecare is a licensed provider of home and community-based services.
            Our mission is to empower individuals to maintain their independence
            and enhance their quality of life through compassionate and reliable
            care in the comfort of their own homes.`
    },
    {
        name: 'Our Values',
        description: `We believe that everyone deserves to live a life of dignity and respect,
            regardless of their physical or mental abilities. That's why we're 
            dedicated to providing exceptional care to our clients, helping them
            to achieve their goals and live life to the fullest.`
    },
    {
        name: 'Our Team',
        description: `Our experienced and highly trained care provider is committed 
            to providing the highest quality of care, tailored to meet the unique
            needs of each individual. Whether it's assistance with daily living
            activities, companionship, or medical care, we're here to support our
            clients and their families every step of the way.`
    },
    {
        name: 'Our Passion',
        description: `At Suncare Homecare, we're passionate about making a difference in 
            the lives of those we serve. If you're looking for a home care provider
            that truly cares, look no further than Suncare Homecare.`
    }
];

const AboutSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
          768: {
              slidesPerView:2,
          },
      }}
      className='serviceSlider min-h-[680px]'
      >
      {about.map((a, index) => {
          return (
          <>
              <SwiperSlide className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8' key={index}>
                 <div className='text-[26px] font-medium mb-4'>{a.name}</div>
                 <div className='text-[20px] mb-8'>{a.description}</div>
              </SwiperSlide>
          </>
          );
      })}
    </Swiper>
  );
};

export default AboutSlider;
