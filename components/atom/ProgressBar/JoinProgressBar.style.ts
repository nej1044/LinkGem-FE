import styled from 'styled-components';

interface ProgressBarProps {
  width: string;
}

interface DotContainerProps {
  stage: string;
}

export const Container = styled.div`
  position: relative;
  margin: 21px auto 0px auto;
  background-color: #3c3c3f;
  width: 150px;
  height: 1px;
  display: flex;
  align-items: center;
  /* border-radius: 20px; */
  margin-bottom: 16px;
`;

export const Progress = styled.div<ProgressBarProps>`
  background-color: white;
  width: ${(props) => props.width};
  height: 100%;
  transition: width 1s;
  border-radius: 20px;
`;

export const DotContainer = styled.div<DotContainerProps>`
  position: absolute;
  width: 110%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: black;
    border-radius: 14px;
    background-color: grey;

    &:nth-child(1) {
      background-color: white;
    }
    &:nth-child(2) {
      background-color: ${(props) => (props.stage === '1' ? 'grey' : 'white')};
    }
  }

  z-index: 2;
`;
