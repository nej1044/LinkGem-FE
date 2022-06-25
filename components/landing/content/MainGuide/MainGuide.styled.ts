import styled from 'styled-components';

export default styled.div`
  .wrapper {
    min-height: 100vh;
    background: linear-gradient(
      to bottom,
      #b4b2b2 0%,
      #b4b2b2 70%,
      #f5f5f5 100%
    );
    overflow: hidden;
  }

  .rocket {
    position: absolute;
    top: 20%;
    width: 80px;
    left: calc(50% - 60px);
    .rocket-body {
      width: 80px;
      left: calc(50% - 50px);
      animation: bounce 0.5s infinite;
      .body {
        background-color: #dadada;
        height: 180px;
        left: calc(50% - 50px);
        border-top-right-radius: 100%;
        border-top-left-radius: 100%;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        border-top: 5px solid #f5f5f5;
      }
      &:before {
        content: '';
        position: absolute;
        left: calc(50% - 24px);
        width: 48px;
        height: 13px;
        background-color: #554842;
        bottom: -13px;
        border-bottom-right-radius: 60%;
        border-bottom-left-radius: 60%;
      }
    }
    .window {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: $darkred;
      left: calc(50% - 25px);
      top: 40px;
      border: 5px solid #b4b2b2;
    }
    .fin {
      position: absolute;
      z-index: -100;
      height: 55px;
      width: 50px;
      background-color: $darkred;
    }
    .fin-left {
      left: -30px;
      top: calc(100% - 55px);
      border-top-left-radius: 80%;
      border-bottom-left-radius: 20%;
    }
    .fin-right {
      right: -30px;
      top: calc(100% - 55px);
      border-top-right-radius: 80%;
      border-bottom-right-radius: 20%;
    }
  }

  .test {
    animation: twinkle 1s infinite;
  }

  .star li {
    list-style: none;
    position: absolute;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background-color: #f5f5f5;
    }
    &:before {
      width: 10px;
      height: 2px;
      border-radius: 50%;
    }
    &:after {
      height: 8px;
      width: 2px;
      left: 4px;
      top: -3px;
    }
    &:first-child {
      top: -30px;
      left: -210px;
      animation: twinkle 0.4s infinite;
    }
    &:nth-child(2) {
      top: 0;
      left: 60px;
      animation: twinkle 0.5s infinite;
      &:before {
        height: 1px;
        width: 5px;
      }
      &:after {
        width: 1px;
        height: 5px;
        top: -2px;
        left: 2px;
      }
    }
    &:nth-child(3) {
      left: 120px;
      top: 220px;
      animation: twinkle 1s infinite;
    }
    &:nth-child(4) {
      left: -100px;
      top: 200px;
      animation: twinkle 0.5s ease infinite;
    }
    &:nth-child(5) {
      left: 170px;
      top: 100px;
      animation: twinkle 0.4s ease infinite;
    }
    &:nth-child(6) {
      top: 87px;
      left: -79px;
      animation: twinkle 0.2s infinite;
      &:before {
        height: 1px;
        width: 5px;
      }
      &:after {
        width: 1px;
        height: 5px;
        top: -2px;
        left: 2px;
      }
    }
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }
    50% {
      transform: translate3d(0px, -4px, 0);
    }
    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  @keyframes twinkle {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
