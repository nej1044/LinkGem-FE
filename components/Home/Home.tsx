import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinkSave from 'components/LinkSave';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import { useRecoilState } from 'recoil';
import { recentLinkState, userInfo } from 'store/store';
import Axios from 'utils/Axios';
import LinkCopy from 'components/LinkCopy';
import Modal from 'components/common/Modal/HomeModal';
import styled from 'styled-components';

function Home() {
  const [user, setUser] = useRecoilState(userInfo);
  const [recentLink, setRecentLink] = useRecoilState(recentLinkState);
  const [isCopy, setIsCopy] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
    getLink();
  };

  const copyToClipboard = (val: string) => {
    const element = document.createElement('textarea');
    element.value = val;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);
    element.select();
    const returnValue = document.execCommand('copy');
    document.body.removeChild(element);

    if (!returnValue) {
      console.error('복사하기가 실패했습니다');
    }
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };
  const getLink: () => void = async () => {
    try {
      const response = await Axios({
        url: '/api/v1/links',
        method: 'get',
        params: {
          page: 0,
          // size: 4,
        },
      });

      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      if (error.response?.data?.code === 'ACCESS_TOKEN_EXPIRED') {
        const response = await axios.post(
          '/api/v1/user/oauth/reissue',
          {},
          {
            headers: {
              'ACCESS-TOKEN': user.accessToken,
              'REFRESH-TOKEN': user.refreshToken,
            },
          }
        );
        const accessToken = await response?.data?.result?.accessToken;
        localStorage.setItem('accessToken', accessToken);
        setUser({ ...user, accessToken });
        // return axios(originalRequest);
      }
      console.error(error);
    }
  };
  useEffect(() => {
    getLink();
  }, []);

  return (
    <HomeContainer>
      <LinkSave getLink={getLink} recentLink={recentLink} />
      <RecentSaveLink
        recentLink={recentLink}
        getLink={getLink}
        copyToClipboard={copyToClipboard}
        handleModal={handleModal}
      />
      <GemCrewPick copyToClipboard={copyToClipboard} />

      {isCopy && <LinkCopy setIsCopy={setIsCopy} />}
      {isOpenModal && (
        <Modal
          visible={isOpenModal}
          handleModal={handleModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 80vw;
  max-width: 1400px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding-top: 0px;
    width: auto;
  }
`;
