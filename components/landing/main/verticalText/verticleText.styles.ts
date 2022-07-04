import styled from 'styled-components';

export const VerticalTextBlock = styled.div`;
  overflow: hidden;
  width: 100%;
  height: 200%;
  padding: 17px 0;
  background: #1a1b1d;
  }
`;

export const TextWrap = styled.div`
  width: 7000px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: Poppins;
  display: inline-block;
  animation: textLoop 100s linear infinite;
  @keyframes textLoop {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
`;

export const Text = styled.span`
  margin-right: 24px;
  font-weight: 500;
  font-size: 20px;
`;
