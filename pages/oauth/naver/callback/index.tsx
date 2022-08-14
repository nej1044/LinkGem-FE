import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loadingx from 'components/atom/Loading/Loadingx';
import { joinState } from 'store/store';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const setUserState = useSetRecoilState(joinState);

  // const initializeNaverLogin = () => {
  // const naverLogin = new window.naver.LoginWithNaverId({
  //   clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
  //   callbackUrl: 'http://localhost:3000/',
  //   isPopup: false,
  // });
  // naverLogin.init();
  // naverLogin.getLoginStatus(async (status: boolean) => {
  //   if (!status) {
  //     return router.push('/');
  //   }
  //   if (naverLogin.user.id) {
  //     if (
  //       !(
  //         naverLogin.user.name &&
  //         naverLogin.user.email &&
  //         naverLogin.user.profile_image
  //       )
  //     ) {
  //       alert('이름, 이메일, 프로필 이미지는 필수값 입니다.');
  //       return naverLogin.reprompt();
  //     }
  //   }
  //   router.push('/');
  //   return null;
  // });
  // };

  const getUserInfo = async () => {
    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    if (token === 'access_denied') router.push('/');

    console.log('토큰 설정하기');
    console.log('Toekn');
    console.log(token);

    localStorage.removeItem('auth');
    try {
      const response = await axios.get('/api/v1/oauth/login/naver', {
        params: {
          code: token,
        },
      });

      const result = await response.data;
      const userInfo = result?.result;

      console.log(userInfo);
      console.log('userInfo');
      localStorage.setItem('auth', JSON.stringify(userInfo));
      localStorage.setItem('accessToken', userInfo.accessToken);
      setUserState(userInfo);
      router.push('/');
    } catch (error) {
      console.log('에러가 발생했습니다', error);
    }
  };

  useEffect(() => {
    // initializeNaverLogin();
    getUserInfo();
    setLoading(false);
  }, []);

  return <div>{loading && <Loadingx />}</div>;
}

export default Index;
