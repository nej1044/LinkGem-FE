import NaverButton from 'components/atom/Button/NaverButton';
import React, { useEffect, useRef } from 'react';

export default function LoginNaver() {
  const naverRef = useRef<HTMLInputElement>(null);
  const loginFormWithNaver = async () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/oauth/naver/callback',
      isPopup: false,
      loginButton: { color: 'dark mode', type: 3, height: 56 },
    });
    naverLogin.init();
  };

  const onClickNaverButton = () => {
    if (naverRef.current !== null && naverRef.current.children[0]) {
      naverRef.current.children[0].click();
    }
  };

  useEffect(() => {
    loginFormWithNaver();
  }, []);

  return (
    <>
      <div id="naverIdLogin" style={{ display: 'none' }} ref={naverRef} />
      <NaverButton onClickNaverButton={onClickNaverButton} />
    </>
  );
}
