import React from 'react';
import '../styles/reset.css';
import '../public/fonts/globalFonts.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Layout from '../components/common/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
