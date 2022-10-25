import styled from 'styled-components';

export const EmailContainer = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #252730;
  z-index: 100;
`;

export const EmailBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: normal;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 155px;
    height: 206px;
    margin-bottom: 32px;
  }
  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    margin-bottom: 16px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  strong {
    font-weight: 600;
  }
`;
