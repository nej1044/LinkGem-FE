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

function RecentSaveLink({ recentLink, getLink }: IRecentSaveProps) {
  const user = useRecoilValue(userInfo);
  const [size, setSize] = useState(4);

  const handleLinkSize = useCallback(() => {
    console.log('asdf');
    if (size === 4) {
      setSize(8);
    } else {
      setSize(4);
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
