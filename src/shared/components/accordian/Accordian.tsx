import { useRef, useState } from 'react';
import { IAccordian } from './accordian.interface';

const Accordian = ({ title, subTitle, subTitleCSS, titleCSS }: IAccordian): JSX.Element => {
  const [isShowSubTitle, setIsShowSubTitle] = useState<boolean>(false);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const onShowHideButton = () => {
    setIsShowSubTitle(!isShowSubTitle);
  };
  const renderTitle=()=>{
    return (
      <div onClick={onShowHideButton} className=' w-full flex items-center justify-between cursor-pointer'>
        <p className='text-base font-semibold pr-2'>{title}</p>
        <span className='font-semibold text-2xl'>{isShowSubTitle ? '-' : '+'}</span>
      </div>
    );
  }
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

export default Accordian;
