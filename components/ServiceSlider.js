import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css/navigation';
import 'swiper/css';

import RespiteCareIcon from '../public/img/services/respite-care.svg';
import CompanionCareIcon from '../public/img/services/CompanionCare.svg';
import HomemakerIcon from '../public/img/services/homemaker.svg';
import NightSuperVisionIcon from '../public/img/services/night-supervision.svg';
import EmergencyIcon from '../public/img/services/24Hour.svg';
import IndependentLivingIcon from '../public/img/services/independent-living.svg';
import CommunityIcon from '../public/img/services/community.svg';

const services = [
    {
        image: CompanionCareIcon,
        name: 'Companion Care/Services',
        description: `Non-medical support services designed to provide social 
                      interaction, companionship, and assistance with daily living
                      activities.`
    },
    {
        image: HomemakerIcon,
        name: 'Homemaker Services',
        description: `Home management services, including meal preparation, cleaning,
                      and other household chores, to assist individuals with daily
                      living activities.`
    },
    {
        image: NightSuperVisionIcon,
        name: 'Night Supervision',
        description: `Over-night monitoring and supervision services to ensure the
                      safety and well-being of individuals during the night hours.`
    },
    {
        image: IndependentLivingIcon,
        name: 'Independent Living Skills',
        description: `Training and support services to help individuals with
                      disabilities to develop skills and confidence to live independently.`
    },
    {
        image: EmergencyIcon,
        name: '24 Hour Emergency Assistance',
        description: `Access to immediate assistance 24 hours a day, 7 days a week
                      in case of an emergency.`
    },
    {
        image: CommunityIcon,
        name: 'Individual Community Living Support',
        description: `Support services to help individuals participate in community
                      activities and events, promoting independence and integration
                      into the community.`
    },
    {
        image: RespiteCareIcon,
        name: 'Respite Care Services',
        description: `Respite care services are temporary in-home care services
                      provided to individuals who need a break from their caregiving
                      responsibilities. These services can be a lifesaver for family
                      caregivers, who may feel overwhelmed or burnt out, and can
                      provide them with the time and space they need to recharge.`
    }
];

const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
          1024: {
              slidesPerView:2,
          },
      }}
      className='serviceSlider min-h-[680px]'
      >
      {services.map((service, index) => {
          return (
          <>
              <SwiperSlide className='border border-primary/20 bg-cream min-h-[560px] max-h-[630px] rounded-[66px] py-16 px-8' key={index}>
                 <Image className='mb-9' src={service.image} alt={service.name}/> 
                 <div className='text-[26px] font-medium mb-4'>{service.name}</div>
                 <div className='text-[20px] mb-8'>{service.description}</div>
              </SwiperSlide>
          </>
          );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
