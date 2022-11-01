import styled from 'styled-components';

export const GemCrewPickContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 34px */

  letter-spacing: -0.02em;
  width: 1350px;
  /* text/black */

  color: #1a1b1d;

  @media screen and (max-width: 1700px) {
    width: 1000px;
  }
  @media screen and (max-width: 1180px) {
    width: 650px !important;
  }
  @media screen and (max-width: 760px) {
    width: 300px !important;
    font-size: 18px;
  }
`;
export const GemCrewPickDescription = styled.p`
  width: 1350px;
  margin-top: 8px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;

  /* text/placeholder */

  color: #8e8e8e;
  @media screen and (max-width: 760px) {
  }
  @media screen and (max-width: 1700px) {
    width: 1000px;
  }
  @media screen and (max-width: 1180px) {
    width: 650px !important;
  }
  @media screen and (max-width: 760px) {
    width: 300px !important;
    font-size: 18px;
    font-size: 14px;
  }
`;

export const GemCrewPickOption = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  section {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);

    padding: 0px;
  }
`;

export const GemCrewPickBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 760px) {
    align-items: center;
  }
`;
