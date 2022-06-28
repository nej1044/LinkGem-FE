import JoinInfo from 'components/Join/JobInfo';
import SocialJoin from 'components/Join/SocialJoin';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/store';

export default function Join() {
  const joinUserInfo = useRecoilValue(joinState);
  console.log('join 컴포넌트');
  console.log(joinUserInfo);
  return (
    <>
      {!joinUserInfo.accessToken && <SocialJoin />}
      {joinUserInfo.accessToken && <JoinInfo />}
    </>
  );
}
