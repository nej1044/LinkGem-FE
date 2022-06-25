import React from 'react';
import styled from 'styled-components';
import VerticleText from 'components/landing/VerticleText';
// import MainGuide from 'components/landing/content/MainGuide';
// import Footer from 'components/landing/Footer';
import LinkCopyGuide from 'components/landing/content/LinkCopyGuide';
import Twinkle from 'components/landing/content/Twinkle';

function Home() {
  return (
    <HomeBlock>
      <div style={{ paddingBottom: '120px' }}>
        {/* background: 'rgb(15,2,35)' */}
        {/* <span>WELCOME TO</span>
        <span>LINK GEM</span> */}
        <Twinkle />

        {/* <MainGuide /> */}

        <VerticleText />

        <LinkCopyGuide />
        <LinkCopyGuide />
      </div>

      {/* <Footer /> */}
    </HomeBlock>
  );
}

const HomeBlock = styled.div`
  font-family: Rammetto One;
`;

export default Home;
