import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <meta
          name="description"
          content="A simple project starter to work with typescript, react, next.js and styled-components"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
