import React, { useState } from 'react';
import { WEBVIEW_LINKS } from './header.constant';
import Link from 'next/link';
import Image from 'next/image';
import { I_headerProp } from './header.interface';
import Hamburger from 'hamburger-react';
const Header = ({ onMenuButton }: I_headerProp): JSX.Element => {
  return (
    <header className='border-b sticky  top-0 bg-white z-50'>
      <nav className='max-w-1200 flex justify-between items-center h-52 lg:h-16 mx-auto '>
        <div className='flex gap-1'>
          <button onClick={onMenuButton} className='lg:hidden '>
            <Hamburger direction='right' size={25} />
          </button>
          <Image
            src='https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg'
            alt='viewLogo'
            width={95}
            height={32}
            className='ml-2'
          />
        </div>
        <ul className='hidden lg:flex gap-8 text-base text-at-dark-500 font-normal '>
          {WEBVIEW_LINKS.map((linkName) => (
            <li key={linkName} className='hover:underline'>
              <Link href='/'>{linkName}</Link>
            </li>
          ))}
        </ul>
        <button className='bg-at-blue-500 hover:bg-sky-700 h-10 w-28 lg:h-11 lg:w-32 rounded-lg text-white font-semibold lg:font-bold mr-3 lg:mr-1'>
          Join/Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
