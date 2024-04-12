import { WEBVIEW_LINKS } from '@/shared/components/header/header.constant';
import Image from 'next/image';
import Hamburger from 'hamburger-react';
export interface IProp {
  onClickHamburger: () => void;
}
const Header = ({ onClickHamburger }: IProp): JSX.Element => {
  const renderHeaderLinks = () => {
    return (
      <ul className='hidden lg:flex gap-8 text-base text-at-dark-500 font-normal '>
        {WEBVIEW_LINKS.map((linkName) => (
          <li key={linkName.title} className='hover:underline'>
            <a href={linkName.href}>{linkName.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className='border-b sticky  top-0 bg-white z-50'>
      <nav className='max-w-1200 flex justify-between items-center h-52 lg:h-16 mx-auto '>
        <div className='flex gap-1'>
          <button onClick={onClickHamburger} className='lg:hidden '>
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
        {renderHeaderLinks()}
        <button className='bg-at-blue-500 hover:bg-sky-700 h-10 w-28 lg:h-11 lg:w-32 rounded-lg text-white font-semibold lg:font-bold mr-3 lg:mr-1'>
          Join/Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
