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
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  display: inline-block;
  font-weight: 500;
  font-size: 1.3vw;
`;
