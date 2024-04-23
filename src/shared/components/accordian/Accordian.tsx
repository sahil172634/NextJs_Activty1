import { useRef, useState } from 'react';
import { IAccordian } from './accordian.interface';

const Accordian = ({ title, subTitle, className }: IAccordian): JSX.Element => {
  const [isShowSubTitle, setIsShowSubTitle] = useState<boolean>(false);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const fullHight = subTitleRef.current?.scrollHeight;
  const subTitleHight = isShowSubTitle ? `${fullHight}px` : '0px';
  const onShowHideButton = () => {
    setIsShowSubTitle(!isShowSubTitle);
    // subTitleRef.current.style.height = isShowSubTitle ? `${fullHight}px` : '0px';
  };
  const renderTitle = () => {
    return (
      <div onClick={onShowHideButton} className=' w-full flex items-center justify-between cursor-pointer'>
        <p className='text-base font-semibold pr-2'>{title}</p>
        <span className='font-semibold text-2xl'>{isShowSubTitle ? '-' : '+'}</span>
      </div>
    );
  };
  const renderSubTitle = () => {
    return (
      <div
        ref={subTitleRef}
        style={{ height: subTitleHight }}
        dangerouslySetInnerHTML={{ __html: subTitle }}
        className='overflow-hidden transition-all duration-500 mt-4'
      />
    );
  };
  return (
    <div className={className}>
      {renderTitle()}
      {renderSubTitle()}
    </div>
  );
};

export default Accordian;
