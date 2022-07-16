import React from 'react';
import LoginNaver from 'components/common/NaverLogin';
import {
  SocialJoinContainer,
  SocialContainer,
  Title,
  Info,
} from './SocialJoin.style';

interface SocialJoinProps {
  type: string;
}

export default function SocialJoin({ type }: SocialJoinProps) {
  return (
    <SocialJoinContainer>
      <Title>
        <h1>반가워요, 키퍼님✨</h1>
        <p>
          {type === 'login'
            ? '지금까지 모아뒀던 링크잼들이 기다리고 있어요'
            : '이제부터 여기저기 흩어져있는 링크들을 나만의 잼박스에 보관하세요'}
        </p>
      </Title>
      <SocialContainer>
        <LoginNaver type={type} />
      </SocialContainer>
      <Info>
        <p>
          로그인은{' '}
          <a
            href="https://shimmer-columnist-0d7.notion.site/LINK-GEM-58b27dd8636d45429bb387273a90ac12"
            target="_blank"
            rel="noopener noreferrer"
          >
            개인 정보 보호 정책
          </a>{' '}
          및{' '}
          <a
            href="https://shimmer-columnist-0d7.notion.site/LINK-GEM-52f7b0bbd9eb4c1096096fa4b378dccf"
            target="_blank"
            rel="noopener noreferrer"
          >
            서비스 약관
          </a>
          에 동의하는 것을 의미하며,
        </p>
        <p>서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.</p>
      </Info>
    </SocialJoinContainer>
  );
}
