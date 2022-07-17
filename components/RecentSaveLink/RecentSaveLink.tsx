import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'components/Link';
import FirstLink from 'components/Link/FirstLink';
import useAuth from 'hooks/useAuth';
import IAuthInfo from 'types/IAuthInfo.type';
import { useRouter } from 'next/router';
import {
  RecentSaveLinkContainer,
  RecentSaveLinkTitle,
  RecentSaveLinkOption,
  RecentSaveLinkTitleOption,
  RecentSaveLinkWholeSeries,
} from './RecentSaveLink.style';

interface IUserInfo {
  id: number;
  title: string;
  description: string;
  memo: string;
  url: string;
  imageUrl: string;
  createDate: string;
}

function RecentSaveLink() {
  const [recentLink, setRecentLink] = useState([]);
  const [userInfo, setUserInfo] = useState<IAuthInfo>({
    accessToken: '',
    id: '',
    nickname: '',
    refreshToken: '',
  });
  const router = useRouter();
  const auth = useAuth();

  const getLink = async () => {
    if (auth) {
      setUserInfo(auth);
    }

    try {
      const response = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          page: 0,
          size: 1,
        },
      });
      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error) {
      console.log('정보가 없습니다');
      router.push('/error');
    }
  };

  useEffect(() => {
    getLink();
  }, []);
  return (
    <RecentSaveLinkContainer>
      <RecentSaveLinkTitleOption>
        <RecentSaveLinkTitle>최근 저장한 링크</RecentSaveLinkTitle>
        <RecentSaveLinkWholeSeries>전체보기</RecentSaveLinkWholeSeries>
      </RecentSaveLinkTitleOption>
      <RecentSaveLinkOption>
        {recentLink &&
          recentLink.map((link: IUserInfo) => (
            <Link
              key={link?.id}
              title={link?.title}
              description={link?.description}
              memos={link?.memo}
              url={link?.url}
              imageUrl={link?.imageUrl}
              createDate={link?.createDate.split('T')[0]}
            />
          ))}
        <FirstLink name={userInfo?.nickname} />
      </RecentSaveLinkOption>
    </RecentSaveLinkContainer>
  );
}

export default memo(RecentSaveLink);
