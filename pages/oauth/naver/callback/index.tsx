import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loadingx from 'components/atom/Loading/Loadingx';
import { joinState } from 'store/store';
import { useSetRecoilState } from 'recoil';

function Index() {
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
    setAccessToken((prev) => ({ ...prev, accessToken: token }));

    naverLogin.init();
    console.dir(naverLogin);

    naverLogin.getLoginStatus(async (status: boolean) => {
      if (!status) {
        setLoading(false);
        return router.push('/');
      }
      if (naverLogin.user.id) {
        if (
          !(
            naverLogin.user.name &&
            naverLogin.user.email &&
            naverLogin.user.profile_image
          )
        ) {
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
