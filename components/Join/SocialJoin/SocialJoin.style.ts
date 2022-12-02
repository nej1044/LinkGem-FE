import styled from 'styled-components';
import { size } from 'styles/variable';

export const SocialJoinContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  color: white;
  text-align: center;
`;

export const Title = styled.div`
  h1 {
    padding-bottom: 8px;
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    line-height: 30px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.02em;

    @media screen and (max-width: ${size.mobile}) {
      font-size: 24px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */
    white-space: nowrap;
    text-align: center;
    letter-spacing: -0.02em;

    @media screen and (max-width: ${size.mobile}) {
      white-space: normal;
    }
  }
`;

export const SocialContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
`;

export const Info = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* or 16px */

  text-align: center;
  letter-spacing: -0.02em;

  @media screen and (max-width: ${size.tabletS}) {
    font-size: 11px;
  }

  a {
    color: white;
  }

  a:visited {
    color: white;
  }
`;
