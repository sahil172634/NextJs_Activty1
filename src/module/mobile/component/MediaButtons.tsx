import Image from 'next/image';
import React from 'react';
interface IProps {
  cssClass?: string;
}

const MediaButtons = ({ cssClass }: IProps) => {
  return (
    <div className={cssClass}>
      <a href='#'>
        <Image
          src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/AppStore.36362f83.svg'
          alt='apple store image'
          width={166}
          height={55}
        />
      </a>
      <a href='#'>
        <Image
          src='	https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/PlayStore.7128a9f5.svg'
          alt='play store image'
          width={186}
          height={55}
        />
      </a>
    </div>
  );
};

export default MediaButtons;
