import Image from 'next/image';
import React from 'react';
interface IProps {
  bedrooms: string;
  bathroom: string;
  parking: string;
}
const renderBedroomInfo = (bedrooms: string) => {
  return (
    <div className='flex items-center gap-2 pr-2 border-r'>
      <Image
        src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Bedroom.4f0da04d.svg'
        alt='Bedroom Icon'
        width={16}
        height={16}
      />
      <span className='text-sm font-normal text-gray-500'>{bedrooms}</span>
    </div>
  );
};
const renderBathroomInfo = (bathroom: string) => {
  return (
    <div className='flex items-center gap-2 pr-2 border-r'>
      <Image
        src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Bathtub.275ab49f.svg'
        alt='Bathroom Icon'
        width={16}
        height={16}
      />
      <span className='text-sm font-normal text-gray-500'>{bathroom}</span>
    </div>
  );
};
const renderParkingInfo = (parking: string) => {
  return (
    <div className='flex items-center gap-2 pr-2 border-r'>
      <Image
        src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/parking.4027a27b.svg'
        alt='Parking Icon'
        width={16}
        height={16}
      />
      <span className='text-sm font-normal text-gray-500'>{parking}</span>
    </div>
  );
};
const HouseBHKInfo = ({ bedrooms, parking, bathroom }: IProps) => {
  return (
    <div className='flex gap-1 '>
      {renderBedroomInfo(bedrooms)}
      {renderBathroomInfo(bathroom)}
      {renderParkingInfo(parking)}
    </div>
  );
};

export default HouseBHKInfo;
