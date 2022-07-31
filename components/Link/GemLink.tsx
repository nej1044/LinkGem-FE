import Image from 'next/image';
import React, { memo, useState } from 'react';
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
} from './GemLink.style';
import LinkCopy from 'components/LinkCopy';

interface GemLinkProps {
  title: string;
  description: string;
  memos: string;
  url: string;
  imageUrl: string;
  createDate: string;
}
function GemLink({
  title,
  description,
  memos,
  url,
  imageUrl = '/images/test.jpeg',
  createDate,
}: GemLinkProps) {
  const [isCopy, setIsCopy] = useState(false);
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
      console.log('복사하기가 실패했습니다');
    }
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };
  return (
    <LinkContainer>
      <ImageContainer>
        <Link href={url || 'https://www.naver.com'}>
          <a target="_blank">
            <img alt="link-image" src={imageUrl} width={342} height={180} />
          </a>
        </Link>
      </ImageContainer>
      <LinkDetailContainer>
        <LinkDetailTitle>
          {title ||
            '반가워요 다이아 키퍼님반가워요 다이아 키퍼님 반가워요 다이아 키퍼님 반가워요 다이아 키퍼님 반가워요 다이아 키퍼님'}
        </LinkDetailTitle>
        <LinkDetailDescription>
          {description ||
            '설명설명설명설명설명설명설명설명 설명설명 설명설명 설명설명 설명설명설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명'}
        </LinkDetailDescription>
        <LinkDetailSetting>
          <LinkDetailSettingDate>
            {createDate || '22.07.13'}
          </LinkDetailSettingDate>
          <LinkDetailSettingOption>
            <Image
              alt="link-image"
              src="/images/icons/link-star.svg"
              width={17}
              height={16}
              defaultValue={url}
            />
            <Image
              alt="link-image"
              src="/images/icons/link-sharing.svg"
              width={15.79}
              height={15.82}
              onClick={() => copyToClipboard(url)}
            />
            <EtcButton>•••</EtcButton>
          </LinkDetailSettingOption>
        </LinkDetailSetting>
      </LinkDetailContainer>
      {isCopy && <LinkCopy />}
    </LinkContainer>
  );
}

export default memo(GemLink);
