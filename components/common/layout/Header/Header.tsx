import React, {
  useEffect,
  memo,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import Join from 'components/Join';
import Modal from 'components/common/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { joinState, modalState, userInfo, gemboxRefetch } from 'store/store';
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
  AlarmBox,
  AlramModal,
  AlramContent,
  PolygonBox,
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
  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);
  const [isLogin, setIsLogin] = useState(false);
  const [urlText, setUrlText] = useState('');
  const [isLinkSave, setIsLinkSave] = useState(false);
  const [isSettingModal, setIsSettingModal] = useState(false);
  const [isAlarmModal, setIsAlarmModal] = useState(false);

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
    setIsAlarmModal(false);
  };
  const handleAlarmModal = () => {
    setIsAlarmModal(!isAlarmModal);
    setIsSettingModal(false);
  };

  const handleLinkSave = async () => {
    if (isLinkSave) {
      await Axios('/api/v1/links', {
        method: 'post',
        data: {
          url: urlText.includes('https://') ? urlText : `https://${urlText}`,
        },
      });

      setUrlText('');
      setIsLinkSave(false);
      setBoxRefetch(true);
    } else {
      setIsLinkSave(true);
    }
  };

  const movePage = (url: string) => () => {
    router.push(`${url}`);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      handleLinkSave();
    }
  };

  useEffect(() => {
    if (joinUserInfo.accessToken) {
      setIsOpenModal(true);
    }
    setIsLogin(useLogin());
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    setUserInfoState({ ...auth });
  }, [joinUserInfo.accessToken, isLogin]);

  useEffect(() => {}, [userInfoState]);

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
                onKeyPress={handleKeyPress}
              />
              <img
                src="/images/icons/link-x.svg"
                alt="memo-img"
                onClick={() => setIsLinkSave(false)}
              />
            </HeaderLinkSave>
            <LinkSaveButton onClick={() => handleLinkSave()}>
              {isLinkSave ? '' : '+ '} 링크저장
            </LinkSaveButton>
            <AlarmBox>
              <AlarmImage onClick={handleAlarmModal}>
                <Image
                  priority
                  src="/images/icons/alarm-icon.svg"
                  alt="linkgem-logo"
                  width={30}
                  height={30}
                />
                {isAlarmModal && (
                  <PolygonBox>
                    <img
                      src="/images/icons/header-Polygon 1.svg"
                      alt="linkgem-logo"
                    />
                  </PolygonBox>
                )}
              </AlarmImage>
              {isAlarmModal && (
                <AlramModal>
                  <AlramContent>
                    <span>공지 - 24일전 </span>
                    <p>
                      링크젬에서 새로운 커뮤니티 서비스를 오픈했어요.
                      <br />
                      지금 확인하고 링크잼 커뮤니티로 다른분들과 함께
                      소통해보세요!
                    </p>
                    <button>커뮤니티 확인하기</button>
                  </AlramContent>
                  <hr />
                  <AlramContent>
                    <span>공지 - 24일전 </span>
                    <p>
                      링크젬에서 새로운 커뮤니티 서비스를 오픈했어요.
                      <br />
                      지금 확인하고 링크잼 커뮤니티로 다른분들과 함께
                      소통해보세요!
                    </p>
                    <button>커뮤니티 확인하기</button>
                  </AlramContent>
                  <hr />
                  <AlramContent>
                    <span>공지 - 24일전 </span>
                    <p>
                      링크젬에서 새로운 커뮤니티 서비스를 오픈했어요.
                      <br />
                      지금 확인하고 링크잼 커뮤니티로 다른분들과 함께
                      소통해보세요!
                    </p>
                    <button>커뮤니티 확인하기</button>
                  </AlramContent>
                </AlramModal>
              )}
            </AlarmBox>

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
                {isSettingModal && (
                  <PolygonBox>
                    <img
                      src="/images/icons/header-Polygon 1.svg"
                      alt="linkgem-logo"
                    />
                  </PolygonBox>
                )}
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
            text="시작하기"
            fontSize="18px"
            type=""
            hoverColor="#1CE047"
          />
        )}
      </ButtonContainer>
      {!isLogin && (
        <Modal
          visible={isOpenModal}
          handleCloseModal={handleCloseJoinModal}
          setIsOpenModal={setIsOpenModal}
        >
          <Join />
        </Modal>
      )}
    </HeaderContainer>
  );
}

export default memo(Header);
