import React, { useState } from 'react';
import { NaverLoginButton, NaverLoginImg } from './NaverButton.style';

function NaverButton() {
  const [isHover, setIsHover] = useState(false);
  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };
  return (
    <NaverLoginButton
      // onClick={onClickNaverButton}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <NaverLoginImg
        src={
          isHover
            ? '/images/Naver-Logo-White.svg'
            : '/images/Naver-Logo-Green.svg'
        }
        alt="naver"
      />
      <p>네이버로 시작하기</p>
    </NaverLoginButton>
  );
}

export default NaverButton;
