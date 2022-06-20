import LoginNaver from 'components/common/NaverLogin';
import React, { useState } from 'react';
import {
  Header,
  LogoContainer,
  ButtonContainer,
  JoinButton,
  LoginButton,
} from './HeaderContainer.style';

interface HeaderContainerProps {
  isLoggedIn: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HeaderContainer({ isLoggedIn }: HeaderContainerProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(isOpenModal);

  const openModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <Header>
      <LogoContainer>
        <span>LINK GEM</span>
        <span>Beta</span>
      </LogoContainer>
      <ButtonContainer>
        <LoginButton>로그인</LoginButton>
        <JoinButton onClick={openModal}>회원가입</JoinButton>
      </ButtonContainer>
      <LoginNaver />
    </Header>
  );
}

export default HeaderContainer;
