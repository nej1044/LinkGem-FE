import React from 'react';
import LinkSave from 'components/LinkSave';
import LinkCopy from 'components/LinkCopy';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';
import { useRecoilValue } from 'recoil';
import copyState from 'store/store';

function Home() {
  const isLinkCopy = useRecoilValue(copyState);

  return (
    <>
      <LinkSave />
      <RecentSaveLink />
      <GemCrewPick />
      {isLinkCopy && <LinkCopy />}
    </>
  );
}

export default Home;
