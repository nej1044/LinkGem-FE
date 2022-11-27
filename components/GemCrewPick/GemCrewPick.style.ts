import styled from 'styled-components';
import { size } from 'styles/variable';

export const GemCrewPickContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 160px;

  @media screen and (min-width: ${size.desktop}) {
    width: 100%;
  }

  @media screen and (max-width: ${size.mobile}) {
    padding-bottom: 96px;
  }
`;

export const GemCrewPickTitle = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 34px */

  letter-spacing: -0.02em;
  /* text/black */

  color: #1a1b1d;

  @media screen and (max-width: ${size.mobile}) {
    font-size: 18px;
  }
`;

export const GemCrewPickDescription = styled.p`
  width: 100%;
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
    width: 300px !important;
    font-size: 18px;
    font-size: 14px;
  }
`;

export const GemCrewPickOption = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23%, auto));

  gap: 24px;

  @media screen and (max-width: ${size.tabletL}) {
    gap: 16px;
  }

  @media screen and (max-width: ${size.tabletS}) {
    grid-template-columns: repeat(auto-fill, minmax(48%, auto));
    row-gap: 20px;
  }

  @media screen and (max-width: ${size.mobile}) {
    column-gap: 8px;
  }
`;

export const GemCrewPickBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 760px) {
    align-items: center;
  }
`;
