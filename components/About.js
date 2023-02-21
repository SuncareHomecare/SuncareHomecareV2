import React from 'react';
import AboutSlider from './AboutSlider';

const About = () => {
  return (
    <section id='about' className='bg-about bg-cover bg-no-repeat bg-center min-h-[862px] py-8'>
      <div className='container mx-auto h-[862px]'>
        <h2 className='h2 mb-4'>About us</h2>
        <AboutSlider />
      </div>
    </section>
  );
};

export default About;
