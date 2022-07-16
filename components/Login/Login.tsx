import SocialJoin from 'components/Join/SocialJoin';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/store';

export default function Login() {
  const joinUserInfo = useRecoilValue(joinState);
  console.log('login 컴포넌트');
  console.log(joinUserInfo);
  return <SocialJoin type="login" />;
}
