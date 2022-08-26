import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 141px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 240px 41px 240px;

  /* text/black */

  background: #1a1b1d;

  img {
    width: 108px;
    height: 36px;
  }

  p {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: -0.02em;

    color: #ffffff;
  }
`;
export const FooterLeft = styled.header`
  color: white;
`;
export const FooterRight = styled.header`
  a {
    color: white;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    /* identical to box height, or 21px */

    letter-spacing: -0.02em;
    color: #ffffff;
  }

  a:visited {
    color: white;
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
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
