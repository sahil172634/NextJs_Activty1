import { Html, Head, Main, NextScript } from 'next/document';
import { ImetaSEO } from '../module/development-details/component/seo/seo.interface';

export default function Document() {
  const metaData: ImetaSEO[] = [
    { property: 'og:type', content: 'website' },
    { name: 'author', content: 'resi.uatz.view.com.au' },
    { property: 'og:site_name', content: 'resi.uatz.view.com.au' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-itunes-app', content: 'app-id=474698182' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    { name: 'smartbanner:title', content: 'resi.uatz.view.com.au - Real Estate' },
    { name: 'smartbanner:author', content: 'resi.uatz.view.com.au' },
    { property: 'fb:admins', content: '785845464803058' },
    { name: 'smartbanner:price', content: 'FREE' },
    { name: 'smartbanner:price-suffix-apple', content: ' - On the App Store' },
    { name: 'smartbanner:price-suffix-google', content: ' - In Google Play' },
    { name: 'smartbanner:icon-apple', content: '/images/apple-icon.png' },
    { name: 'smartbanner:icon-google', content: '/images/android-icon.png' },
    { name: 'smartbanner:button', content: 'INSTALL' },
    {
      name: 'smartbanner:button-url-apple',
      content: 'https://itunes.apple.com/au/app/view-com-au-real-estate/id474698182?mt=8',
    },
    {
      name: 'smartbanner:button-url-google',
      content: 'https://play.google.com/store/apps/details?id=au.com.realestateview&amp;hl=en',
    },
    { name: 'smartbanner:enabled-platforms', content: 'android' },
    { name: 'smartbanner:hide-path', content: '/' },
    { name: 'smartbanner:hide-ttl', content: '1209600' },
  ];
  const renderMeta = () => {
    return (
      <>
        {metaData.map((meta, index) => (
          <meta key={index} {...meta} />
        ))}
      </>
    );
  };
  return (
    <Html lang='en'>
      <Head>{renderMeta()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
