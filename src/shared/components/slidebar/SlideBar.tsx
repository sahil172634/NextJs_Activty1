import React from 'react';
import { SLIDEBAR_LINKS } from '@/shared/components/slidebar/slidebar.constant';
import SlideBarLInk from '@/shared/components/slidebar/SlideBarLInk';
interface IProps {
  isShowHamburger: boolean;
}
const SlideBar = ({ isShowHamburger }: IProps): JSX.Element => {
  let cssStyle = isShowHamburger ? 'translate-x-0' : '-translate-x-full';
  const renderSlideBarLinks = () => {
    return (
      <ul
        className={`w-full h-screen bg-white fixed left-0 pt-52 top-0 transition transform overflow-y-auto duration-200 ease-out lg:hidden pb-8 ${cssStyle}`}
      >
        {SLIDEBAR_LINKS.map((link, index) => (
          <>
            <SlideBarLInk link={link} />
            {index === 4 && <hr className='my-4  w-full block' />}
          </>
        ))}
      </ul>
    );
  };
  return renderSlideBarLinks();
};

export default SlideBar;
