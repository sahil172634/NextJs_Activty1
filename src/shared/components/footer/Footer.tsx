import React from 'react';
import {
  FOOTER_TOP_LINKS,
  FOOTER_MOBILEVIEW_LINKS,
  FOOTER_WEBVIEW_LINKS,
  SOCIAL_ICONS,
} from '@/src/shared/components/footer/footer.constant';
import Image from 'next/image';

import { IFooterLinks } from './footer.interface';
const Footer = (): JSX.Element => {
  const renderSocialIcons = () => {
    return (
      <div className='flex gap-6 max-w-248 lg:max-w-216 max-lg:mx-auto'>
        {SOCIAL_ICONS.map((link) => (
          <a href={link.href} key={link.src}>
            <Image src={link.src} alt={link.alt} width={24} height={24} />
          </a>
        ))}
      </div>
    );
  };

  const renderFooterTopLinks = () => {
    return (
      <ul className='lg:flex gap-6 hidden text-at-dark-700'>
        {FOOTER_TOP_LINKS.map((link) => (
          <li key={link.title} className=' hover:underline'>
            {link.href && <a href={link.href}>{link.title}</a>}
          </li>
        ))}
      </ul>
    );
  };
  const renderFooterMainlinks = (links: IFooterLinks[]) => {
    return (
      <ul>
        {links.map((link) => (
          <li key={link.title} className='mt-4 hover:underline'>
            {link.href && <a href={link.href}>{link.title}</a>}
          </li>
        ))}
      </ul>
    );
  };
  const renderMobileViewLinks = () => {
    return (
      <ul className='grid w-full grid-cols-2 grid-rows-2 gap-2 text-center text-at-dark-700 py-6 border-b lg:hidden hover:underline'>
        {FOOTER_MOBILEVIEW_LINKS.map((link) => (
          <li key={link.title} className='mt-2'>
            {link.href && <a href={link.href}>{link.title}</a>}
          </li>
        ))}
      </ul>
    );
  };
  const renderWebViewMainLinks = () => {
    return (
      <div className='py-2 lg:grid grid-cols-4 h-272 border-b border-gray-200 hidden  text-at-dark-700'>
        {renderFooterMainlinks(FOOTER_WEBVIEW_LINKS[0])}
        {renderFooterMainlinks(FOOTER_WEBVIEW_LINKS[1])}
        {renderFooterMainlinks(FOOTER_WEBVIEW_LINKS[2])}
        {renderFooterMainlinks(FOOTER_WEBVIEW_LINKS[3])}
      </div>
    );
  };
  return (
    <footer className='max-w-1200 mx-auto'>
      <div className='flex justify-between h-72px items-center border-b border-gray-200'>
        {renderSocialIcons()}
        {renderFooterTopLinks()}
      </div>
      {renderWebViewMainLinks()}
      {renderMobileViewLinks()}
      <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
        <div className='max-lg:flex max-lg:flex-col max-lg:items-center flex justify-between mt-8'>
          <Image
            src='https://view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg'
            alt='ViewLogo'
            width={109}
            height={28}
          />
          <div className='flex flex-col items-center  lg:flex-row gap-1'>
            <p className='w-210 lg:w-32  lg:h-8 text-sm lg:text-center text-at-dark-700'>
              Part of View Media Group (VMG)
            </p>
            <Image
              src='https://view.com.au/viewstatic/lancer/_next/static/media/VMG_logo.24597d8a.png'
              alt='View'
              width={110}
              height={25}
            />
          </div>
        </div>
        <p className='text-sm py-2 text-at-dark-500'>Copyright © 2001-2024 | view.com.au Pty Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
