import React, { useEffect, useState, memo } from 'react';
import JoinDropDown from 'components/atom/DropDown/JoinDropDown';
import JoinButton from 'components/atom/Button/JoinButton';
import JoinProgressBar from 'components/atom/ProgressBar/JoinProgressBar';
import JoinTextInput from 'components/atom/TextInput/JoinTextInput';
import { JobInfoContainer, JobText } from './JobInfo.style';

function JobInfo() {
  console.log('Jobinfo 컴포넌트');
  const [context, setContext] = useState<joinType>({
    titleText: '',
    width: '',
    stage: '',
    buttonText: '',
    buttonColor: '',
    defaultCategory: [],
  });
  const [type, setType] = useState('');

  const changeType = () => {
    console.log('changeType 함수');
    if (type === 'job') {
      setType('year');
    } else if (type === 'year') {
      setType('nickname');
    }
  };
  useEffect(() => {
    if (type === '') {
      setType('job');
      setContext({ ...jobInfo });
    } else if (type === 'year') {
      setContext({ ...yearInfo });
    } else if (type === 'nickname') {
      setContext({ ...nickNameInfo });
    }
  }, [type]);

  console.log(`type${type}🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲`);
  console.log(`type${context}`);

  return (
    <JobInfoContainer>
      <JoinProgressBar width={context.width} stage={context.stage} />
      <JobText>{context.titleText}</JobText>

      {(type === 'job' || type === 'year') && (
        <JoinDropDown dropDownList={context.defaultCategory} type={type} />
      )}
      {type === 'nickname' && <JoinTextInput />}
      <JoinButton
        text={type === 'nickname' ? '링크젬 시작' : '다음'}
        color="#3C3C3F"
        onClick={changeType}
      />
    </JobInfoContainer>
  );
}

export default memo(JobInfo);

type joinType = {
  titleText: string;
  width: string;
  stage: string;
  buttonText: string;
  buttonColor: string;
  defaultCategory?: string[];
};

const jobInfo: joinType = {
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

const yearInfo: joinType = {
  titleText: '얼마나 일하셨어요?',
  width: '50%',
  stage: '2',
  buttonText: '다음',
  buttonColor: '#3C3C3F',
  defaultCategory: ['1년 미만', '1년', '2년', '3년', '4년', '5년', '5년 이상'],
};

const nickNameInfo: joinType = {
  titleText: '닉네임을 만들어주세요',
  width: '100%',
  stage: '3',
  buttonText: '다음',
  buttonColor: '#3C3C3F',
};
