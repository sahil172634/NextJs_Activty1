import React from 'react';

interface IProops {
  headText: string;
  paraText?: string;
  children?: JSX.Element;
}

const HeroSection = ({ headText, children, paraText }: IProops) => {
  return (
    <div className='bg-at-blue-50 w-full rounded-xl p-6 xmd:px-16 xmd:py-12 mb-16'>
      <h1 className='text-5xl  xmd:text-7xl font-bold text-gray-800 '>{headText}</h1>
      {paraText && <p className='text-sm font-normal mt-4 xmd:text-lg mb'>{paraText}</p>}
      {children}
    </div>
  );
};

export default HeroSection;
