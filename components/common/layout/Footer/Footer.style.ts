import styled from 'styled-components';

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  width: 100%;
  height: 141px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 240px 41px 240px;

  @media screen and (max-width: 956px) {
    padding: 35px 120px 41px 120px;
  }

  @media screen and (max-width: 600px) {
    padding: 24px;
    height: auto;
    flex-direction: column;
  }

  /* text/black */

  background: #1a1b1d;

  img {
    width: 108px;
    height: 36px;
    @media screen and (max-width: 600px) {
      width: 80px;
      height: 13px;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: -0.02em;

    color: #ffffff;

    @media screen and (max-width: 600px) {
      font-size: 11px;
    }
  }
`;
export const FooterLeft = styled.div`
  color: white;
  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
export const FooterRight = styled.div`
  a {
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: -0.02em;
    color: #ffffff;
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

  a:visited {
    color: white;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: -0.02em;

    color: #ffffff;

    &:nth-child(1) {
      color: red;
      a {
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  p:nth-child(1) {
    text-align: end;
  }
`;
export const MobileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;
