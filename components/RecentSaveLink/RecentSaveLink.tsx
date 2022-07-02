import FirstLink from 'components/Link/FirstLink';
import Link from 'components/Link';
import React, { memo } from 'react';
import {
  RecentSaveLinkContainer,
  RecentSaveLinkTitle,
  RecentSaveLinkOption,
} from './RecentSaveLink.style';

function RecentSaveLink() {
  return (
    <RecentSaveLinkContainer>
      <RecentSaveLinkTitle>최근 저장한 링크</RecentSaveLinkTitle>
      <RecentSaveLinkOption>
        <Link />
        <FirstLink />
      </RecentSaveLinkOption>
    </RecentSaveLinkContainer>
  );
}

export default memo(RecentSaveLink);
