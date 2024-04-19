import InputField from '@/src/shared/components/inputfield/InputField';
import SelectInputField from '@/src/shared/components/selectInpufield/selectInputField';
import Image from 'next/image';
import emailIcon from '@/public/media/emailIcon.svg';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { OPTIONS } from '../conveyancing.constant';

const RedeemOfferForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
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
          error={errors.firstName?.message?.toString()}
          register={register}
          rule={{
            required: 'First name is required',
          }}
        />
        <InputField
          cssclass='mb-4'
          label='Last name'
          name='lastName'
          type='text'
          error={errors.lastName?.message?.toString()}
          register={register}
          rule={{
            required: 'Last name is required',
          }}
        />
        <InputField
          cssclass='mb-4'
          label='Email'
          type='text'
          name='email'
          error={errors.email?.message?.toString()}
          register={register}
          rule={{
            required: 'Email is required.',
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/,
              message: 'Email is not valid.',
            },
          }}
        />
        <InputField
          cssclass='mb-4'
          label='Phone'
          register={register}
          name='phoneNumber'
          error={errors.phoneNumber?.message?.toString()}
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
        <SelectInputField
          label='State'
          name='state'
          register={register}
          rule={{ required: 'Please selcet state.' }}
          options={OPTIONS}
          error={errors.state?.message?.toString()}
        />
        <div className='mb-4 xmd:mb-6'>
          <label className='text-sm'>Comments or message</label>
          <textarea placeholder='Add a message' className='p-2 border rounded-lg border-gray-200 w-full'></textarea>
        </div>
        <button className=' px-4 py-2 font-bold text-white bg-at-blue-500 w-full rounded-lg flex items-center justify-center'>
          <Image src={emailIcon} alt='Email Icon' width={20} height={20} />
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

export default RedeemOfferForm;
