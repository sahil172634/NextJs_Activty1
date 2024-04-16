import React from 'react';
import Image from 'next/image';
import { ISlideBarLinks } from '@/shared/components/slidebar/slidebar.interface';
interface IProps {
  link: ISlideBarLinks;
}
const SlideBarLInk = ({ link }: IProps): JSX.Element => {
  return (
    <li key={link.title} className={`${link.src ? 'px-5 py-3' : 'px-3 py-3'} flex gap-4  hover:underline`}>
      {link.src && <Image src={link.src!} alt={link.alt!} width={20} height={20} />}
      {link.href && (
        <a href={link.href} className={link.src ? ' text-base ' : 'text-2xl font-medium ml-3'}>
          {link.title}
        </a>
      )}
    </li>
  );
};

export default SlideBarLInk;
