import styled from 'styled-components';

export const RecentSaveLinkContainer = styled.section`
  width: 100%;
  padding-top: 80px;
`;

export const RecentSaveLinkTitleOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-left: 10px;
  padding-right: 10px;
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
`;

export const RecentSaveLinkOption = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 10px;
  gap: 24px;
  section {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    align-content: flex-end;
  }
`;

export const RecentLinkBox = styled.div`
  display: inline;
`;
