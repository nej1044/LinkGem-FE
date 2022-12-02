import styled, { css, keyframes } from 'styled-components';
import { size } from 'styles/variable';

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
  width: 550px;
  height: 420px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #29115b;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 30px;
  ${(props) => modalSettings(props.visible)}
  -webkit-transition: opacity 0.1s 0, visibility 0 0.1s;
  -moz-transition: opacity 0.1s 0, visibility 0 0.1s;
  transition: opacity 0.1s 0, visibility 0 0.1s;

  @media screen and (max-width: ${size.mobile}) {
    position: fixed;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  @media screen and (max-width: ${size.mobile}) {
    margin-top: 106px;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;
