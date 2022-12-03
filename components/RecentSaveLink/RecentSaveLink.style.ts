import styled from 'styled-components';
import { size } from 'styles/variable';

export const RecentSaveLinkContainer = styled.section`
  width: 100%;
  padding-top: 80px;
  /* display: flex;
  flex-direction: column; */

  @media screen and (min-width: ${size.desktop}) {
    width: 100%;
  }

  @media screen and (max-width: ${size.tabletS}) {
    padding-top: 0px;
  }
`;

export const RecentSaveLinkTitleOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 100%;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(23%, 25%));
  grid-auto-rows: minmax(200px, 320px);

  grid-gap: 24px;

  @media screen and (max-width: ${size.tabletL}) {
    gap: 16px;
  }

  @media screen and (max-width: ${size.tabletS}) {
    width: 100%;
    grid-auto-rows: minmax(200px, auto);

    grid-template-columns: repeat(auto-fill, minmax(48%, auto));
    row-gap: 20px;
  }

  @media screen and (max-width: ${size.mobile}) {
    column-gap: 8px;
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
