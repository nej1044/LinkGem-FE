import React from 'react';
import { NaverLoginButton, NaverLoginImg } from './NaverButton.style';

function NaverButton() {
  return (
    <NaverLoginButton>
      <NaverLoginImg src="/static/image/Naver-Logo.png" alt="naver" />
      Login with Naver
    </NaverLoginButton>
  );
}

export default NaverButton;
