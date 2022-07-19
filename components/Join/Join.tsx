import JoinInfo from 'components/Join/JobInfo';
import SocialJoin from 'components/Join/SocialJoin';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { joinState } from 'store/store';

export default function Join() {
  const joinUserInfo = useRecoilValue(joinState);
  return (
    <>
      {(!joinUserInfo.accessToken ||
        joinUserInfo.accessToken === 'access_denied') && <SocialJoin />}
      {joinUserInfo.accessToken &&
        joinUserInfo.accessToken !== 'access_denied' && <JoinInfo />}
    </>
  );
}
