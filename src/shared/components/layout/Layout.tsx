import React, { ReactNode, useState } from 'react';
import Header from '@/src/shared/components/header/header';
import Footer from '@/src/shared/components/footer/Footer';
import SlideBar from '@/src/shared/components/slidebar/SlideBar';
interface IProps {
  children?: ReactNode;
}
const Layout = ({ children }: IProps): JSX.Element => {
  const [isShowHamburger, setisShowHamburger] = useState<boolean>(false);
  const onClickHamburger = (): void => {
    setisShowHamburger(!isShowHamburger);
  };
  return (
    <>
      <Header onClickHamburger={onClickHamburger} />
      <SlideBar isShowHamburger={isShowHamburger} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
