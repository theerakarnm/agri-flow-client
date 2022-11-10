import '../styles/globals.css';
import Head from 'next/head';
import { og_seo } from '../config/seo_conf';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/* title */}
        <title>{og_seo.title}</title>
        {/* icon */}
        <link rel='icon' href={og_seo.tabimage} />
        {/* shortcut icon */}
        <link rel='shortcut icon' href={og_seo.tabimage} />
        {/* meta:og */}
        <meta property='og:title' content={og_seo.title} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={og_seo.url} />
        <meta property='og:image' content={og_seo.image} />
        <meta property='og:image:width' content={og_seo.width} />
        <meta property='og:image:height' content={og_seo.height} />
        <meta property='og:description' content={og_seo.description} />
        <meta property='og:locate' content={og_seo.locate} />
        <meta property='og:site_name' content={og_seo.site_name} />
        <meta property='og:locale' content={og_seo.locale} />
        <meta
          property='og:locale:alternate'
          content={og_seo.locale_alternate}
        />
        {/* meta:twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={og_seo.title} />
        <meta name='twitter:description' content={og_seo.description} />
        <meta name='twitter:image' content={og_seo.image} />
        <meta name='twitter:image:alt' content={og_seo.description} />
        <meta name='twitter:image:width' content={og_seo.width} />
        <meta name='twitter:image:height' content={og_seo.height} />
        {/* meta:google */}
        <meta name='description' content={og_seo.description} />
        <meta name='keywords' content={og_seo.keywords} />
        <meta name='author' content={og_seo.author} />
        <meta name='copyright' content={og_seo.copyright} />
        <meta name='robots' content={og_seo.robots} />
        <meta name='googlebot' content={og_seo.googlebot} />
        <meta name='google' content={og_seo.google} />
        <meta
          name='google-site-verification'
          content={og_seo.google_site_verification}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
