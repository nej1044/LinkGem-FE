import Image from 'next/image';
import Link from 'next/link';
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
  FirstLinkTitle,
  FirstLinkImage,
} from './FirstLink.style';

interface IFirstLink {
  name: string;
}
function FirstLink({ name }: IFirstLink) {
  return (
    <>
      <LinkContainer>
        <ImageContainer>
          <Link href="https://www.notion.so/WELCOME-TO-LINK-GEM-9390ebe25a854abc8b053ca4ee970330">
            <a target="_blank">
              <Image
                alt="link-image"
                src="/images/link-welcome.svg"
                width={320}
                height={180}
              />
            </a>
          </Link>
        </ImageContainer>
        <LinkDetailContainer>
          <LinkDetailTitle>반가워요 다이아 키퍼님</LinkDetailTitle>
          <LinkDetailDescription>
            링크잼에 가입하신 지금부터 당신은 잼키퍼!
            <br />
            링크잼크루들의 열렬한 환영인사와 사용가이드를 확인해보세요
          </LinkDetailDescription>
          <LinkDetailSetting>
            <LinkDetailSettingDate>22.03.04</LinkDetailSettingDate>
            <LinkDetailSettingOption>
              <Image
                alt="link-image"
                src="/images/icons/link-star.svg"
                width={17}
                height={16}
              />
              <Image
                alt="link-image"
                src="/images/icons/link-sharing.svg"
                width={15.79}
                height={15.82}
              />
              <EtcButton>•••</EtcButton>
            </LinkDetailSettingOption>
          </LinkDetailSetting>
        </LinkDetailContainer>
      </LinkContainer>
      <LinkContainer>
        <FirstLinkTitle>
          {name} 키퍼님의
          <br />첫 링크를 저장해 주세요
        </FirstLinkTitle>
        <FirstLinkImage>
          <Image
            alt="link-image"
            src="/images/link-plus.svg"
            width={100}
            height={100}
          />
        </FirstLinkImage>
      </LinkContainer>
    </>
  );
}

export default memo(FirstLink);
