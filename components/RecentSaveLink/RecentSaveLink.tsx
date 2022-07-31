import React, { memo, useCallback, useEffect, useState } from 'react';
import Link from 'components/Link';
import FirstLink from 'components/Link/FirstLink';
// import { useRouter } from 'next/router';
import {
  RecentSaveLinkContainer,
  RecentSaveLinkTitle,
  RecentSaveLinkOption,
  RecentSaveLinkTitleOption,
  RecentSaveLinkWholeSeries,
} from './RecentSaveLink.style';
import { useRecoilValue } from 'recoil';
import { userInfo } from 'store/store';
import { IRecentSaveProps } from 'types/Link.types';

interface IUserInfo {
  id: number;
  title: string;
  description: string;
  memo: string;
  url: string;
  imageUrl: string;
  createDate: string;
  isFavorites: boolean;
}

function RecentSaveLink() {
  const [recentLink, setRecentLink] = useState([]);
  // const router = useRouter();
  const user = useRecoilValue(userInfo);
  const [size, setSize] = useState(4);

  const getLink = async () => {
    try {
      const response = await axios.get('/api/v1/links', {
        headers: {
          Authorization: localStorage.getItem('accessToken') as string,
        },
        params: {
          page: 0,
          size: 8,
        },
      });
      const contents = await response?.data?.result?.contents;
      setRecentLink(contents);
    } catch (error: any) {
      if (error.response.data.code === 'ACCESS_TOKEN_EXPIRED') {
        const response = await axios.post(
          '/api/v1/oauth/reissue',
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
      }
    }
  }, [recentLink, size]);
  console.log('size');
  console.log(size);
  useEffect(() => {}, [size]);
  return (
    <RecentSaveLinkContainer>
      <RecentSaveLinkTitleOption>
        <RecentSaveLinkTitle>최근 저장한 링크</RecentSaveLinkTitle>
        <RecentSaveLinkWholeSeries onClick={handleLinkSize}>
          전체보기
        </RecentSaveLinkWholeSeries>
      </RecentSaveLinkTitleOption>
      <RecentSaveLinkOption>
        {recentLink &&
          recentLink
            .slice(0, size)
            .map((link: IUserInfo) => (
              <Link
                key={link?.id}
                title={link?.title}
                description={link?.description}
                memos={link?.memo}
                url={link?.url}
                imageUrl={link?.imageUrl}
                createDate={link?.createDate}
                isFavorites={link?.isFavorites}
                id={link?.id}
                getLink={getLink}
              />
            ))}
        {recentLink.length < 1 && <FirstLink name={user?.nickname} />}
      </RecentSaveLinkOption>
    </RecentSaveLinkContainer>
  );
}

export default memo(RecentSaveLink);
