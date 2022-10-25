import styled from 'styled-components';

export const GemCrewPickContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 160px;
  section {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 1700px) {
    width: 1080px;
  }
  @media screen and (max-width: 1180px) {
    width: 700px;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding-bottom: 96px;
  }
`;

export const GemCrewPickTitle = styled.div`
  font-style: normal;
  padding-left: 10px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 34px */

  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
  @media screen and (max-width: 760px) {
    font-size: 18px;
    padding-left: 0px;
  }
`;
export const GemCrewPickDescription = styled.p`
  width: 281px;
  margin-top: 8px;
  margin-bottom: 24px;
  padding-left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;

  /* text/placeholder */

  color: #8e8e8e;
  @media screen and (max-width: 760px) {
    font-size: 14px;
    padding-left: 0px;
  }
`;

export const GemCrewPickOption = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    align-items: center;
  }
`;
