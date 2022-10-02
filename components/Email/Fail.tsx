import { EmailBox, EmailContainer } from 'components/Email/Email.style';
import React from 'react';

function Fail() {
  return (
    <EmailContainer>
      <EmailBox>
        {/* <img src="" alt="close" /> */}
        <p>이메일 인증이 확인되었어요.</p>
        <p>이메일 인증 시간이 초과되었어요.</p>
        <p>다시 이메일 인증을 진행해주세요</p>
      </EmailBox>
    </EmailContainer>
  );
}

export default Fail;
