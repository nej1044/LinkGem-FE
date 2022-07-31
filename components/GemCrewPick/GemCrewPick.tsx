import Link from 'components/Link';
import React, { memo } from 'react';
import {
  GemCrewPickContainer,
  GemCrewPickTitle,
  GemCrewPickDescription,
  GemCrewPickOption,
} from './GemCrewPick.style';

function GemCrewPick() {
  return (
    <GemCrewPickContainer>
      <GemCrewPickTitle>잼크루 PICK</GemCrewPickTitle>
      <GemCrewPickDescription>
        딱 24시간만 공유되는 잼크루들의 관심링크
      </GemCrewPickDescription>
      <GemCrewPickOption>
        {list.map((item, index) => (
          <Link
            key={index}
            title={item.title}
            description={item.description}
            memos={item.memos}
            url={item.url}
            imageUrl={item.imageUrl}
            createDate={item.createDate}
            isFavorites={false}
            id={item.id}
          />
        ))}
      </GemCrewPickOption>
    </GemCrewPickContainer>
  );
}

export default memo(GemCrewPick);

const list = [
  {
    title: 'Vite에 관한 내용',
    description:
      '이번 글은 Vite에 관한 내용입니다. 최근 Svelte와 관련한 사내 발표 내용 중 다들 재미있어 했던 Vite에 관한 이야기를 블로그 형식으로 각색하여 다시 정리해보았습니다.',
    memos: '메모',
    url: 'https://velog.io/@teo/vite',
    imageUrl:
      'https://velog.velcdn.com/images/teo/post/fca299b5-7618-4bc2-8591-cb7df9fe60df/image.png',
    createDate: '22-08-10',
  },
  {
    title: '모두를 위한 JWT',
    description:
      'JWT가 무엇이냐 물어본다면 탄생 배경부터 득과 실, 활용예시, 연관기술 등 여러 가지를 이야기해 봐야겠지만 가장 단순하게 요약한다면 아래 그림이 맞습니다. JWT는 Header + Payload + Signature로 구성된 JSON Web Token 입니다.',
    memos: '메모',
    url: 'https://velog.io/@jeonjay/%EB%AA%A8%EB%91%90%EB%A5%BC-%EC%9C%84%ED%95%9C-JWT',
    imageUrl:
      'https://velog.velcdn.com/images/jeonjay/post/237c723e-c47d-48f9-b60b-265933fa7f49/image.png',
    createDate: '22-08-10',
  },
  {
    title: 'React + Ionic으로 iOS, 안드 앱을 만든 후기',
    description:
      '리액트로 만들어진 서비스를 앱으로 어떻게 만들지... 새로 만들긴 싫은데.. 이런 생각을 하다가 가능한 방법을 모색했습니다. 바로 떠오른 방법은 React Native였습니다. 저는 React Native에 대해서 많이 들어봤지만, 사용해 본적은 없었습니다. 지금 상황에서 React Native로 만들려면 React Native의 TextView, View로 감싸서 새롭게 개발을 해야 하며 관리 포인트가 꽤 늘어난다고 생각 하여 포기했습니다. 무엇보다 웹을 좋아하고 웹 베이스로 만들고 싶었고, 최적화 등도 웹 측면에서 해결해보고 싶었습니다.',
    memos: '메모',
    url: 'https://velog.io/@tmmoond8/React-Ionic%EC%9C%BC%EB%A1%9C-iOS-%EC%95%88%EB%93%9C-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A0-%ED%9B%84%EA%B8%B0',
    imageUrl:
      'https://user-images.githubusercontent.com/11402468/180954960-02bdf638-7ca2-4ede-9e85-7f9f2b5afa25.png',
    createDate: '22-08-10',
  },
  {
    title:
      '환상(장)의 (ElastiCache + Spring Session + Spring Security) Memory Leak',
    description:
      'Spring Boot를 사용하기 위해 AWS EC2를 N대 이상을 사용하고 있습니다. 사용자의 인증/인가를 위해 Spring Security를 사용하고 있으며, 사용자의 로그인 정보를 모든 서버에 공유, 데이터 캐싱을 위해서 위해서 AWS ElastiCache의 Redis를 사용하고 있습니다.',
    memos: '메모',
    url: 'https://velog.io/@betalabs/%ED%99%98%EC%83%81%EC%9D%98-%EC%A1%B0%ED%95%A9ElastiCache-Spring-Session-Spring-Security-Memory-Leak',
    imageUrl:
      'https://velog.velcdn.com/images/betalabs/post/4bf661c2-b9d9-43f5-a5a2-adce3fc5fd48/image.png',
    createDate: '22-08-10',
  },
];
