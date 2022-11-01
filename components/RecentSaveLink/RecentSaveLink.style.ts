import styled from 'styled-components';

export const RecentSaveLinkContainer = styled.section`
  width: 100%;
  padding-top: 80px;
  /* display: flex;
  flex-direction: column; */

  @media screen and (max-width: 1700px) {
    width: 1080px;
  }
  @media screen and (max-width: 1180px) {
    width: 700px;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const RecentSaveLinkTitleOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 1350px;
  @media screen and (max-width: 1700px) {
    width: 1000px;
  }
  @media screen and (max-width: 1180px) {
    width: 650px !important;
  }
  @media screen and (max-width: 760px) {
    width: 300px !important;
  }
`;

export const RecentSaveLinkTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  /* identical to box height, or 34px */

  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

export const RecentSaveLinkWholeSeries = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;

  /* main/purple */

  color: #29115b;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

export const RecentSaveLinkOption = styled.div`
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

export const RecentLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 760px) {
    align-items: center;
  }
`;
