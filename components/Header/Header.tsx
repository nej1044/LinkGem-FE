import React, { useState, useEffect } from 'react';
import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/store';
import JoinButton from 'components/atom/Button/JoinButton';
import {
  HeaderContainer,
  LogoContainer,
  ButtonContainer,
  LoginButton,
  LogoImage,
  StarImage,
  ImageContainer,
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
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
  }, [joinUserInfo.accessToken]);
  return (
    <HeaderContainer>
      <LogoContainer>
        <ImageContainer>
          <LogoImage alt="linkgem-logo" src="static/image/Linkgem-Logo.svg" />
          <StarImage alt="linkgem-logo-start" src="icons/star-100.svg" />
        </ImageContainer>

        <span>Beta</span>
      </LogoContainer>
      <ButtonContainer>
        <LoginButton>로그인</LoginButton>
        {/* <JoinButton onClick={handleOpenModal}>회원가입</JoinButton> */}
        <JoinButton
          onClick={handleOpenModal}
          backgroundColor="#41FB6A"
          color="#1A1B1D"
          width="120px"
          height="48px"
          text="회원가입"
          fontSize="18px"
          type=""
          hoverColor=""
        />
      </ButtonContainer>

      <Modal visible={isOpenModal} handleCloseModal={handleCloseModal}>
        <Join />
      </Modal>
    </HeaderContainer>
  );
}
