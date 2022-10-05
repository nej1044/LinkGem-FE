import { EmailBox, EmailContainer } from 'components/Email/Email.style';
import React from 'react';

function Success() {
  return (
    <EmailContainer>
      <EmailBox>
        <img src="/images/email-success.svg" alt="email-success" />
        <h1>이메일 인증 성공 🎉</h1>
        <p>이메일 인증이 확인되었어요.</p>
        <p>
          링크잼 페이지로 돌아가 <strong>인증완료 버튼</strong>을 눌러주세요.
        </p>
        <p>인증완료 버튼을 눌러야 이메일 인증이 최종 완료 됩니다.</p>
      </EmailBox>
    </EmailContainer>
  );
}

export default Success;
