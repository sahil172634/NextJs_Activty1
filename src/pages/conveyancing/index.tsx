import Image from 'next/image';
import { DESCRIPTIONS, FAQs, FEEDBACKS } from '@/src/module/conveyancing/conveyancing.constant';
import HeroContainer from '@/src/shared/components/HeroContainer/HeroContainer';
import Accordian from '@/src/shared/components/accordian/Accordian';
import FeedbackContainer from '@/src/module/conveyancing/components/FeedbackContainer';
import Layout from '@/src/shared/components/layout/Layout';
import RedeemOfferForm from '@/src/module/conveyancing/components/RedeemOfferForm';

const Index = (): JSX.Element => {
  const renderHeroContainer = () => {
    return (
      <HeroContainer
        title='Buying or selling?'
        subTitle='Redeem your $220 conveyancing voucher and free contract review'
        ClassName='relative pt-24'
      >
        <a href='#' className='absolute top-6 md:top-12 md:right-14 w-14 h-14 md:w-24 md:h-24 xmd:w-32 xmd:h-32 '>
          <Image
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/settle-easy.53aca56e.svg'
            alt='Settle Easy Logo'
            width={120}
            height={120}
          />
        </a>
      </HeroContainer>
    );
  };
  const renderIframYtVideo = () => {
    return (
      <iframe
        src='https://www.youtube.com/embed/SklG0T_W0ao'
        width='100%'
        className='mb-4 xmd:mb-8 xmd:h-446 rounded-xl overflow-hidden'
      ></iframe>
    );
  };
  const renderVideoDescriptionText = () => {
    return (
      <div className='mb-8 xmd:mb-16 mt-3'>
        {DESCRIPTIONS.map((description) => (
          <div key={description} className='[&_p]:mb-4' dangerouslySetInnerHTML={{ __html: description }} />
        ))}
      </div>
    );
  };
  const renderFAQSection = () => {
    return (
      <div>
        <h2 className='text-base font-bold mb-4 xmd:mb-6'>Frequently Asked Questions</h2>
        {FAQs.map((faq, index) => {
          return (
            <Accordian
              key={index}
              title={faq.title}
              subTitle={faq.subTitle}
              className={index !== FAQs.length - 1 ? 'border-b pt-4' : 'pt-4'}
            />
          );
        })}
      </div>
    );
  };
  const renderFeedbackContainer = () => {
    return (
      <>
        <h3 className='text-base font-bold mx-4 mt-6 mb-4 xmd:pl-10 xmd:mx-auto xmd:text-2xl  xmd:mb-6'>
          What Settle Easy customers are saying...
        </h3>
        <div className='grid grid-cols-1 xmd:grid-cols-3 gap-4 px-4 xmd:px-10 pb-6 xmd:pb-10'>
          {FEEDBACKS.map((feedback,index) => (
            <FeedbackContainer key={index} feedback={feedback} />
          ))}
        </div>
      </>
    );
  };
  const renderYtVideoWithDescription = () => {
    return (
      <div className='xmd:w-58%'>
        {renderIframYtVideo()}
        {renderVideoDescriptionText()}
      </div>
    );
  };
  return (
    <Layout>
      <main className='max-w-1200 mx-auto'>
        <section className='py-6 max-xmd:px-4'>{renderHeroContainer()}</section>
        <section className='pb-6 max-xmd:px-4 relative'>
          {renderYtVideoWithDescription()}
          <RedeemOfferForm />
        </section>
        <section className='xmd:w-58%'>{renderFAQSection()}</section>
        <section className='xmd:rounded-xl mb-8 xmd:mb-14 bg-at-light-200 mt-10 pt-5'>
          {renderFeedbackContainer()}
        </section>
      </main>
    </Layout>
  );
};

export default Index;
