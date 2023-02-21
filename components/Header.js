import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/img/header/logo.png';

const Header = () => {
  return (
    <header className='py-6 lg:absolute lg:w-full lg:left-0'>
      <div className='container mx-auto flex flex-col gap-y-6 gap-x-6 lg:flex-row h-full items-center relative lg:justify-between'>
        <a href='#hero' className='w-[208px]'>
            <Image src={Logo} />
        </a>
        <nav className='text-xl flex gap-x-4 lg:gap-x-12'>
            <Link href='#about'>About</Link>
            <a href='#services'>Services</a>
            <a href='#contact'>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
