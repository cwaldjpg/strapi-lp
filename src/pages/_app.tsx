import React, { useEffect } from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { WithUserAgentProps, withUserAgent } from 'next-useragent';

import { getStrapiMedia } from 'utils/media';
import { getGlobalData } from 'utils/api';
import { imageInterface, metadataInterface } from 'utils/types';
import Layout from '@components/layout';
import theme from '@styles/theme';
import globalStyles from '@styles/globals';

interface globalInterface {
  metadata: metadataInterface;
}

const MyApp = ({ Component, pageProps, ua }: AppProps & WithUserAgentProps) => {
  // Prevent Next bug when it tries to render the [[...slug]] route
  const router = useRouter();
  if (router.asPath === '/[[...slug]]') {
    return null;
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  // Extract the data we need
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }
  const { metadata = {} }: globalInterface = global;

  const images = metadata.shareImage
    ? Object.values(metadata.shareImage.formats).map((image: imageInterface) => {
        return {
          url: getStrapiMedia(image.url),
          width: image.width,
          height: image.height,
        };
      })
    : [];

  return (
    <ThemeProvider theme={theme}>
      {/* Favicon */}
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon ? global.favicon.url : null)}
        />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={'Page'}
        description={metadata.metaDescription}
        openGraph={{
          description: metadata.metaDescription,
          ...images,
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      {/* Display the content */}
      <Layout global={global} ua={ua}>
        <Component {...pageProps} ua={ua} />
      </Layout>
    </ThemeProvider>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await getGlobalData();
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global, path: ctx.pathname } };
};

export default withStyles(globalStyles)(withUserAgent(MyApp));
