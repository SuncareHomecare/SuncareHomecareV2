import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8'>
      <div className='container mx-auto'>
        <div className='flex flelx-col lg:flex-row justify-between'>
            <div className='flex-1 text-orange text-4xl text-center lg:text-left flex items-center
                justify-center lg:justify-start mb-6'>
                Suncare Homecare
            </div>
            <div className='text-white flex-1'>
                <ul className='flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8'>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#services'>Services</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
