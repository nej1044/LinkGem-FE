import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

export const VerticalTextBlock = styled(Marquee)`;
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  height: 200%;
  padding: 1vw 0;
  background: #1a1b1d;
  }
`;

export const Text = styled.span`
  color: #ffffff;
  text-transform: uppercase;
  font-family: 'Poppins';
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  display: inline-block;
  margin-right: 1.5vw;
  font-weight: 500;
  font-size: 1.3vw;
`;
