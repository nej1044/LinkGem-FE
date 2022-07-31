import React, { useEffect, useState } from 'react';
import LinkSave from 'components/LinkSave';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import Landing from 'components/landing/landing';
import useLogin from 'utils/useLogin';

function Home() {
  const [isLogin, setIsLogin] = useState(false);
  console.log('isLogin', isLogin);

  useEffect(() => {
    setIsLogin(useLogin());
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          <LinkSave />
          <RecentSaveLink />
          <GemCrewPick />
        </>
      ) : (
        <Landing />
      )}
    </>
  );
}

export default Home;
