import Image from 'next/image';
import { useRef, useState } from 'react';
import arrow from '@/public/media/blackArrow.svg';
import { IAccordian } from './accordian.interface';

const ArrowAccordian = ({ title, subTitle, subTitleCSS, titleCSS }: IAccordian): JSX.Element => {
  const [isShowSubTitle, setIsShowSubTitle] = useState<boolean>(false);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const onShowHideButton = () => {
    setIsShowSubTitle(!isShowSubTitle);
  };
  const renderTitle = () => {
    return (
      <div onClick={onShowHideButton} className=' w-full flex items-center justify-between cursor-pointer'>
        <p className='text-base font-semibold pr-2'>{title}</p>
        <span className={`font-medium duration-500  ${isShowSubTitle && 'rotate-180'} text-gray-400`}>
          <Image src={arrow} width={12} height={8} alt='Arrow Icon' />
        </span>
      </div>
    );
  };
  const renderSubTitle = () => {
    return (
      <div
        ref={subTitleRef}
        style={isShowSubTitle ? { height: subTitleRef.current?.scrollHeight } : { height: '0px' }}
        dangerouslySetInnerHTML={{ __html: subTitle }}
        className={`overflow-hidden transition-all duration-500  ${subTitleCSS}`}
      />
    );
  };
  return (
    <div className={titleCSS}>
      {renderTitle()}
      {renderSubTitle()}
    </div>
  );
};

export default ArrowAccordian;
