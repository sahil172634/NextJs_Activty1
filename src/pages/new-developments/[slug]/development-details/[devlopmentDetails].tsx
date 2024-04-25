import Image from 'next/image';
import { IDevelopmentDetails } from '@/src/module/development-details/development-details.interface';
import AboutProperty from '@/src/module/development-details/component/AboutProperty';
import HeroContainer from '@/src/shared/components/HeroContainer/HeroContainer';
import Layout from '@/src/shared/components/layout/Layout';
import PropertyCard from '@/src/module/development-details/component/PropertyCard';
import EmailIcon from '@/public/media/emailIcon.svg';
import phoneIcon from '@/public/media/phoneIcon.svg';
import ArrowAccordian from '@/src/shared/components/accordian/arrowAccordian';
import Button from '@/src/shared/components/Button/Button';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const slug = context.params?.slug;
  const devlopmentDetails = context.params?.devlopmentDetails;
  try {
    const response = await fetch('https://run.mocky.io/v3/32bc605c-45b7-49f9-8a1a-ee8aa84d2289');
    const resData = await response.json();
    const developmentDetail = resData.props.pageProps.data.developmentDetail;
    const validSlug = resData.props.pageProps.data.slug;
    const validDevelopmentDetailsSlug = developmentDetail.slug.name;
    const validURL = `new-developments/${validSlug}/development-details/${validDevelopmentDetailsSlug}`;
    const currentURL = `new-developments/${slug}/development-details/${devlopmentDetails}`;
    if (currentURL !== validURL) {
      return {
        redirect: {
          destination: '/conveyancing',
          permanent: false,
        },
      };
    }
    return {
      props: {
        developmentDetail,
      },
    };
  } catch {
    return {
      props: {
        error: 'Failed to load data',
      },
    };
  }
};

interface IProps {
  developmentDetail: IDevelopmentDetails;
  error?: string;
}

const DevlopmentDetails = (props: IProps) => {
  if (props.error) {
    return <HeroContainer title={props.error} />;
  }

  const { developmentDetail } = props;
  const displayLocation = `${developmentDetail.displaySuite.address.thoroughfareNumber} ${developmentDetail.address.thoroughfare}, ${developmentDetail.address.area}, ${developmentDetail.address.shortenState} ${developmentDetail.address.postalCode}`;
  const developmentLocation = `${developmentDetail.address.thoroughfareNumber} ${developmentDetail.address.thoroughfare}, ${developmentDetail.address.area}, ${developmentDetail.address.state} ${developmentDetail.address.postalCode}`;
  const content = `${developmentDetail.address.thoroughfareNumber}, ${developmentDetail.address.thoroughfare}, ${developmentDetail.address.area} | Apartments for Sale | ${developmentDetail.address.state} - resi.uatz.view.com.au`;
  const pageDescription = `${developmentDetail.title} is located on ${developmentLocation}. Pricing and available for this New Development by ${developmentDetail.title}. Visit the site for more details!`;

  const ldJsonData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization ',
        name: 'view.com.au',
        url: 'https://resi.uatz.view.com.au/',
        logo: '	https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg',
      },
      {
        '@type': 'Residence',
        url: 'https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/',
        address: {
          '@type': 'PostalAddress',
          addressLocality: developmentDetail.address.area,
          streetAddress: `${developmentDetail.address.thoroughfareNumber} ${developmentDetail.address.thoroughfare}`,
          postalCode: developmentDetail.address.postalCode,
          addressCountry: {
            '@type': 'Country',
            name: developmentDetail.address.country,
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: developmentDetail.address.area,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: developmentDetail.address.latitude,
            longitude: developmentDetail.address.longitude,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            name: 'WebPage',
            item: 'https://resi.uatz.view.com.au/new-developments/',
            position: 1,
          },
          {
            '@type': 'ListItem',
            name: 'SearchResultsPage',
            item: 'https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/',
            position: 2,
          },
          {
            '@type': 'ListItem',
            name: 'developmentDetailPage',
            item: 'https://resi.uatz.view.com.au/new-developments/',
            position: 3,
          },
        ],
      },
    ],
  };
  const renderContactButtons = () => {
    return (
      <div className='flex gap-4'>
        <Button className='text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center'>
          <Image src={EmailIcon} alt='Email Icon' width={20} height={20} />
          <span className='ml-2'>Enquire Now</span>
        </Button>
        <Button className='text-black bg-white border-gray-300  rounded-lg flex items-center justify-center border '>
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
      <HeroContainer title={developmentDetail.title} subTitle={developmentLocation} ClassName='xmd:w-8/12 '>
        <div className='flex flex-col mt-8 xmd:flex-row justify-start xmd:justify-between xmd:items-center'>
          {renderContactButtons()}
          {renderSocialMediaLinks()}
        </div>
      </HeroContainer>
    );
  };
  const renderSaleResidences = () => {
    return (
      <>
        <h2 className='text-lg font-bold mb-4'>Off-The-Plan Residences For Sale At {developmentDetail.title}</h2>
        <div className='border-b border-gray-300 my-8 pb-8 w-full'>
          {developmentDetail.properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
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
          <Button className='w-full text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center'>
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
            subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius id perspiciatis, consequatur architecto modi necessitatibus sed numquam dolore ratione, nulla voluptates'
            className='shadow rounded-lg p-4 border'
          />
          <ArrowAccordian
            title='Surrey hills Suburb Trends'
            subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius id perspiciatis, consequatur architecto modi necessitatibus sed numquam dolore ratione, nulla voluptates.'
            className='shadow rounded-lg p-4 border '
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
      <Head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }} />
        <title>{content}</title>
        <link
          rel='canonical'
          href='https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/'
        />
        <meta property='og:title' content={content} />
        <meta name='twitter:title' content={content} />
        <meta name='description' content={pageDescription} />
        <meta property='og:description' content={pageDescription} />
        <meta name='twitter:description' content={pageDescription} />
        <meta
          property='og:street-address'
          content={`${developmentDetail.address.thoroughfareNumber} ${developmentDetail.address.thoroughfare} ${developmentDetail.address.area}`}
        />
        <meta property='og:locality' content={developmentDetail.address.area} />
        <meta property='og:postal-code' content={developmentDetail.address.postalCode} />
        <meta property='og:country-name' content={developmentDetail.address.country} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ViewComAu' />
        <meta name='twitter:creator' content='@ViewComAu' />
        <meta property='og:image' content={developmentDetail.image} />
        <meta name='twitter:image' content={developmentDetail.image} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
      </Head>
      <main className='max-w-1200 mx-auto max-xmd:px-8'>
        <section className='flex gap-4 flex-col xmd:flex-row  '>
          {renderHeroContainer()}
          {renderPropertyImage()}
        </section>
        <section className='w-full xmd:w-8/12 pb-8 border-b border-gray-300'>
          <AboutProperty
            developmentDetail={developmentDetail}
            developmentLocation={developmentLocation}
            displayLocation={displayLocation}
          />
        </section>
        <section className='w-full xmd:w-8/12 pt-8 pb-2'>{renderSaleResidences()}</section>
        <section className='w-full xmd:w-8/12'>{renderLocationInfo()}</section>
        <section className='w-full xmd:w-8/12 pt-8 py-6 border-t mt-4 xmd:mt-8'>{renderInsightInfo()}</section>
      </main>
    </Layout>
  );
};

export default DevlopmentDetails;
