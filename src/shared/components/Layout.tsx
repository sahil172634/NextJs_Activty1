import React, { ReactNode, useState } from 'react';
import Header from './header/header';
import Footer from './footer/Footer';
import SlideBar from './slidebar/SlideBar';
interface IchildrenProps {
  children?: ReactNode;
}
const Layout = ({ children }: IchildrenProps): JSX.Element => {
  const [isHamburgerShow, setIsHamburgerShow] = useState<boolean>(false);
  const onMenuButton = (): void => {
    setIsHamburgerShow(!isHamburgerShow);
  };
  return (
    <>
      <Header onMenuButton={onMenuButton} />
      <SlideBar isHamburgerShow={isHamburgerShow} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
