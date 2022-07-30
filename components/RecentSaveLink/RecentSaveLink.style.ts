import styled from 'styled-components';

export const RecentSaveLinkContainer = styled.section`
  position: absolute;
  width: 162px;
  height: 34px;
  left: 240px;
  top: 300px;
`;

export const RecentSaveLinkTitleOption = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const RecentSaveLinkTitle = styled.div`
  font-family: 'Spoqa Han Sans Neo';
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
  font-family: 'Spoqa Han Sans Neo';
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
`;
