import React from 'react';
import Image from 'next/image';
import pretitleImg from '../public/img/hero/pretitle-img.svg';
import nurseImg from '../public/img/hero/hero-nurse.png';
import Header from './Header.js';


const Hero = () => {
    return <section id='hero' className='bg-cream lg:bg-services lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]'>
        <Header />
        <div className='container mx-auto flex justify-start items-end min-h-[400px] lg:h-[805px]'>
            <div className='lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0 mb-6'>
                <div className='hidden xl:flex mb-6 ml-5'>
                    <Image src={pretitleImg} width={'100%'} height={'auto'} alt='' />
                </div>
                <h1 className='text-5xl lg:text-8x1 uppercase font-bold -tracking-[0.05em] mb-10'>
                    Empowering independence <br />
                    <span className='text-orange font-normal'>through exceptional</span><br />
                    home care
                </h1>
                <a href='#services'>
                    <button className='btn btn-orange mx-auto lg:mx-0'>Learn more</button>
                </a>
            </div>
            <div className='lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0'>
                <div className='hidden xl:flex ml-5'>
                    <Image src={nurseImg} width={'100%'} height={'auto'} alt='' />
                </div>
            </div>
        </div>
    </section>
};

export default Hero;
