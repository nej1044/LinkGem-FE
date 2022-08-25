import React, { useEffect, memo } from 'react';
import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { joinState, modalState, userInfo } from 'store/store';
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
  MenuContainer,
  Menu,
} from './Header.style';
import { headerFormData } from './form';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalState);
  const joinUserInfo = useRecoilValue(joinState);
  const [user, setUser] = useRecoilState(userInfo);

  const isLogin = useLogin();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseJoinModal = () => {
    setIsOpenModal(false);
  };

  const getUser = () => {
    if (typeof window !== 'undefined') {
      const auth =
        localStorage.getItem('auth') &&
        JSON.parse(localStorage.getItem('auth') as string);

      console.log('로컬 스토리지 auth');
      console.log(auth);
      if (
        auth?.accessToken &&
        auth?.userPhase === 'REGISTERED' &&
        auth?.loginEmail
      ) {
        console.log('로그인 정보가 있습니다');
        setUser(auth);
        return true;
      }
    }
  };

  const movePage = (url: string) => () => {
    router.push(`${url}`);
  };

  useEffect(() => {
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
    getUser();
  }, [joinUserInfo.accessToken, isLogin]);
  console.log('joinUserInfo');
  console.log(user.nickname);
  console.log(user.nickname.slice(0, 2));

  return (
    <HeaderContainer isLogin={isLogin}>
      <LogoContainer>
        <ImageContainer>
          <LogoImage src="/static/image/Linkgem-Logo.svg" alt="linkgem-logo" />
        </ImageContainer>

        <span>Beta</span>
      </LogoContainer>
      <MenuContainer>
        {headerFormData.map((li) => (
          <Menu
            onClick={movePage(li.url)}
            key={uuidv4()}
            current={
              router.asPath === li.url ||
              (li.url !== '/' && router.asPath.includes(li.url))
            }
          >
            {li.title}
          </Menu>
        ))}
      </MenuContainer>
      <ButtonContainer>
        {isLogin ? (
          <>
            <LinkSaveButton>+ 링크저장</LinkSaveButton>
            <AlarmImage>
              <Image
                priority
                src="/static/image/icons/alarm-icon.svg"
                alt="linkgem-logo"
                width={26}
                height={28}
              />
            </AlarmImage>
            <Initial>{user.nickname.slice(0, 2)}</Initial>
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
