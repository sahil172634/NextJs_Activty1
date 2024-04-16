import Image from 'next/image';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { DESCRIPTIONS } from '@/module/conveyancing/description/discription.constant';
import { OPTIONS } from '@/shared/components/selectInpufield/selectOptions.constants';
import { FAQs } from '@/shared/components/accordian/accrodian.constant';
import { FEEDBACKS } from '@/module/conveyancing/feedback/feddback.constant';
import Layout from '@/shared/components/layout/Layout';
import HeroContainer from '@/shared/components/HeroContainer/HeroContainer';
import InputField from '@/shared/components/inputfield/InputField';
import Accordian from '@/shared/components/accordian/Accordian';
import SelectInputField from '@/shared/components/selectInpufield/selectInputField';
import FeedbackContainer from '@/module/conveyancing/feedback/FeedbackContainer';

const Index = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const renderHeroContainer = () => {
    return (
      <HeroContainer
        title='Buying or selling?'
        subTitle='Redeem your $220 conveyancing voucher and free contract review'
        cssClassName='relative pt-24'
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
  const renderRedeemOfferForm = () => {
    return (
      <div className='pb-6 xmd:pb-6 rounded-xl xmd:absolute right-0 top-0 xmd:w-2/5 border border-at-light-500'>
        <p className='text-sm font-bold m-6'>
          Enter your details for your $220 conveyancing voucher and a free contract review
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='px-3 xmd:px-5'>
          <InputField
            cssclass='mb-4'
            label='First name'
            name='firstName'
            type='text'
            register={register}
            rule={{
              required: true,
            }}
          />
          {errors.firstName && <p className='text-red-500 text-xs'>First name is required</p>}
          <InputField
            cssclass='mb-4'
            label='Last name'
            name='lastName'
            type='text'
            register={register}
            rule={{
              required: true,
            }}
          />
          {errors.lastName && <p className='text-red-500 text-xs'>Last name is required</p>}

          <InputField
            cssclass='mb-4'
            label='Email'
            type='text'
            name='email'
            register={register}
            rule={{
              required: 'Email is required.',
              pattern: {
                value: /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                message: 'Email is not valid.',
              },
            }}
          />
          {errors.email && <p className='text-red-500 text-xs'>{errors.email.message?.toString()}</p>}
          <InputField
            cssclass='mb-4'
            label='Phone'
            register={register}
            name='phoneNumber'
            rule={{
              required: 'Mobile number is required.',
              maxLength: {
                value: 10,
                message: 'Mobile number not should be more than 10 digit',
              },
              minLength: {
                value: 10,
                message: 'Mobile number not should be less than 10 digit',
              },
            }}
            type='text'
          />
          {errors.phoneNumber && <p className='text-red-500 text-xs'>{errors.phoneNumber.message?.toString()}</p>}
          <SelectInputField
            label='State'
            name='state'
            register={register}
            rule={{ required: true }}
            options={OPTIONS}
          />
          {errors.state && <p className='text-red-500 text-xs'>Please selcet state.</p>}

          <div className='mb-4 xmd:mb-6'>
            <label className='text-sm'>Comments or message</label>
            <textarea placeholder='Add a message' className='p-2 border rounded-lg border-gray-200 w-full'></textarea>
          </div>
          <button className=' px-4 py-2 font-bold text-white bg-at-blue-500 w-full rounded-lg flex items-center justify-center'>
            <svg width='20' height='20' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.6665 3.83398L8.4706 8.59685C9.02158 8.98254 9.29707 9.17538 9.59672 9.25007C9.86142 9.31605 10.1383 9.31605 10.403 9.25007C10.7026 9.17538 10.9781 8.98254 11.5291 8.59685L18.3332 3.83398M5.6665 14.6673H14.3332C15.7333 14.6673 16.4334 14.6673 16.9681 14.3948C17.4386 14.1552 17.821 13.7727 18.0607 13.3023C18.3332 12.7675 18.3332 12.0674 18.3332 10.6673V5.33398C18.3332 3.93385 18.3332 3.23379 18.0607 2.69901C17.821 2.2286 17.4386 1.84615 16.9681 1.60647C16.4334 1.33398 15.7333 1.33398 14.3332 1.33398H5.6665C4.26637 1.33398 3.56631 1.33398 3.03153 1.60647C2.56112 1.84615 2.17867 2.2286 1.93899 2.69901C1.6665 3.23379 1.6665 3.93385 1.6665 5.33398V10.6673C1.6665 12.0674 1.6665 12.7675 1.93899 13.3023C2.17867 13.7727 2.56112 14.1552 3.03153 14.3948C3.56631 14.6673 4.26637 14.6673 5.6665 14.6673Z'
                stroke='#ffffff'
                fill=''
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
            <span className='text-base font-bold pl-2'>Redeem Offer</span>
          </button>
          <p className='text-sm text-gray-400 font-normal px-6 mt-3 text-center'>
            By submitting your details, you acknowledge that you accept our{' '}
            <a href='#' className='text-blue-500 text-sm hover:underline'>
              Privacy Policy.
            </a>
          </p>
        </form>
      </div>
    );
  };
  const renderParagraph = (subTitle: string | JSX.Element) => {
    return <p className='mb-4 text-base font-normal'>{subTitle}</p>;
  };
  const renderVideoDescriptionText = () => {
    const descriptionWithLlink = (
      <>
        In partnership with resi.uatz.view.com.au, <a className='underline'> Settle Easy</a> is currently offering new
        customers a $220 conveyancing voucher on their trusted
        <a className='underline'> online conveyancing services </a> and a free contract review. You&apos;ll only pay
        $880 incl. GST plus disbursements on a standard conveyancing transaction. Redeem today and use within 12 months.
      </>
    );
    return (
      <div className='mb-8 xmd:mb-16 mt-3'>
        {renderParagraph(descriptionWithLlink)}
        {DESCRIPTIONS.map((description) => renderParagraph(description))}
      </div>
    );
  };
  const renderAccordian = () => {
    return (
      <div>
        <h2 className='text-base font-bold mb-4 xmd:mb-6'>Frequently Asked Questions</h2>
        {FAQs.map((faq) => (
          <Accordian key={faq.question} QA={faq} />
        ))}
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
          {FEEDBACKS.map((feedback) => (
            <FeedbackContainer key={feedback.description} feedback={feedback} />
          ))}
        </div>
      </>
    );
  };
  return (
    <Layout>
      <main className='max-w-1200 mx-auto'>
        <section className='py-6 max-xmd:px-4'>{renderHeroContainer()}</section>
        <section className='pb-6 max-xmd:px-4 relative'>
          <div className='xmd:w-58%'>
            {renderIframYtVideo()}
            {renderVideoDescriptionText()}
            {renderRedeemOfferForm()}
            {renderAccordian()}
          </div>
        </section>
        <section className='xmd:rounded-xl mb-8 xmd:mb-14 bg-at-light-200 mt-10 pt-5'>
          {renderFeedbackContainer()}
        </section>
      </main>
    </Layout>
  );
};

export default Index;
