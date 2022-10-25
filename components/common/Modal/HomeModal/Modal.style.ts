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
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`;

export const ModalContainer = styled.div<{ visible: boolean }>`
  width: 400px;
  height: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 30px;
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

export const LinkTextContainer = styled.div`
  width: 360px;
  height: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 17px 20px 17px 20px;
`;

export const LinkText = styled.input`
  width: 100%;
  height: 22px;
  top: 10px;
  margin-left: 12px;
  border-style: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
  &:focus {
    outline: none;
  }
`;

export const LinkSaveButton = styled.button`
  width: 120px;
  height: 56px;
  margin-left: 8px;
  padding: 0px;
  background-color: #5200ff;
  border: 0px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;

  /* text/white */

  color: #ffffff;

  &:hover {
    background: #29115b;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    /* identical to box height, or 34px */

    text-align: center;
    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }
`;
