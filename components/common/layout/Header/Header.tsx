import React, { useEffect, memo, useState, ChangeEvent } from 'react';
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
  // UrlCategory,
  SpaceCell,
  // UrlCategoryItem,
  HeaderLinkSave,
  LinkText,
  MenuContainer,
  Menu,
  SettingBox,
  SettingModal,
} from './Header.style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Axios from 'utils/Axios';
import { headerFormData } from './form';
import { v4 as uuidv4 } from 'uuid';

function Header() {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useRecoilState(modalState);
  const joinUserInfo = useRecoilValue(joinState);
  const [userInfoState, setUserInfoState] = useRecoilState(userInfo);
  const [isLogin, setIsLogin] = useState(false);
  // const history = useRouter();
  // const [path, setPath] = useState('/');
  const [urlText, setUrlText] = useState('');
  const [isLinkSave, setIsLinkSave] = useState(false);
  const [isSettingModal, setIsSettingModal] = useState(false);

  const handleInputUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlText(e.target.value);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseJoinModal = () => {
    setIsOpenModal(false);
  };

  const handleSettingModal = () => {
    setIsSettingModal(!isSettingModal);
  };

  const handleLinkSave = async () => {
    if (isLinkSave) {
      await Axios('/api/v1/links', {
        method: 'post',
        data: {
          url: urlText,
        },
      });

      setUrlText('');
      setIsLinkSave(false);
    } else {
      setIsLinkSave(true);
    }

    console.log('urlText');
    console.log(urlText);
  };

  console.log('userInfoState');
  console.log(userInfoState);

  const movePage = (url: string) => () => {
    router.push(`${url}`);
  };

  useEffect(() => {
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
    setIsLogin(useLogin());
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    setUserInfoState({ ...auth });
  }, [joinUserInfo.accessToken, isLogin]);

  return (
    <HeaderContainer login={isLogin}>
      <LogoContainer>
        <Link href="/">
          <ImageContainer>
            <LogoImage src="/images/Linkgem-Logo.svg" alt="linkgem-logo" />
          </ImageContainer>
        </Link>
        <span>Beta</span>
      </LogoContainer>
      {isLogin && (
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
      )}
      <SpaceCell />
      <ButtonContainer>
        {isLogin ? (
          <>
            <HeaderLinkSave isLinkSave={isLinkSave}>
              <Image
                src="/images/icons/plus-icon.svg"
                alt="plus-icon"
                width={15}
                height={16}
              />
              <LinkText
                placeholder="링크를 넣어 저장하세요 https://..."
                onChange={handleInputUrl}
                value={urlText}
              />
              <img
                src="/images/icons/link-x.svg"
                alt="memo-img"
                onClick={() => setIsLinkSave(false)}
              />
            </HeaderLinkSave>
            <LinkSaveButton onClick={handleLinkSave}>
              {isLinkSave ? '' : '+'} 링크저장
            </LinkSaveButton>
            <AlarmImage>
              <Image
                priority
                src="/images/icons/alarm-icon.svg"
                alt="linkgem-logo"
                width={26}
                height={28}
              />
            </AlarmImage>
            <SettingBox>
              <Initial>
                <img
                  alt="profile-image"
                  src={
                    userInfoState.profileImageUrl ||
                    '/images/header-profile-default.svg'
                  }
                  onClick={handleSettingModal}
                ></img>
              </Initial>
              {isSettingModal && (
                <SettingModal>
                  <p>
                    <img
                      alt="profile-image"
                      src={
                        userInfoState.profileImageUrl ||
                        '/images/header-profile-default.svg'
                      }
                    />
                    <span>{userInfoState.nickname}</span>
                  </p>
                  <hr />
                  <Link href="/setting">
                    <p onClick={handleSettingModal}>
                      <img
                        alt="profile-image"
                        src={'/icons/header-setting-icon.svg'}
                      />
                      <span>설정</span>
                    </p>
                  </Link>
                </SettingModal>
              )}
            </SettingBox>
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
