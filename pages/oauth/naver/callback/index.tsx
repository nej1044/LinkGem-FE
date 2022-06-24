import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loadingx from 'components/atom/Loading/Loadingx';
import { joinState } from 'store/recoilTestState';
import { useSetRecoilState } from 'recoil';

function Index() {
  console.log('네이버콜백 페이지');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const setAccessToken = useSetRecoilState(joinState);

  const initializeNaverLogin = async () => {
    setLoading(true);
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/join',
      isPopup: false,
    });

    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    console.log('token', token);
    setAccessToken((prev) => ({ ...prev, accessToken: token }));

    naverLogin.init();
    console.log('naverLogin');
    console.dir(naverLogin);

    naverLogin.getLoginStatus(async (status: boolean) => {
      console.log('status', status);
      if (!status) {
        setLoading(false);
        return router.push('/');
      }
      console.log('naver.user', naverLogin.user);
      if (naverLogin.user.id) {
        console.log('if문');
        if (
          !(
            naverLogin.user.name &&
            naverLogin.user.email &&
            naverLogin.user.profile_image
          )
        ) {
          console.log('asdf');
          alert('이름, 이메일, 프로필 이미지는 필수값 입니다.');
          return naverLogin.reprompt();
        }
      }
      setLoading(true);
      router.push('/');
      return null;
    });
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div>{loading && <Loadingx />}</div>;
}

export default Index;
