import React from 'react';
import Image from 'next/image';
import Img1 from '../public/img/contact/img1.png';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]'>
          <div className='bg-contactOrange bg-center bg-cover bg-no-repeat flex-1 
            flex flex-col justify-center items-center px-8 lg:px-0 h-full'>
            <h2 className='h2 my-12'>Contact Us</h2>
            <ul className='mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4'>
                <li>Email: suncarehomecare@gmail.com</li>
                <li>Phone: (763) 291-2522</li>
                <li>Location: Twin Cities, MN</li>
            </ul>
          </div>
          <div className='bg-contactYellow bg-center bg-cover bg-no-repeat flex-1 
            flex justify-center items-end h-full'>
                <Image src={Img1} alt='' className='w-[540px]'/>
          </div>
      </div>
    </section>
  );
};

export default Contact;
