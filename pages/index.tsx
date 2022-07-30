import React, { useEffect, useState } from 'react';
import LinkSave from 'components/LinkSave';
import LinkCopy from 'components/LinkCopy';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import { useRecoilValue } from 'recoil';
import copyState from 'store/store';
import Landing from 'components/landing/landing';
import useLogin from 'utils/useLogin';

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  console.log('isLogin', isLogin);

  useEffect(() => {
    setIsLogin(useLogin());
  }, []);
  const isLinkCopy = useRecoilValue(copyState);

  return (
    <>
      {isLogin ? (
        <>
          {' '}
          <LinkSave />
          <RecentSaveLink />
          <GemCrewPick />
          {isLinkCopy && <LinkCopy />}
        </>
      ) : (
        <Landing />
      )}
    </>
  );
}

export default Home;
