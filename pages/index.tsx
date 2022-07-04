import Main from '../components/landing/main/main.container';
import styled from 'styled-components';

function Home() {
  return (
    <HomeBlock>
      <Main />

      {/* <Twinkle /> */}

      {/* <MainGuide /> */}
      {/* 
        <VerticleText />

        <LinkCopyGuide />
        <LinkCopyGuide /> */}

      {/* <Footer /> */}
    </HomeBlock>
  );
}

const HomeBlock = styled.div`
  width: 100%;
  font-family: Rammetto One;
  background-color: #0f0223;
`;

export default Home;
