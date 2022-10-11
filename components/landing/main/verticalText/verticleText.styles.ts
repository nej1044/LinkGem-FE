import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

export const VerticalTextBlock = styled(Marquee)`
  width: 100%;
  padding: 1vw 0;
  background: #1a1b1d;
  z-index: 3;
`;

export const Text = styled.span`
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Poppins';
`;
