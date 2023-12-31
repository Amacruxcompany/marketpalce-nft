import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-lexend font-semibold'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
