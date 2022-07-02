import React, { useState } from 'react';
import { NaverLoginButton, NaverLoginImg } from './NaverButton.style';

type naverButtonProps = {
  onClickNaverButton: () => void;
};
function NaverButton({ onClickNaverButton }: naverButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };
  return (
    <NaverLoginButton
      onClick={onClickNaverButton}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <NaverLoginImg
        src={
          isHover
            ? '/static/image/Naver-Logo-White.svg'
            : '/static/image/Naver-Logo-Green.svg'
        }
        alt="naver"
        priority
      />
      <p>네이버로 시작하기</p>
    </NaverLoginButton>
  );
}

export default NaverButton;
