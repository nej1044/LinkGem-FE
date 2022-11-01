import React, { useEffect } from 'react';
import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Layout from '../components/common/layout';
import { useRouter } from 'next/router';
import useLogin from 'utils/useLogin';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLogin = useLogin();

  useEffect(() => {
    if (router.pathname.includes('/gembox') || router.pathname === '/setting') {
      if (!isLogin) router.push('/');
    }
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        console.log('에러입니다');
        console.log('axios error', error);
        if (
          error.response.status === 401 &&
          error.response.data.code === 'ACCESS_TOKEN_EXPIRED'
        ) {
          const originalRequest = error.config;
          let accessToken: string = '';
          let refreshToken: string = '';
          if (typeof window !== 'undefined') {
            accessToken = localStorage.getItem('accessToken') as string;
            refreshToken = localStorage.getItem('refreshToken') as string;
          }
          try {
            console.log('액세스 토큰 재요청');
            const { data } = await axios.post(
              '/api/v1/user/oauth/reissue',
              {},
              {
                headers: {
                  'ACCESS-TOKEN': accessToken,
                  'REFRESH-TOKEN': refreshToken,
                },
              }
            );
            const { result } = data;
            const reAccessToken = result.accessToken;
            localStorage.setItem('accessToken', reAccessToken);
            originalRequest.headers = {
              Authorization: reAccessToken,
            };
            return axios(originalRequest);
          } catch (error: any) {
            console.error('리프레쉬 토큰 발급 에러', error);
            localStorage.clear();
            window.location.reload();
          }
        } else if (
          error.response.status === 401 &&
          (error.response.data.code === 'ACCESS_TOKEN_NOT_VALID' ||
            error.response.data.code === 'ACCESS_TOKEN_IS_EMPTY')
        ) {
          console.log('액세스 토큰이 유효하지 않습니다');
          localStorage.clear();
          window.location.reload();
        }
        return Promise.reject(error);
      }
    );
  }, []);
  if (
    (router.pathname.includes('/gembox') || router.pathname === '/setting') &&
    !isLogin
  )
    return <div>로딩중</div>;
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
