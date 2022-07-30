// import Link from 'components/Link';
import React, { memo } from 'react';
import {
  GemCrewPickContainer,
  GemCrewPickTitle,
  GemCrewPickDescription,
  GemCrewPickOption,
} from './GemCrewPick.style';

function GemCrewPick() {
  return (
    <GemCrewPickContainer>
      <GemCrewPickTitle>젬크루 PICK</GemCrewPickTitle>
      <GemCrewPickDescription>
        딱 24시간만 공유되는 젬크루들의 관심링크
      </GemCrewPickDescription>
      <GemCrewPickOption>
        {/* <Link />
        <Link />
        <Link />
        <Link /> */}
      </GemCrewPickOption>
    </GemCrewPickContainer>
  );
}

export default memo(GemCrewPick);
