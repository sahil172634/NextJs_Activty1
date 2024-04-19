import ShowMoreBtn from '@/src/shared/components/Button/ShowMoreBtn';
import React, { useRef, useState } from 'react';
interface IProps {
  description: string;
}
const PropertyDescription = ({ description }: IProps) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const onShowMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div>
      <div
        ref={descriptionRef}
        style={isShowMore ? { height: descriptionRef.current?.scrollHeight } : { height: '200px' }}
        className={`[&_p]:mt-7 overflow-hidden transition-all duration-500 ${
          !isShowMore && 'text-transparent bg-gradient-to-b from-black to-white bg-clip-text'
        }`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ShowMoreBtn onShowMore={onShowMore} isShowMore={isShowMore} />
    </div>
  );
};

export default PropertyDescription;
