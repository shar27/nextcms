import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;; // Replace with your Measurement ID

const defaultDescription = "Looking for expert web design in High Wycombe? Our local web development company specializes in responsive and ecommerce web design tailored to small businesses. Enhance your online presence with our professional website designers and digital marketing services. Get in touch for SEO services in High Wycombe to boost your visibility and drive traffic to your site.";
const defaultOGURL = "https://www.webdesignhighwycombe.co.uk";
const defaultOGImage = "https://www.webdesignhighwycombe.co.uk/images/social-preview.jpg";



function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

   // Customize the default meta tags or page-specific meta tags
   const description = pageProps.description || defaultDescription;
   const ogURL = pageProps.url || `${defaultOGURL}${router.pathname}`;
   const ogImage = pageProps.image || defaultOGImage;

  return (
    <>
    <Head>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content="Web Design High Wycombe | Expert Web Development & SEO Services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogURL} />
        <link rel="icon" href="/favicon.ico" />
        <title>Web Design High Wycombe</title>
      </Head>
      <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      <Component {...pageProps} />
      </html>
    </>
  );
}

export default MyApp;
