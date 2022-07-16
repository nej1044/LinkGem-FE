import NaverButton from 'components/atom/Button/NaverButton';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

interface LoginNaverProps {
  type: string;
}

export default function LoginNaver({ type }: LoginNaverProps) {
  const naverRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const naverLogin = () => {
    console.log('asdf');
    router.push(
      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=http://localhost:3000/oauth/naver/callback'
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loginFormWithNaver = async () => {
    // const naverLogin = new window.naver.LoginWithNaverId({
    //   clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    //   callbackUrl: 'http://localhost:3000/oauth/naver/callback',
    //   isPopup: false,
    //   loginButton: { color: 'dark mode', type: 3, height: 56 },
    // });
    // naverLogin.init();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onClickNaverButton = () => {
    // if (naverRef.current !== null && naverRef.current.children[0]) {
    //   if (naverRef.current.children[0] instanceof HTMLAnchorElement) {
    //     naverRef.current.children[0].click();
    //   }
    // }
    window.location.href =
      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=http://localhost:8080/redirect/oauth';
  };

  useEffect(() => {
    // loginFormWithNaver();
  }, []);

  return (
    <>
      <div id="naverIdLogin" style={{ display: 'none' }} ref={naverRef} />

      <a
        href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=http://localhost:3000/oauth/naver/callback"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <NaverButton type={type} onClickNaverButton={() => naverLogin()} />
      </a>
    </>
  );
}
