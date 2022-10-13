import React, { useEffect } from 'react';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Layout from '../components/common/layout';
import { useRouter } from 'next/router';
import useLogin from 'utils/useLogin';
import Loading from 'components/atom/Loading/Loadingx';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLogin = useLogin();

  useEffect(() => {
    if (router.pathname.includes('/gembox') || router.pathname === '/setting') {
      if (!isLogin) router.push('/');
    }
  }, []);
  if (
    (router.pathname.includes('/gembox') || router.pathname === '/setting') &&
    !isLogin
  )
    return <Loading />;
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
