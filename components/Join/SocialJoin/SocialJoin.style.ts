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
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const SocialContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 40px;
`;

export const Info = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;

  a {
    color: white;
  }

  a:visited {
    color: white;
  }
`;
