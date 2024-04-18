import React from 'react';
import Image from 'next/image';
import Layout from '@/src/shared/components/layout/Layout';
import MediaButtons from '@/src/module/mobile/component/MediaButtons';
import HeroContainer from '@/src/shared/components/HeroContainer/HeroContainer';
import InfoTextContainer from '@/src/module/mobile/component/InfoTextContainer';

const index = (): JSX.Element => {
  let heroTitle = 'Explore properties wherever and whenever you like.';
  let heroSubTitle =
    'Available on iOS and Android, the resi.uatz.view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties.';
  const renderHeroContainer = () => {
    return (
      <HeroContainer
        title={heroTitle}
        subTitle={heroSubTitle}
        cssClassName='bg-at-blue-50 w-full rounded-xl p-6 xmd:px-16 xmd:py-12 mb-16'
      >
        <MediaButtons cssClass='flex gap-4 mt-6 xmd:mt-12' />
      </HeroContainer>
    );
  };
  const renderMobileImgWithText = () => {
    return (
      <>
        <InfoTextContainer
          cssClass=' xmd:px-16 '
          title='Save and track.'
          subTitle='Shortlist your favorite properties to keep track of upcoming open for inspections and auction. Login with your resi.uatz.view.com.au account to sync your saved properties between your computer and mobile devices.'
        />
        <Image
          src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-mobile.b0d0f9f8.png'
          alt='Web app mobile screen'
          width={2050}
          height={2543}
          className='px-75 xmd:pr-75 xmd:w-1/2'
        />
      </>
    );
  };
  const renderTabImgwithText = () => {
    return (
      <>
        <InfoTextContainer
          cssClass='xmd:pl-28 xmd:pr-75 xmd:order-1'
          title='Search, plan and research properties.'
          subTitle='Search any property in Australia, get price data and suburb information, plus points of interest.'
        />
        <span className='xmd:pl-75 mx-auto'>
          <Image
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-desktop.e2b2c6d9.png'
            alt='Web App Desktop Screen'
            width={750}
            height={575}
          />
        </span>
      </>
    );
  };
  return (
    <Layout>
      <main className='max-w-1200 mx-auto'>
        <section className='py-6 max-xmd:px-4'>{renderHeroContainer()}</section>
        <section className='xmd:h-500 flex max-xmd:flex-col max-xmd:justify-center xmd:items-center'>
          {renderMobileImgWithText()}
        </section>
        <section className='xmd:h-500 flex max-xmd:flex-col max-xmd:justify-center xmd:items-center'>
          {renderTabImgwithText()}
        </section>
      </main>
    </Layout>
  );
};

export default index;
