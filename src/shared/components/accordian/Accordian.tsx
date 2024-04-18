import { useRef, useState } from 'react';
import { IAccordian } from './accordian.interface';
interface IProops {
  QA: IAccordian;
  cssClass?: string;
}
const Accordian = ({ QA, cssClass }: IProops): JSX.Element => {
  const [isShowAnswere, setIsShowAnswere] = useState<boolean>(false);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const onShowHideButton = () => {
    setIsShowAnswere(!isShowAnswere);
  };
  const renderSubTitle = () => {
    return (
      <div
        ref={subTitleRef}
        style={isShowAnswere ? { height: subTitleRef.current?.scrollHeight } : { height: '0px' }}
        dangerouslySetInnerHTML={{ __html: QA.subTitle }}
        className={`overflow-hidden transition-all duration-500 [&_p]:mb-4 [&_ul]:pl-7 [&_ul]:mb-4 [&_ul]:list-disc`}
      />
    );
  };
  return (
    <div className={cssClass}>
      <div onClick={onShowHideButton} className=' w-full flex items-center justify-between py-3 '>
        <p className='text-base font-bold pr-2'>{QA.title}</p>
        <span className={`font-medium ${isShowAnswere ? ' text-3xl -mt-1' : 'text-2xl'}`}>
          {isShowAnswere ? '-' : '+'}
        </span>
      </div>
      {renderSubTitle()}
    </div>
  );
};

export default Accordian;
