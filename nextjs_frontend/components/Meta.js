import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Meta({ siteSettings }) {
  const { title, url, description, favicon, image, twitterUsername } = siteSettings;
  const router = useRouter();

  return (
    <Head>
      <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
      <link rel='canonical' href={`${url + router.asPath}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' />
      {favicon ? <link rel='shortcut icon' href={favicon.url} /> : null}

      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:url' content={`${url + router.asPath}`} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {image ? <meta property='og:image' content={image.url} /> : null}
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername ? <meta name='twitter:site' content={twitterUsername} /> : null}

      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}
