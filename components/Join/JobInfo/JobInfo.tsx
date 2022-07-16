import React, { useEffect, useState, memo, useCallback } from 'react';
import JoinDropDown from 'components/atom/DropDown/JoinDropDown';
import JoinButton from 'components/atom/Button/JoinButton';
import JoinProgressBar from 'components/atom/ProgressBar/JoinProgressBar';
import JoinTextInput from 'components/atom/TextInput/JoinTextInput';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/store';
import { JobInfoContainer, JobText } from './JobInfo.style';

function JobInfo() {
  const [context, setContext] = useState<joinType>({
    titleText: '',
    width: '',
    stage: '',
    buttonText: '',
    buttonColor: '',
    defaultCategory: [],
  });
  const [type, setType] = useState('');
  const [isButtonValueValid, setIsButtonValueValid] = useState(true);
  const userState = useRecoilValue(joinState);

  const changeType = () => {
    if (type === 'job') {
      setType('year');
    } else if (type === 'year') {
      setType('nickname');
    }
  };

  const changeButtonColor = () => {
    setIsButtonValueValid(false);
  };

  const changeButtonColorGreenToGrey = () => {
    setIsButtonValueValid(true);
  };

  const getUserInfo = useCallback(async () => {
    localStorage.removeItem('auth');
    try {
      const response = await axios.get('/api/v1/oauth/login/naver', {
        params: {
          code: userState.accessToken,
        },
      });

      const result = await response.data;
      const userInfo = result?.result;
      localStorage.setItem('auth', JSON.stringify(userInfo));
    } catch (error) {
      console.log('에러가 발생했습니다', error);
    }

    // await axios
    //   .get('/api/v1/oauth/login/naver', {
    //     params: {
    //       code: joinUserInfo.accessToken,
    //     },
    //   })
    //   .then((response) => {
    //     if (response?.result as any) {
    //       localStorage.setItem('auth', response.result);
    //     }
    //   })
    //   .catch((e) => console.log('error2', e));
  }, [userState]);
  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (type === '') {
      setType('job');
      setContext({ ...jobInfo });
    } else if (type === 'year') {
      setContext({ ...yearInfo });
    } else if (type === 'nickname') {
      setContext({ ...nickNameInfo });
    }
    setIsButtonValueValid(true);
  }, [type]);

  return (
    <JobInfoContainer>
      <JoinProgressBar width={context.width} stage={context.stage} />
      <JobText>{context.titleText}</JobText>

      {(type === 'job' || type === 'year') && (
        <JoinDropDown
          dropDownList={context.defaultCategory}
          type={type}
          changeButtonColor={changeButtonColor}
        />
      )}
      {type === 'nickname' && (
        <JoinTextInput
          changeButtonColor={changeButtonColor}
          changeButtonColorGreenToGrey={changeButtonColorGreenToGrey}
        />
      )}
      <JoinButton
        type={type}
        onClick={changeType}
        // backgroundColor="#3C3C3F"
        // backgroundColor={isButtonValueValid ? (type==='nickname' ? ('#41FB6A'): '#1A1B1D') : '#3C3C3F'}
        backgroundColor={
          // eslint-disable-next-line no-nested-ternary
          isButtonValueValid
            ? '#3C3C3F'
            : type === 'nickname'
            ? '#41FB6A'
            : '#1A1B1D'
        }
        color={
          // eslint-disable-next-line no-nested-ternary
          isButtonValueValid
            ? '#CECECE'
            : type === 'nickname'
            ? '#1A1B1D'
            : '#FFFFFF'
        }
        hoverColor={type === 'nickname' ? '#1CE047' : ''}
        width={type === 'nickname' ? '234px' : '156px'}
        height="62px"
        text={type === 'nickname' ? '링크젬시작' : '다음'}
        fontSize="24px"
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
