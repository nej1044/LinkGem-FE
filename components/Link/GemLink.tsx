import Image from 'next/image';
import React, { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LinkContainer,
  ImageContainer,
  LinkDetailContainer,
  LinkDetailTitle,
  LinkDetailDescription,
  LinkDetailSetting,
  LinkDetailSettingDate,
  LinkDetailSettingOption,
  EtcButton,
  LinkEtcContainer,
  LinkEtcButtonContainer,
  LinkEtcButton,
  LinkEtcXButton,
} from './GemLink.style';
import { getDate } from 'utils/getDate';

import Axios from 'utils/Axios';

interface GemLinkProps {
  title: string;
  description: string;
  memos: string;
  url: string;
  imageUrl: string;
  createDate: string;
  isFavorites: boolean;
  id: number;
  getLink?: () => void;
  copyToClipboard: (url: string) => void;
  siteName?: string;
}
function GemLink({
  title,
  description,
  memos,
  url,
  imageUrl = '/images/test.jpeg',
  createDate,
  isFavorites,
  id,
  getLink,
  copyToClipboard,
  siteName,
}: GemLinkProps) {
  const [isBookMark, setIsBookMark] = useState(isFavorites);
  const [isEtcCon, setIsEtcCon] = useState(false);
  console.log('siteName');
  console.log(siteName);
  const handleFavorite = async () => {
    try {
      await Axios(`/api/v1/links/${id}`, {
        method: 'patch',
        data: { isFavorites: !isFavorites },
      });
      setIsBookMark(!isBookMark);
    } catch (error: any) {
      console.log('링크 좋아요 에러가 발생했습니다');
      console.log(error);
    }
  };

  const handleLinkDelete = async () => {
    try {
      await Axios(`/api/v1/links`, {
        method: 'delete',
        data: {
          ids: [id],
        },
      });
      setIsBookMark(!isBookMark);
      getLink?.();
    } catch (error: any) {
      console.log('링크 삭제 에러가 발생했습니다');
      console.log(error);
    }
  };

  const handleEtcButton = () => {
    setIsEtcCon(!isEtcCon);
  };

  useEffect(() => {}, [isFavorites]);
  return (
    <LinkContainer>
      <ImageContainer>
        <Link href={url || 'https://devlinkgem.netlify.app/'}>
          <a target="_blank">
            <img
              alt="link-image"
              src={imageUrl || 'images/home-link-default.svg'}
              width={320}
              height={180}
            />
          </a>
        </Link>
      </ImageContainer>
      <LinkDetailContainer>
        <LinkDetailTitle>
          <Link href={url || 'https://devlinkgem.netlify.app/'}>
            <a target="_blank">{title || siteName || url}</a>
          </Link>
        </LinkDetailTitle>
        <LinkDetailDescription>
          <Link href={url || 'https://devlinkgem.netlify.app/'}>
            <a target="_blank">{description}</a>
          </Link>
        </LinkDetailDescription>
        <LinkDetailSetting>
          <LinkDetailSettingDate>
            {getDate(createDate) || '22.07.13'}
          </LinkDetailSettingDate>
          <LinkDetailSettingOption>
            <Image
              alt="link-image"
              src={
                isBookMark
                  ? '/images/icons/link-star-black.svg'
                  : '/images/icons/link-star.svg'
              }
              width={17}
              height={16}
              defaultValue={url}
              onClick={handleFavorite}
            />
            <Image
              alt="link-image"
              src="/images/icons/link-sharing.svg"
              width={15.79}
              height={15.82}
              onClick={() => copyToClipboard(url)}
            />
            <EtcButton onClick={handleEtcButton}>•••</EtcButton>
          </LinkDetailSettingOption>
        </LinkDetailSetting>
      </LinkDetailContainer>
      {isEtcCon && (
        <LinkEtcContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-memo-icon.svg"
              alt="memo-img"
            />
            <span>메모</span>
          </LinkEtcButtonContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-gemboxplus-icon.svg"
              alt="memo-img"
            />
            <span>잼박스 추가</span>
          </LinkEtcButtonContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-gemboxchange-icon.svg"
              alt="memo-img"
            />
            <span>잼박스 변경</span>
          </LinkEtcButtonContainer>
          <LinkEtcButtonContainer>
            <LinkEtcButton
              src="/images/icons/link-trash-icon.svg"
              alt="memo-img"
              onClick={handleLinkDelete}
            />
            <span>삭제</span>
          </LinkEtcButtonContainer>
          <LinkEtcXButton
            src="/images/icons/link-x.svg"
            alt="memo-img"
            onClick={() => setIsEtcCon(false)}
          />
        </LinkEtcContainer>
      )}
    </LinkContainer>
  );
}

export default memo(GemLink);
