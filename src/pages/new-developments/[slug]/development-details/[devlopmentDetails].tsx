import Image from 'next/image';
import { getDevelopmentDetails } from '@/src/module/development-details/API/devlopmentDeatils.api';
import HouseBHKInfo from '@/src/module/development-details/component/HouseBHKInfo';
import PropertyDescription from '@/src/module/development-details/component/PropertyDescription';
import HeroContainer from '@/src/shared/components/HeroContainer/HeroContainer';
import Layout from '@/src/shared/components/layout/Layout';
import SaleResidences from '@/src/module/development-details/component/SaleResidences';
import EmailIcon from '@/public/media/emailIcon.svg';
import phoneIcon from '@/public/media/phoneIcon.svg';
import mapIcon from '@/public/media/mapLocationIcon.svg';
import { IDevelopmentDetails } from '@/src/module/development-details/development-details.interface';
import ArrowAccordian from '@/src/shared/components/accordian/arrowAccordian';
import Button from '@/src/shared/components/Button/Button';

interface IProps {
  developmentDetail: IDevelopmentDetails;
}

const DevlopmentDetails = ({ developmentDetail }: IProps) => {
  const developmentLocation = `${developmentDetail.address.thoroughfareNumber} ${developmentDetail.address.thoroughfare}, ${developmentDetail.address.area}, ${developmentDetail.address.state} ${developmentDetail.address.postalCode} `;
  const displayLocation = `${developmentDetail.displaySuite.address.thoroughfareNumber} ${developmentDetail.address.thoroughfare}, ${developmentDetail.address.area}, ${developmentDetail.address.shortenState} ${developmentDetail.address.postalCode}`;
  const renderContactButtons = () => {
    return (
      <div className='flex gap-4'>
        <Button cssClass='text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center'>
          <Image src={EmailIcon} alt='Email Icon' width={20} height={20} />
          <span className='ml-2'>Enquire Now</span>
        </Button>
        <Button cssClass='text-black bg-white border-gray-300  rounded-lg flex items-center justify-center border '>
          <Image src={phoneIcon} alt='Email Icon' width={20} height={20} />
          <span className='ml-2'>Call us</span>
        </Button>
      </div>
    );
  };
  const renderSocialMediaLinks = () => {
    return (
      <div className='flex items-center gap-4 mt-4 sm:mt-2'>
        <a href='#' className='text-xl rounded-full bg-white w-8 h-8 flex justify-center items-center'>
          <Image
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Facebook - Original.fdf42c22.svg'
            alt='Facebook Page'
            width={16}
            height={16}
          />
        </a>
        <a href='#' className='text-xl rounded-full bg-white w-8 h-8 flex justify-center items-center'>
          <Image
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/Twitter - Original.1663187e.svg'
            alt='Twitter Page'
            width={16}
            height={16}
          />
        </a>
        <a href='#' className='text-xl rounded-full bg-white w-8 h-8 flex justify-center items-center'>
          <Image
            src='https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/mail-01.90592f30.svg'
            alt='Email Link'
            width={16}
            height={16}
          />
        </a>
      </div>
    );
  };
  const renderHeroContainer = () => {
    return (
      <HeroContainer title={developmentDetail.title} subTitle={developmentLocation} cssClassName='xmd:w-8/12 '>
        <div className='flex flex-col mt-8 xmd:flex-row justify-start xmd:justify-between xmd:items-center'>
          {renderContactButtons()}
          {renderSocialMediaLinks()}
        </div>
      </HeroContainer>
    );
  };
  const renderPropertyInfo = () => {
    return (
      <div>
        <p className='text-base font-medium'>About {developmentDetail.title}</p>
        <h2 className='text-lg font-medium mt-4 mb-2 xmd:text-2xl'>{developmentLocation}</h2>
        <p className='text-base font-normal mb-2 text-gray-500'>From ${developmentDetail.priceSearch}</p>
        <div className='flex gap-1 mb-2 xmd:mb-4'>
          <HouseBHKInfo
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
  const renderSaleResidences = () => {
    return (
      <>
        <h2 className='text-lg font-bold mb-4'>Off-The-Plan Residences For Sale At {developmentDetail.title}</h2>
        <div className='border-b border-gray-300 my-8 pb-8 w-full'>
          {developmentDetail.properties.map((property) => (
            <SaleResidences key={property.title} property={property} />
          ))}
        </div>
      </>
    );
  };
  const renderLocationInfo = () => {
    return (
      <>
        <h2 className='text-lg font-semibold'>Location of {developmentDetail.title}</h2>
        <div className='w-full my-4'>
          <div className='mb-4'>
            <h6 className='text-sm font-bold'>Development Location</h6>
            <p className='text-xs font-normal'>{developmentLocation}</p>
          </div>
          <div className='mb-4'>
            <h6 className='text-sm font-bold'>Display Location</h6>
            <p className='text-xs font-normal'>{displayLocation}</p>
          </div>
          <div className='mb-4'>
            <h6 className='text-sm font-bold'>Display Open Hours</h6>
            <p className='text-xs font-normal'>Not available</p>
          </div>
          <Button cssClass='w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center'>
            Request a private appointment
          </Button>
        </div>
      </>
    );
  };
  const renderInsightInfo = () => {
    return (
      <>
        <h3 className='text-lg font-semibold'>Insight on {developmentDetail.address.area} </h3>
        <div className='flex flex-col gap-4 mt-4'>
          <ArrowAccordian
            title='Meet the Neighbours near Surrey hills'
            subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius id perspiciatis, consequatur architecto modi necessitatibus sed numquam dolore ratione, nulla voluptates reprehenderit delectus et ducimus! Vel tempora sequi ex non.'
            titleCSS=' shadow rounded-lg p-4 border'
            subTitleCSS='mt-1'
          />
          <ArrowAccordian
            title='Surrey hills Suburb Trends'
            subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius id perspiciatis, consequatur architecto modi necessitatibus sed numquam dolore ratione, nulla voluptates reprehenderit delectus et ducimus! Vel tempora sequi ex non.'
            titleCSS=' shadow rounded-lg p-4 border '
            subTitleCSS='mt-1'
          />
        </div>
      </>
    );
  };
  const renderPropertyImage = () => {
    return (
      <span className='overflow-hidden rounded-lg  xmd:h-72  xmd:w-474 relative xmd:mt-10'>
        <Image
          src='https://d126h31mg8tzcs.cloudfront.net/arbour-park/gallery/image/images-1200x5501__original.jpg'
          alt='Property Image'
          fill
        />
      </span>
    );
  };
  return (
    <Layout>
      <main className='max-w-1200 mx-auto max-xmd:px-8'>
        <section className='flex gap-4 flex-col xmd:flex-row  '>
          {renderHeroContainer()}
          {renderPropertyImage()}
        </section>
        <section className='w-full xmd:w-8/12 pb-8 border-b border-gray-300'>
          {renderPropertyInfo()}
          <PropertyDescription description={developmentDetail.description.textProfile} />
        </section>
        <section className='w-full xmd:w-8/12 pt-8 pb-2'>{renderSaleResidences()}</section>
        <section className='w-full xmd:w-8/12'>{renderLocationInfo()}</section>
        <section className='w-full xmd:w-8/12 pt-8 py-6 border-t mt-4 xmd:mt-8'>{renderInsightInfo()}</section>
      </main>
    </Layout>
  );
};

export default DevlopmentDetails;

export const getServerSideProps = async (context: { params: { devlopmentDetails: string; slug: string } }) => {
  const resData = await getDevelopmentDetails();
  const developmentDetail = resData.props.pageProps.data.developmentDetail;
  const { params } = context;
  const { slug, devlopmentDetails } = params;
  const validSlug = resData.props.pageProps.data.slug;
  const validDevelopmentDetailsSlug = developmentDetail.slug.name;
  const validURL = `new-developments/${validSlug}/development-details/${validDevelopmentDetailsSlug}`;
  const currentURL = `new-developments/${slug}/development-details/${devlopmentDetails}`;
  if (currentURL !== validURL) {
    return {
      redirect: {
        destination: '/conveyancing',
      },
    };
  }
  return {
    props: {
      developmentDetail,
    },
  };
};
