import React from 'react';

interface IProops {
  title: string;
  subTitle?: string;
  children?: JSX.Element;
  cssClassName?: string;
}

const HeroContainer: React.FC<IProops> = ({ title, children, subTitle, cssClassName }: IProops): JSX.Element => {
  return (
    <div className={` mt-10 bg-at-blue-50 w-full rounded-xl p-6 md:px-16 md:py-12 mb-8  ${cssClassName}`}>
      <h1 className='text-5xl  xmd:text-7xl font-bold text-gray-800 '>{title}</h1>
      {subTitle && <p className='text-sm font-normal mt-4 xmd:text-lg mb text-gray-600'>{subTitle}</p>}
      {children}
    </div>
  );
};

export default HeroContainer;
