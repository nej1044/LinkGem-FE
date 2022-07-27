import styled from 'styled-components';

export const IconLocation = styled.div<{
  left: number;
  top: number;
  isStar: boolean;
}>`
  .star {
    position: absolute;
    z-index: 3;
    left: ${(props) => `${props.left}px`};
    top: ${(props) => `${props.top}px`};
    animation: twinkle 1s infinite;
    animation-delay: ${(props) => (props.isStar ? '0.5s' : '0s')};
  }

  .not-star {
    position: absolute;
    z-index: 3;
    list-style: none;
    left: ${(props) => `${props.left}px`};
    top: ${(props) => `${props.top}px`};
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
