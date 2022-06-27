import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeBlock>
      <span>WELCOME TO</span>
      <span>LINK GEM</span>
    </HomeBlock>
  );
}

const HomeBlock = styled.div`
  font-family: Rammetto One;
`;

export default Home;
