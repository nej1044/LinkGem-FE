import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loadingx from 'components/atom/Loading/Loadingx';
import { joinState } from 'store/store';
import { useSetRecoilState } from 'recoil';

function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const setUserState = useSetRecoilState(joinState);

  const initializeNaverLogin = async () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/',
      isPopup: false,
    });

    const location = window.location.href.split('=')[1];
    const token = location.split('&')[0];
    if (token === 'access_denied') router.push('/');
    setUserState((prev) => ({ ...prev, accessToken: token }));
    naverLogin.init();

    naverLogin.getLoginStatus(async (status: boolean) => {
      if (!status) {
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
      router.push('/');
      return null;
    });
  };

  useEffect(() => {
    initializeNaverLogin();
    setLoading(false);
  }, []);

  return <div>{loading && <Loadingx />}</div>;
}

export default Index;
