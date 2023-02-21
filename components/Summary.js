import React from 'react';
import Image from 'next/image';
import Img1 from '../public/img/summary/assist.png';

const Summary = () => {
  return (
    <section id='summary' className='bg-summary bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex'>
      <div className='container mx-auto flex flex-col lg:flex-row items center justify-center gap-x-16'>
        <div className='flex-1 mb-6 lg:mb-0'>
            <Image src={Img1} width={542} height={560} alt='' />
        </div>
        <div className='flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none'>
            <h2 className='h2 mb-6'>Providing Quality Care at Home.</h2>
            <p className='mb-6'>
                Suncare Homecare offers support to individuals in need of Home 
                and Community-Based Services. With a focus on reliable, compassionate
                care, Suncare aims to provide the highest quality services to those
                who require assistance in the comfort of their own homes in order
                to maintain their independence and enhance their quality of life.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
