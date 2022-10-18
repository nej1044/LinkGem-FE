import { useEffect, useState } from 'react';
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  MobileBox,
} from './Footer.style';

const Footer = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceWidth]);

  useEffect(() => {
    setDeviceWidth(window.innerHeight);
  }, []);

  return (
    <FooterContainer>
      {deviceWidth >= 600 && (
        <>
          <FooterLeft>
            <img alt="linkgem-logo" src="/images/linkgem-logo-white.svg" />
            <p>Copyright 2022 Linkgem. All rights reserved.</p>
          </FooterLeft>
          <div>
            <FooterRight>
              <p>
                <a
                  href="https://shimmer-columnist-0d7.notion.site/LINK-GEM-58b27dd8636d45429bb387273a90ac12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보 처리방침
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://shimmer-columnist-0d7.notion.site/LINK-GEM-52f7b0bbd9eb4c1096096fa4b378dccf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이용 약관
                </a>
              </p>
            </FooterRight>
            <FooterRight>
              <p>
                <a>Contact : linkgemkeeper@gmail.com</a>
              </p>
            </FooterRight>
          </div>
        </>
      )}
      {deviceWidth < 600 && (
        <>
          <FooterLeft>
            <img alt="linkgem-logo" src="/images/linkgem-logo-white.svg" />
            <FooterRight>
              <p>
                <a
                  href="https://shimmer-columnist-0d7.notion.site/LINK-GEM-58b27dd8636d45429bb387273a90ac12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보 처리방침
                </a>
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://shimmer-columnist-0d7.notion.site/LINK-GEM-52f7b0bbd9eb4c1096096fa4b378dccf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  이용 약관
                </a>
              </p>
            </FooterRight>
          </FooterLeft>
          <MobileBox>
            <FooterRight>
              <p>
                <a>Contact : linkgemkeeper@gmail.com</a>
              </p>
            </FooterRight>
            <p>Copyright 2022 Linkgem. All rights reserved.</p>
          </MobileBox>
        </>
      )}
    </FooterContainer>
  );
};

export default Footer;
