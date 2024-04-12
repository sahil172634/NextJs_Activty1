import React from 'react';
import MediaButtons from '@/module/mobile/component/MediaButtons';
interface IProops {
  cssClass: string;
  ParaText: string;
  heading: string;
}
const InfoTextContainer = ({ cssClass, heading, ParaText }: IProops) => {
  return (
    <div className={`flex flex-col max-xmd:items-center xmd:w-1/2 ${cssClass}`}>
      <h2 className='text-2xl font-bold mb-3 xmd:mb-6 max-xmd:text-center '>{heading}</h2>
      <p className='text-base font-normal mb-6 text-at-dark-700 max-xmd:text-center'>{ParaText}</p>
      <MediaButtons cssClass='flex gap-4 mb-8 max-xmd:px-6' />
    </div>
  );
};

export default InfoTextContainer;
