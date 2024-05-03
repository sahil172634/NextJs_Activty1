import Image from 'next/image';
import React from 'react';
import Accommodation from '@/src/module/development-details/component/Accommodation';
import { IProperties } from '../development-details.interface';
import fallBackImg from '@/public/media/placeholder.f9b0991d.png';

interface IProps {
  property: IProperties;
}
const PropertyCard = ({ property }: IProps) => {
  const renderPropertyImage = () => {
    const imgSrc = property.files.thumbnail[0].url;
    return (
      <Image src={imgSrc ? imgSrc : fallBackImg} alt='Property Image' width={80} height={80} className='rounded-lg' />
    );
  };
  const onDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const renderPropertyInfo = () => {
    return (
      <div className='w-full ml-4 flex flex-col justify-between '>
        <p className='text-lg font-semibold'>{property.title}</p>
        <p className='text-gray-500 text-base font-normal'>{property.priceDisplay}</p>
        <div className='flex w-fit' onClick={onDivClick}>
          <Accommodation bedrooms={property.bedrooms} bathroom={property.bathrooms} parking={property.carSpaces} />
          <p className='text-sm text-gray-500 capitalize pl-2 mr-2'>{property.discr}</p>
        </div>
      </div>
    );
  };
  return (
    <a href='#' className='flex border p-4 rounded-lg shadow mb-4'>
      {renderPropertyImage()}
      {renderPropertyInfo()}
    </a>
  );
};

export default PropertyCard;
