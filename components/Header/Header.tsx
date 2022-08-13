import React, { useEffect, memo, useState } from 'react';
import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { joinState, modalState } from 'store/store';
import JoinButton from 'components/atom/Button/JoinButton';
import Image from 'next/image';
import useLogin from 'utils/useLogin';
import {
  HeaderContainer,
  LogoContainer,
  ButtonContainer,
  ImageContainer,
  LinkSaveButton,
  AlarmImage,
  Initial,
  LogoImage,
} from './Header.style';

function Header() {
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalState);
  const joinUserInfo = useRecoilValue(joinState);
  const isLogin = useLogin();
  const [text, setText] = useState({ linksave: '+ 링크저장', name: '계정' });

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseJoinModal = () => {
    setIsOpenModal(false);
  };
  console.log('userInfo');
  console.log(joinUserInfo);
  useEffect(() => {
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
    setText({
      ...text,
      name: localStorage.getItem('name')?.slice(1, 3) as string,
    });
  }, [joinUserInfo.accessToken, useLogin()]);

  return (
    <HeaderContainer login={isLogin}>
      <LogoContainer>
        <ImageContainer>
          <LogoImage src="/static/image/Linkgem-Logo.svg" alt="linkgem-logo" />
        </ImageContainer>

        <span>Beta</span>
      </LogoContainer>
      <ButtonContainer>
        {isLogin ? (
          <>
            <LinkSaveButton>{text.linksave}</LinkSaveButton>
            <AlarmImage>
              <Image
                priority
                src="/static/image/icons/alarm-icon.svg"
                alt="linkgem-logo"
                width={26}
                height={28}
              />
            </AlarmImage>
            <Initial>{text.name}</Initial>
          </>
        ) : (
          <JoinButton
            onClick={handleOpenModal}
            backgroundColor="#41FB6A"
            color="#1A1B1D"
            width="120px"
            height="48px"
            text="로그인"
            fontSize="18px"
            type=""
            hoverColor="#1CE047"
          />
        )}
      </ButtonContainer>
      {!isLogin && (
        <Modal visible={isOpenModal} handleCloseModal={handleCloseJoinModal}>
          <Join />
        </Modal>
      )}
    </HeaderContainer>
  );
}

export default memo(Header);
