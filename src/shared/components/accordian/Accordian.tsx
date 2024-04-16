import { useState } from 'react';
import { IAccordian } from './accordian.interface';
interface IProops {
  QA: IAccordian;
}
const Accordian = ({ QA }: IProops): JSX.Element => {
  const [isShowAnswere, setIsShowAnswere] = useState<boolean>(false);
  const onShowHideButton = () => {
    setIsShowAnswere(!isShowAnswere);
  };
  const renderAnswer = () => {
    return (
      <div
        className={`bg-white overflow-hidden transition-all duration-500 pr-6 ${
          isShowAnswere ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {QA.answer.map((ans) => (
          <p className='text-sm font-normal mb-4' key={ans}>
            {ans}
          </p>
        ))}
        {QA.isRenderAsList && (
          <ul className='pl-7 mb-4 text-sm list-disc'>
            {QA.List!.map((ans) => (
              <li className='' key={ans}>
                {ans}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  return (
    <div className='border-b'>
      <button onClick={onShowHideButton} className=' w-full flex items-center justify-between py-3 '>
        <p className='text-base font-bold pr-2'>{QA.question}</p>
        <span className={`text-2xl font-medium pb-1`}>{isShowAnswere ? '-' : '+'}</span>
      </button>
      {renderAnswer()}
    </div>
  );
};

export default Accordian;
