import React, { useEffect, useState } from 'react';
import { joinState } from 'store/recoilTestState';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import {
  JoinTextInputContainer,
  JoinTextInputTextContainer,
  JoinTextInputText,
  NickNameErrorMessage,
} from './JoinTextInput.style';

type JoinTextInputProps = {
  buttonColorChange: () => void;
};

function JoinTextInput({ buttonColorChange }: JoinTextInputProps) {
  const [nickName, setNickName] = useState('');
  const [isErrorNickName, setIsErrorNickName] = useState(false);
  const setJoinInfo = useSetRecoilState(joinState);
  const re = useRecoilValue(joinState);

  const nickNameRegex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log('value', value);
    if (!nickNameRegex.test(value)) {
      setIsErrorNickName(true);
    } else {
      setIsErrorNickName(false);
    }
    setNickName(value);
    buttonColorChange();
  };
  useEffect(() => {
    setJoinInfo((prev) => ({ ...prev, nickname: nickName }));
  }, [nickName]);
  console.log('최종 회원가입 폽');
  console.log(re);
  return (
    <JoinTextInputContainer>
      <JoinTextInputTextContainer>
        <JoinTextInputText
          placeholder="예) 링크젬 크루"
          onChange={onChange}
          value={nickName}
        />
      </JoinTextInputTextContainer>
      <NickNameErrorMessage isErrorNickName={isErrorNickName}>
        * 한글, 영문, 숫자로만 가능합니다. 특수문자 및 이모지는 사용이 안됩니다.
      </NickNameErrorMessage>
    </JoinTextInputContainer>
  );
}

export default JoinTextInput;
