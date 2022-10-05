import { EmailBox, EmailContainer } from 'components/Email/Email.style';
import React from 'react';

function Fail() {
  return (
    <EmailContainer>
      <EmailBox>
        <img src="/images/email-fail.svg" alt="email-fail" />
        <p>이메일 인증 시간이 초과되었어요.</p>
        <p>다시 이메일 인증을 진행해주세요</p>
      </EmailBox>
    </EmailContainer>
  );
}

export default Fail;
