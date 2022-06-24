import React, { useState, useEffect } from 'react';
import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/recoilTestState';
import JoinButton from 'components/atom/Button/JoinButton';
import {
  HeaderContainer,
  LogoContainer,
  ButtonContainer,
  LoginButton,
} from './Header.style';

interface HeaderProps {
  isLoggedIn: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Header({ isLoggedIn }: HeaderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const joinUserInfo = useRecoilValue(joinState);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    console.log('Header useEffect');
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
  }, [joinUserInfo.accessToken]);
  return (
    <HeaderContainer>
      <LogoContainer>
        <span>LINK GEM </span>
        <span>Beta</span>
      </LogoContainer>
      <ButtonContainer>
        <LoginButton>로그인</LoginButton>
        {/* <JoinButton onClick={handleOpenModal}>회원가입</JoinButton> */}
        <JoinButton text="회원가입" onClick={handleOpenModal} color="#41FB6A" />
      </ButtonContainer>

      <Modal visible={isOpenModal} handleCloseModal={handleCloseModal}>
        <Join />
      </Modal>
    </HeaderContainer>
  );
}
