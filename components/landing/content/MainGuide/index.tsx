import React from 'react';
import KakaoLoginBtn from 'public/icons/star-171.svg';
import MainGuideBlock from './MainGuide.styled';

export default function Index() {
  return (
    <MainGuideBlock>
      <KakaoLoginBtn className="test" />
      <div className="wrapper">
        <div className="rocket">
          <div className="rocket-body">
            <div className="body" />
            <div className="fin fin-left" />
            <div className="fin fin-right" />
            <div className="window" />
          </div>
          {/* <ul className="exhaust-fumes">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul> */}
          <ul className="star">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </MainGuideBlock>
  );
}
