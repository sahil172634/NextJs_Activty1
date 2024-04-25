import React from 'react';
import { IDevelopmentDetails } from '../../development-details/development-details.interface';
import Head from 'next/head';

interface IProps {
  developmentDetail: IDevelopmentDetails;
  developmentLocation: string;
}

const SEO = ({ developmentDetail, developmentLocation }: IProps) => {
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
  return (
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
  );
};

export default SEO;
