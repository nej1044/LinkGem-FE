import SettingDropDown from 'components/atom/DropDown/SettingDropDown';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  EtcContainer,
  InfoBox,
  SettingBasicInfo,
  SettingButton,
  SettingButtonContontainer,
  SettingCategory,
  SettingContainer,
  SettingDisabledInfo,
  SettingImage,
  SettingImageBox,
  SettingImageHover,
  SettingInfo,
  SettingInfoContainer,
  SettingLineBox,
  SettingTitle,
  NickNameErrorMessage,
  SettingNinkName,
} from 'components/Setting/Setting.style';
import Axios from 'utils/Axios';
import MuiDialog from 'components/atom/Dialog/MuiDialog';
import useLogin from 'utils/useLogin';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { joinState, userInfo } from 'store/store';
import Modal from 'components/common/Modal/SettingModal';

export default function Setting() {
  const router = useRouter();
  // const isLogin = useLogin();
  const [form, setForm] = useState({
    nickName: '',
    jobName: '',
    careerYear: '',
    email: '',
    name: '',
  });
  const [file, setFile] = useState<File>();
  const [imgUrl, setImgUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDropDownList, setIsDropDownList] = useState(false);
  const setUserInfoState = useSetRecoilState(userInfo);
  const resetJoinState = useResetRecoilState(joinState);

  const [isWithdrawalModal, setIsWithdrawalModal] = useState(false);

  const handleWithdrawalModal = () => {
    setIsWithdrawalModal(!isWithdrawalModal);
  };

  const [dialogContext, setDialogContext] = useState({
    handleDialog() {},
    title: '',
    context: '',
    isOpen: false,
  });
  const [isErrorNickName, setIsErrorNickName] = useState({
    error: false,
    message:
      '* 한글, 영문, 숫자로만 가능합니다. 특수문자 및 이모지는 사용이 안됩니다.',
  });

  const nickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    if (!nickNameRegex.test(e.target.value)) {
      setIsErrorNickName({
        message:
          '* 한글, 영문, 숫자로만 가능합니다. 특수문자 및 이모지는 사용이 안됩니다.',
        error: true,
      });
    } else {
      setIsErrorNickName({ ...isErrorNickName, error: false });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    resetJoinState();
    router.push('/');
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = () => {
    inputRef.current?.click();
  };

  const handleDialog = () => {
    setDialogContext({ ...dialogContext, isOpen: false });
  };

  const handleDefaultUserSetting = () => {
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    setForm({
      name: auth?.name,
      nickName: auth?.nickname,
      email: auth?.loginEmail,
      jobName: auth?.jobName,
      careerYear: auth?.careerYear,
    });
  };

  const handleUserSetting = async () => {
    try {
      const auth = JSON.parse(localStorage.getItem('auth') as string);
      await Axios('/api/v1/user/settingUserInfo', {
        method: 'post',
        data: {
          profileImage: file || '',
          nickName: form?.nickName,
          jobName: form.jobName,
          careerYear:
            typeof form.careerYear === 'string'
              ? form.careerYear.split('년')[0]
              : form.careerYear,
        },
        fileUpload: true,
      });
      const _auth = {
        ...auth,
        jobName: form.jobName,
        careerYear:
          typeof form.careerYear === 'string'
            ? Number(form.careerYear.split('년')[0])
            : form.careerYear,
        nickname: form.nickName,
      };
      setUserInfoState(_auth);
      localStorage.setItem('auth', JSON.stringify(_auth));
      setDialogContext({
        handleDialog,
        title: '회원 정보',
        context: '회원 정보를 수정 했습니다.',
        isOpen: true,
      });
      useLogin();
    } catch (e: any) {
      console.error(e);
      if (e.response.data.code === 'USER_NICKNAME_ALREADY_EXIST') {
        setIsErrorNickName({
          error: true,
          message: '이미 있는 닉네임입니다',
        });
      } else {
        setDialogContext({
          handleDialog,
          title: '회원 정보 수정 실패',
          context: '에러가 발생했습니다.',
          isOpen: true,
        });
      }
    }
  };
  const handleDropDownList = () => {
    setIsDropDownList(!isDropDownList);
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth') as string);

    // if (!isLogin) router.push('/');
    setForm({
      name: auth?.name,
      nickName: auth?.nickname,
      email: auth?.loginEmail,
      jobName: auth?.jobName,
      careerYear: auth?.careerYear,
    });
    setImgUrl(auth?.profileImageUrl);
  }, []);

  // if (!isLogin) return <Loading />;

  return (
    <>
      <SettingContainer>
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
                <SettingImage
                  src={imgUrl || 'images/test.jpeg'}
                  alt="setting-image"
                />
                <SettingImageHover onClick={uploadImage}>
                  <div>
                    <img
                      src={'images/icons/setting-image-icon.svg'}
                      alt="setting-image"
                    />
                  </div>
                  <img src={imgUrl || 'images/test.jpeg'} alt="setting-image" />
                </SettingImageHover>
                <input
                  id="input-file"
                  type="file"
                  accept="image/png, image/jpg"
                  onChange={handleChangeFile}
                  ref={inputRef}
                  hidden
                />
              </SettingImageBox>
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>로그인 계정</SettingCategory>
              <SettingDisabledInfo type="none">
                <img
                  src="images/icons/setting-naver-logo.svg"
                  alt="naver-logo"
                />
                <span>{form.email}</span>
              </SettingDisabledInfo>
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>이름</SettingCategory>
              <SettingDisabledInfo type="none">{form.name}</SettingDisabledInfo>
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>닉네임</SettingCategory>
              <SettingNinkName
                type="text"
                value={form.nickName}
                id="nickName"
                onChange={handleChangeNickname}
                isErrorNickName={isErrorNickName.error}
              />
              {form?.nickName?.length > 0 && isErrorNickName.error && (
                <NickNameErrorMessage isErrorNickName={isErrorNickName.error}>
                  {isErrorNickName.message}
                </NickNameErrorMessage>
              )}
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>이메일</SettingCategory>
              <SettingInfo
                disabled={true}
                type="text"
                value={form.email}
                id="email"
              />
            </SettingLineBox>
          </SettingBasicInfo>
          <SettingBasicInfo>
            <p>키퍼님의 맞춤 정보</p>
            <SettingLineBox>
              <SettingCategory>직업</SettingCategory>
              <SettingDropDown
                dropDownList={jobInfo.defaultCategory}
                isModal={isDropDownList}
                handleModal={handleDropDownList}
                info={form.jobName}
                type="jobName"
                setForm={setForm}
                form={form}
              />
            </SettingLineBox>
            <SettingLineBox>
              <SettingCategory>총 경력</SettingCategory>
              <SettingDropDown
                dropDownList={['1년', '2년', '3년', '4년', '5년 이상']}
                isModal={isDropDownList}
                handleModal={handleDropDownList}
                info={form.careerYear}
                setForm={setForm}
                type="careerYear"
                form={form}
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
          {/* 텍스트 컬러 수정해야함 */}
          <SettingButton
            bgColor="#3C3C3F"
            color="#CECECE"
            onClick={handleDefaultUserSetting}
          >
            취소
          </SettingButton>
          <SettingButton
            bgColor="#5200FF"
            color="#ffffff"
            onClick={handleUserSetting}
          >
            저장
          </SettingButton>
        </SettingButtonContontainer>
        <EtcContainer>
          {/* <a
            href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}oauth/naver/withdrawal`}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          > */}
          <span onClick={handleWithdrawalModal}>회원탈퇴</span>
          {/* </a> */}

          <span onClick={handleLogout}>로그아웃</span>
        </EtcContainer>
        {dialogContext.isOpen && <MuiDialog dialogContext={dialogContext} />}
      </SettingContainer>
      {isWithdrawalModal && (
        <Modal
          visible={isWithdrawalModal}
          handleModal={handleWithdrawalModal}
        />
      )}
    </>
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
