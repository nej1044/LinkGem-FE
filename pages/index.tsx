import React from 'react';
import LinkSave from 'components/LinkSave';
import RecentSaveLink from 'components/RecentSaveLink';
import GemCrewPick from 'components/GemCrewPick';

function Home() {
  return (
    <>
      <LinkSave />
      <RecentSaveLink />
      <GemCrewPick />
    </>
  );
}

export default Home;
