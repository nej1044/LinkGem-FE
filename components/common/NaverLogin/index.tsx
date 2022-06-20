import React, { useEffect } from 'react';

export default function LoginNaver() {
  const loginFormWithNaver = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/join',
      isPopup: false,
      loginButton: { color: 'white', type: 1, height: '30' },
    });
    naverLogin.init();
  };

  useEffect(() => {
    loginFormWithNaver();
  }, []);

  return <div id="naverIdLogin" />;
}
