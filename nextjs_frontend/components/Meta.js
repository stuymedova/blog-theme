import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Meta({ siteSettings, pageTitle }) {
  const { title, url, description, favicon, image, twitterUsername, googleAnalyticsId } = siteSettings;
  const router = useRouter();

  return (
    <Head lang='en'>
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <link rel='canonical' href={`${url + router.asPath}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' />
      {favicon ? <link rel='shortcut icon' href={favicon.url} /> : null}

      <title>{!pageTitle ? title : `${pageTitle} | ${title}`}</title>
      <meta name='description' content={description} />

      <meta property='og:url' content={`${url + router.asPath}`} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={!pageTitle ? title : `${pageTitle} | ${title}`} />
      <meta property='og:description' content={description} />
      {image ? <meta property='og:image' content={image.url} /> : null}
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername ? <meta name='twitter:site' content={twitterUsername} /> : null}

      <meta name='theme-color' content='#ffffff' />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {googleAnalyticsId ? <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        /></> : null}
    </Head>
  );
};
