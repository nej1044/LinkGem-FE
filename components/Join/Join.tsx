import JobInfo from 'components/Join/JobInfo';
import SocialJoin from 'components/Join/SocialJoin';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/recoilTestState';

export default function Join() {
  const joinUserInfo = useRecoilValue(joinState);
  console.log('join 컴포넌트');
  console.log(joinUserInfo);
  return (
    <>
      {!joinUserInfo.accessToken && <SocialJoin />}
      {joinUserInfo.accessToken && (
        <JobInfo infoProps={jobInfo} dropDownDefaultText={joinUserInfo.job} />
      )}
    </>
  );
}

type ofof = {
  titleText: string;
  width: string;
  stage: string;
  buttonText: string;
  buttonColor: string;
  defaultCategory: string[];
};

const jobInfo: ofof = {
  titleText: '지금 어떤일을 하고 계신가요?',
  width: '50%',
  stage: '1',
  buttonText: '다음',
  buttonColor: '#3C3C3F',
  defaultCategory: [
    '서비스 기획',
    '콘텐츠 기획',
    'UX 디자이너',
    'GUI 디자이너',
    '편집 디자이너',
    '콘텐츠 디자이너',
    '디자이너',
    '백엔드 개발자',
    '앱개발자',
    '프론트 개발자',
    '웹 퍼블리셔',
    '마케팅',
    '사업운영',
    '회계',
    '경영',
    '인사',
    '하시는 일을 입력해 주세요',
  ],
};
