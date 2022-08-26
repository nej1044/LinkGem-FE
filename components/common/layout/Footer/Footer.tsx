import { FooterContainer, FooterLeft, FooterRight } from './Footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img alt="linkgem-logo" src="/images/linkgem-logo-white.svg" />
        <p>Copyright 2022 Linkgem. All rights reserved.</p>
      </FooterLeft>
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
        <p>
          <a>Contact : linkgemkeeper@gmail.com</a>
        </p>
      </FooterRight>
    </FooterContainer>
  );
};

export default Footer;
