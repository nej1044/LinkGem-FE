import {
  SettingContainer,
  SettingTitle,
  SettingBasicInfo,
  SettingLineBox,
  SettingCategory,
  SettingInfo,
  SettingInfoContainer,
  SettingImageBox,
  SettingImage,
  SettingDisabledInfo,
  InfoBox,
  SettingButtonContontainer,
  SettingButton,
  EctContainer,
  SideMenu,
  SideMenuButton,
} from './Setting.style';
import SettingDropDown from 'components/atom/DropDown/SettingDropDown';
import React, { useState } from 'react';
export default function Setting() {
  const [info, setInfo] = useState({ email: '', nickname: '' });
  const changeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  return (
    <SettingContainer>
      <SideMenu>
        <SideMenuButton>
          <img src="/static/image/icons/setting-icon.svg" alt="setting-icon" />
          <span>설정</span>
        </SideMenuButton>
      </SideMenu>
      <SettingInfoContainer>
        <SettingTitle>
          <h3>설정</h3>
          <p>개인 정보 관리와 맞춤 정보 설정을 할 수 있어요</p>
        </SettingTitle>
        <SettingBasicInfo>
          <p>기본 정보</p>
          <hr />
          <SettingLineBox>
            <SettingCategory>프로필 사진</SettingCategory>
            <SettingImageBox>
              <SettingImage src="/static/image/Naver-Logo-Green.svg" />
            </SettingImageBox>
          </SettingLineBox>
          <SettingLineBox>
            <SettingCategory>로그인 계정</SettingCategory>
            <SettingDisabledInfo type="none">
              <img
                src="/static/image/icons/setting-naver-logo.svg"
                alt="naver-logo"
              />
              <span>test@naver.com</span>
            </SettingDisabledInfo>
          </SettingLineBox>
          <SettingLineBox>
            <SettingCategory>이름</SettingCategory>
            <SettingDisabledInfo type="none">김링크</SettingDisabledInfo>
          </SettingLineBox>
          <SettingLineBox>
            <SettingCategory>닉네임</SettingCategory>
            <SettingInfo
              type="text"
              value={info.nickname}
              id="nickname"
              onChange={changeInfo}
            />
          </SettingLineBox>
          <SettingLineBox>
            <SettingCategory>이메일</SettingCategory>
            <SettingInfo
              type="text"
              value={info.email}
              id="email"
              onChange={changeInfo}
            />
          </SettingLineBox>
        </SettingBasicInfo>
        <SettingBasicInfo>
          <p>키퍼님의 맞춤 정보</p>
          <SettingLineBox>
            <SettingCategory>직업</SettingCategory>
            <SettingDropDown dropDownList={jobInfo.defaultCategory} />
          </SettingLineBox>
          <SettingLineBox>
            <SettingCategory>총 경력</SettingCategory>
            <SettingDropDown
              dropDownList={[
                '1년 미만',
                '1년',
                '2년',
                '3년',
                '4년',
                '5년',
                '5년 이상',
              ]}
            />
          </SettingLineBox>
          <SettingLineBox>
            <SettingCategory>관심 카테고리</SettingCategory>
            <SettingDisabledInfo type="ready">
              아직 준비중이에요. 잠시만 기다려주세요.
            </SettingDisabledInfo>
          </SettingLineBox>
          <InfoBox>
            링크잼에서 제공하는 맞춤 링크의 기본 데이터로 활용됩니다
          </InfoBox>
        </SettingBasicInfo>
      </SettingInfoContainer>
      <SettingButtonContontainer>
        <SettingButton color="#0F0223">원래대로 돌아가기</SettingButton>
        <SettingButton color="#5200FF">새롭게 저장하기</SettingButton>
      </SettingButtonContontainer>
      <EctContainer>
        <span>회원탈퇴</span>
        <span>로그아웃</span>
      </EctContainer>
    </SettingContainer>
  );
}
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
