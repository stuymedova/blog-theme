import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preload' href='/fonts/AkzidenzGroteskPro-Regular.woff2' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/AkzidenzGroteskPro-It.woff2' as='font' crossOrigin='' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
