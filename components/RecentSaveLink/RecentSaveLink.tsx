import FirstLink from 'components/Link/FirstLink';
import React, { memo } from 'react';
import {
  RecentSaveLinkContainer,
  RecentSaveLinkTitle,
  RecentSaveLinkOption,
  RecentSaveLinkTitleOption,
  RecentSaveLinkWholeSeries,
} from './RecentSaveLink.style';

function RecentSaveLink() {
  return (
    <RecentSaveLinkContainer>
      <RecentSaveLinkTitleOption>
        <RecentSaveLinkTitle>최근 저장한 링크</RecentSaveLinkTitle>
        <RecentSaveLinkWholeSeries>전체보기</RecentSaveLinkWholeSeries>
      </RecentSaveLinkTitleOption>
      <RecentSaveLinkOption>
        <FirstLink />
      </RecentSaveLinkOption>
    </RecentSaveLinkContainer>
  );
}

export default memo(RecentSaveLink);
