import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`;

export const Background = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  ${(props) => modalSettings(props.visible)}
`;

export const ModalContainer = styled.div<{ visible: boolean }>`
  width: 450px;
  /* height: 250px; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 32px 40px;
  ${(props) => modalSettings(props.visible)}
  -webkit-transition: opacity 0.1s 0, visibility 0 0.1s;
  -moz-transition: opacity 0.1s 0, visibility 0 0.1s;
  transition: opacity 0.1s 0, visibility 0 0.1s;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
`;

export const ImageButton = styled.img`
  width: 16px;
  height: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 16px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    /* identical to box height, or 34px */

    text-align: center;
    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    white-space: nowrap;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    /* or 21px */

    text-align: center;
    letter-spacing: -0.02em;

    /* gray/gray3 */

    color: #616163;
  }
  /* or 24px */

  text-align: center;
  letter-spacing: -0.02em;
  .violet {
    color: #5200ff;
    font-weight: 500;
  }
  .bold {
    font-weight: 500;
  }
`;
