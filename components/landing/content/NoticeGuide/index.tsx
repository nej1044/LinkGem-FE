import React from 'react';
import NoticeGuideBlock from './NoticeGuide.styled';

export default function Index() {
  return (
    <NoticeGuideBlock>
      <div className="company-info">
        <div className="company-info__linkgem">
          <span>LINK GEM</span>
        </div>
        <span className="company-info__copyright">
          Copyright 2022, Linkgem. All rights reserved.
        </span>
      </div>

      <div className="txt-r company-info">
        <div className="company-info__privacy">
          <button
            type="button"
            onClick={() =>
              window.open(
                'https://shimmer-columnist-0d7.notion.site/LINK-GEM-58b27dd8636d45429bb387273a90ac12'
              )
            }
          >
            개인정보 처리방침
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                'https://shimmer-columnist-0d7.notion.site/LINK-GEM-52f7b0bbd9eb4c1096096fa4b378dccf'
              )
            }
          >
            이용약관
          </button>
        </div>
        <span className="company-info__copyright">
          Contact : linkgemkeeper@gmail.com
        </span>
      </div>
    </NoticeGuideBlock>
  );
}
