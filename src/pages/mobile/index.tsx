import Layout from '@/shared/components/layout/Layout';
import MediaButtons from '@/module/mobile/component/MediaButtons';
import Image from 'next/image';
import React from 'react';
import HeroSection from '@/shared/components/heroSection/heroSection';
import InfoTextContainer from '@/module/mobile/component/InfoTextContainer';

const index = () => {
  let heroHeadText = 'Explore properties wherever and whenever you like.';
  let heroParaText =
    'Available on iOS and Android, the resi.uatz.view.com.au app helps you keep on top of your property search with the latest real estate listings for sale, rent, recently sold, as well as unlisted properties.';
  return (
    <Layout>
      <main className='max-w-1200 mx-auto'>
        <section className='py-8 max-lg:p-4'>
          <HeroSection headText={heroHeadText} paraText={heroParaText}>
            <MediaButtons cssClass='flex gap-4 mt-6 xmd:mt-12' />
          </HeroSection>
          <div className='xmd:h-500 flex max-xmd:flex-col max-xmd:justify-center xmd:items-center'>
            <InfoTextContainer
              cssClass=' xmd:px-16 '
              heading='Save and track.'
              ParaText='Shortlist your favorite properties to keep track of upcoming open for inspections and auction. Login with your resi.uatz.view.com.au account to sync your saved properties between your computer and mobile devices.'
            />
            <Image
              src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-mobile.b0d0f9f8.png'
              alt='Web app mobile screen'
              width={2050}
              height={2543}
              className='px-75 xmd:pr-75 xmd:w-1/2'
            />
          </div>
          <div className='xmd:h-500 flex max-xmd:flex-col max-xmd:justify-center xmd:items-center'>
            <InfoTextContainer
              cssClass='xmd:pl-28 xmd:pr-75 xmd:order-1'
              heading='Search, plan and research properties.'
              ParaText='Search any property in Australia, get price data and suburb information, plus points of interest.'
            />
            <span className='xmd:pl-75 mx-auto'>
              <Image
                src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/landing-page-desktop.e2b2c6d9.png'
                alt='Web App Desktop Screen'
                width={750}
                height={575}
              />
            </span>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default index;
