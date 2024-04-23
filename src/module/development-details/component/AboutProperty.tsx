import ShowMoreBtn from '@/src/shared/components/Button/ShowMoreBtn';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import RoomDetails from './RoomDetails';
import { IDevelopmentDetails } from '../development-details.interface';
import mapIcon from '@/public/media/mapLocationIcon.svg';
interface IProps {
  developmentDetail: IDevelopmentDetails;
  developmentLocation: string;
  displayLocation: string;
}
const AboutProperty = ({ developmentDetail, developmentLocation, displayLocation }: IProps) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const onShowMore = () => {
    setIsShowMore(!isShowMore);
  };
  const renderDescription = () => {
    return (
      <div
        ref={descriptionRef}
        style={isShowMore ? { height: descriptionRef.current?.scrollHeight } : { height: '200px' }}
        className={`[&_p]:mt-7 overflow-hidden transition-all duration-500 ${
          !isShowMore && 'text-transparent bg-gradient-to-b from-black to-white bg-clip-text'
        }`}
        dangerouslySetInnerHTML={{ __html: developmentDetail.description.textProfile }}
      />
    );
  };
  const renderPropertyInfo = () => {
    return (
      <div>
        <p className='text-base font-medium'>About {developmentDetail.title}</p>
        <h2 className='text-lg font-medium mt-4 mb-2 xmd:text-2xl'>{developmentLocation}</h2>
        <p className='text-base font-normal mb-2 text-gray-500'>From ${developmentDetail.priceSearch}</p>
        <div className='flex gap-1 mb-2 xmd:mb-4'>
          <RoomDetails
            bedrooms={developmentDetail.bedrooms}
            bathroom={developmentDetail.bathrooms}
            parking={developmentDetail.carSpaces}
          />
        </div>
        <div className='xmd:flex border-b border-gray-300 pb-8'>
          <div className='mb-2 xmd:pr-6 xmd:border-r xmd:border-gray-300'>
            <div className='flex gap-2 items-center mb-1'>
              <Image src={mapIcon} alt='map Icon' width={16} height={20} />
              <span className='text-sm font-normal '>Display Location</span>
            </div>
            <p className='text-base font-normal '>{displayLocation}</p>
          </div>
          <div className='mb-2 xmd:pl-6 xmd:pr-6 xmd:border-r xmd:border-gray-300'>
            <div className='flex gap-2 items-center mb-1'>
              <Image src={mapIcon} alt='map Icon' width={16} height={20} />
              <span className='text-sm font-normal '>Property Type</span>
            </div>
            <p className='text-base font-normal '>{developmentDetail.classification}</p>
          </div>
          <div className='xmd:pl-6'>
            <div className='flex gap-2 items-center mb-1'>
              <Image
                src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/new-dev-home.a180cb61.svg'
                width={14}
                height={15}
                alt='Home Icon'
              />
              <span className='text-sm font-normal '>size</span>
            </div>
            <p className='text-base font-normal '>{developmentDetail.totalProperties}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {renderPropertyInfo()}
      {renderDescription()}
      <ShowMoreBtn onShowMore={onShowMore} isShowMore={isShowMore} />
    </div>
  );
};

export default AboutProperty;
