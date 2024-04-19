import Image from 'next/image';
import Arrow from '@/public/media/arrow.svg';
import React from 'react';
interface IProps {
  isShowMore: boolean;
  onShowMore: () => void;
  cssClass?: string;
}
const ShowMoreBtn = ({ onShowMore, isShowMore, cssClass }: IProps) => {
  return (
    <button onClick={onShowMore} className={`text-blue-600 mt-2 flex gap-2 items-center ${cssClass}`}>
      <span>Show {isShowMore ? 'less' : 'more'}</span>
      <span className={` duration-500   ${isShowMore && 'rotate-180'}`}>
        <Image src={Arrow} alt='Arrow Icon' width={12} height={8} />
      </span>
    </button>
  );
};

export default ShowMoreBtn;
