import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add global stylesheets here */}
        <link
          href="https://fonts.cdnfonts.com/css/playfair-display"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
