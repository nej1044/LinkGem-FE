import React, { useState } from 'react';
import { NaverLoginButton, NaverLoginImg } from './NaverButton.style';

type naverButtonProps = {
  onClickNaverButton: () => void;
  type: string;
};
function NaverButton({ onClickNaverButton, type }: naverButtonProps) {
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
      />
      <p>{type === 'login' ? '네이버로 로그인' : '네이버로 시작하기'}</p>
    </NaverLoginButton>
  );
}

export default NaverButton;
