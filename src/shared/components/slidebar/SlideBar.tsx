import React from 'react';
import { HEADER_MOBILE_LINK } from './slidebar.constant';
import Link from 'next/link';
import Image from 'next/image';
import { I_slideBarProps } from './slidebar.interface';

const SlideBar = ({ isHamburgerShow }: I_slideBarProps):JSX.Element => {
  let cssStyle = isHamburgerShow ? 'translate-x-0' : '-translate-x-full';
  return (
    <ul
      className={`w-full h-screen bg-white fixed left-0 pt-52 top-0 transition transform overflow-y-auto duration-300 ease-out lg:hidden pb-8 ${cssStyle}`}
    >
      {HEADER_MOBILE_LINK.map((link, index) => (
        <li key={link.title} className={index <= 2 ? 'px-5 py-3' : 'px-3 py-3'}>
          <div className='flex gap-4 hover:underline'>
            {index > 2 && <Image src={link.src!} alt={link.alt!} width={20} height={20} />}
            <Link href='/' className={index <= 2 ? 'text-2xl font-medium ml-3' : ' text-base '}>
              {link.title}
            </Link>
          </div>
          {index === 4 && <hr className='my-4  w-full' />}
        </li>
      ))}
    </ul>
  );
};

export default SlideBar;
