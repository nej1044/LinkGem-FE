import React, { useState, useEffect, memo } from 'react';
import Join from 'components/Join';
import Login from 'components/Login';
import Modal from 'components/common/Modal';
import { useRecoilValue } from 'recoil';
import { joinState, loginState } from 'store/store';
import JoinButton from 'components/atom/Button/JoinButton';
import Image from 'next/image';
import {
  HeaderContainer,
  LogoContainer,
  ButtonContainer,
  LoginButton,
  ImageContainer,
  LinkSaveButton,
  AlarmImage,
  Initial,
} from './Header.style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const joinUserInfo = useRecoilValue(joinState);
  const isLogin = useRecoilValue(loginState);
  const [isLoginModal, setIsLoginModal] = useState(false);

  console.log('isLoginModal');
  console.log(isLoginModal);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseJoinModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenLoginModal = () => {
    setIsOpenModal(true);
    setIsLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpenModal(false);
    setIsLoginModal(false);
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
          <Image
            src="/static/image/Linkgem-Logo.svg"
            alt="linkgem-logo"
            width={165}
            height={27}
          />
          {/* <LogoImage alt="linkgem-logo" src="static/image/Linkgem-Logo.svg" /> */}
          {/* <StarImage alt="linkgem-logo-start" src="icons/star-100.svg" /> */}
        </ImageContainer>

        <span>Beta</span>
      </LogoContainer>
      <ButtonContainer>
        {isLogin ? (
          <>
            <LinkSaveButton>+ 링크저장</LinkSaveButton>
            <AlarmImage>
              <Image
                src="/static/image/icons/alarm-icon.svg"
                alt="linkgem-logo"
                width={26}
                height={28}
              />
            </AlarmImage>
            <Initial>수녕</Initial>
          </>
        ) : (
          <>
            <LoginButton onClick={handleOpenLoginModal}>로그인</LoginButton>
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
          </>
        )}
      </ButtonContainer>
      <Modal
        visible={isOpenModal}
        handleCloseModal={
          isLoginModal ? handleCloseLoginModal : handleCloseJoinModal
        }
      >
        {isLoginModal ? <Login /> : <Join />}
      </Modal>
    </HeaderContainer>
  );
}

export default memo(Header);
