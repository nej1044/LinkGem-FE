import styled from 'styled-components';

export const SocialJoinContainer = styled.section`
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
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    line-height: 30px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -0.02em;
    @media screen and (max-width: 500px) {
      font-size: 24px;
    }
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    text-align: center;
    letter-spacing: -0.02em;
    @media screen and (max-width: 500px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
`;

export const SocialContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
`;

export const Info = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* or 16px */

  text-align: center;
  letter-spacing: -0.02em;

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }

  a {
    color: white;
  }

  a:visited {
    color: white;
  }
`;
