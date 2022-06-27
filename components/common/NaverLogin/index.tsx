// import NaverButton from 'components/atom/Button/NaverButton';
import React, { useEffect } from 'react';

export default function LoginNaver() {
  const loginFormWithNaver = async () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/oauth/naver/callback',
      isPopup: false,
      loginButton: { color: 'dark mode', type: 3, height: 56 },
    });
    naverLogin.init();
  };

  useEffect(() => {
    loginFormWithNaver();
  }, []);

  return (
    <>
      <div id="naverIdLogin" />
      {/* <NaverButton /> */}
    </>
  );
}
