import Image from 'next/image';
import React, { memo } from 'react';
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
} from './Link.style';

function Link() {
  return (
    <LinkContainer>
      <ImageContainer>
        <Image alt="link-image" src="/test.jpeg" width={342} height={180} />
      </ImageContainer>
      <LinkDetailContainer>
        <LinkDetailTitle>
          반가워요 다이아 키퍼님반가워요 다이아 키퍼님 반가워요 다이아 키퍼님
          반가워요 다이아 키퍼님 반가워요 다이아 키퍼님
        </LinkDetailTitle>
        <LinkDetailDescription>
          설명설명설명설명설명설명설명설명 설명설명 설명설명 설명설명 설명설명
          설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명
          설명설명 설명설명 설명설명 설명설명 설명설명 설명설명 설명설명
          설명설명 설명설명 설명설명 설명설명 설명설명
        </LinkDetailDescription>
        <LinkDetailSetting>
          <LinkDetailSettingDate>22.03.04</LinkDetailSettingDate>
          <LinkDetailSettingOption>
            <Image
              alt="link-image"
              src="/icons/link-star.svg"
              width={17}
              height={16}
            />
            <Image
              alt="link-image"
              src="/icons/link-sharing.svg"
              width={15.79}
              height={15.82}
            />
            <EtcButton>•••</EtcButton>
          </LinkDetailSettingOption>
        </LinkDetailSetting>
      </LinkDetailContainer>
    </LinkContainer>
  );
}

export default memo(Link);
