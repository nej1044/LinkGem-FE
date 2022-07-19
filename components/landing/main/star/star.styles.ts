import styled from 'styled-components';

export default styled.div`
  .wrapper {
    min-height: 100vh;
    background-color: rgb(15, 2, 35);
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

export const IconLocation = styled.div<{ left: number; top: number }>`
  .star {
    position: relative;
    z-index: 3;
    list-style: none;
    position: absolute;
    left: ${(props) => `${props.left}%`};
    top: ${(props) => `${props.top}%`};
    animation: twinkle 1s;
    animation-iteration-count: 1;
  }

  .not-star {
    position: relative;
    z-index: 3;
    list-style: none;
    position: absolute;
    left: ${(props) => `${props.left}%`};
    top: ${(props) => `${props.top}%`};
  }

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;
