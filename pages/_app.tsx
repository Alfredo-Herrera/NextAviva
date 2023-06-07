/* eslint-disable import/no-unresolved */
import { EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import { wrapper } from '../redux/store';
import theme from '../styles/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
