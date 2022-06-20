import React from 'react';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import HeaderContainer from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <HeaderContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;