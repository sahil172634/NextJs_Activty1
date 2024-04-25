import React, { useRef, useState } from 'react';
import { IFeedback } from '../conveyancing.interface';
import Image from 'next/image';
import star from '@/public/media/star.svg';
import ShowMoreBtn from '@/src/shared/components/Button/ShowMoreBtn';

interface IProop {
  feedback: IFeedback;
}

const FeedbackContainer = ({ feedback }: IProop) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const onShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const renderStarWithTimeStamp = () => {
    return (
      <div className='flex justify-between mb-4'>
        <div className='flex gap-1 justify-center items-center'>
          <Image src={star} alt='star' width={20} height={20} />
          <Image src={star} alt='star' width={20} height={20} />
          <Image src={star} alt='star' width={20} height={20} />
          <Image src={star} alt='star' width={20} height={20} />
          <Image src={star} alt='star' width={20} height={20} />
        </div>
        <span className='text-xs font-normal text-gray-500'>{feedback.timeAgo}</span>
      </div>
    );
  };

  const renderFeedbackText = () => {
    return (
      <div>
        <p
          ref={descriptionRef}
          style={isShowMore ? { height: descriptionRef.current?.scrollHeight } : { height: '75px' }}
          className='overflow-hidden transition-all duration-500 '
        >
          {feedback.description}
        </p>
        <ShowMoreBtn onShowMore={onShowMore} isShowMore={isShowMore} />
      </div>
    );
  };
  return (
    <div className='bg-white border shadow-sm rounded-xl h-fit p-4 '>
      {renderStarWithTimeStamp()}
      {renderFeedbackText()}
      <p className='text-sm font-bold mt-4'>{feedback.reviewerName}</p>
    </div>
  );
};

export default FeedbackContainer;
