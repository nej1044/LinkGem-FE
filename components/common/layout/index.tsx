import Header from './Header';
import Footer from './Footer';
import Sidebar from './sidebar';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ReactChild } from 'react';
import { size } from 'styles/variable';
import { BottomBar } from 'components/common/bottomBar';

const HIDE_SIDEBAR = ['/'];

interface IPropsLayout {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BodyWrapper = styled.div<{ pathname: string }>`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) =>
    props.pathname === 'setting' ? '#faf5ff' : '#ffffff'};
`;

const Body = styled.section<{ pathname: string }>`
  margin: 0 auto;
  max-width: ${(props) => (props.pathname === '' ? '100%' : '1200px')};
  width: 100%;
  height: 100%;
  padding-top: 84px;

  display: flex;

  @media screen and (max-width: ${size.desktop}) {
    max-width: 100%;
  }
  @media screen and (max-width: ${size.tabletS}) {
    padding-top: 64px;
  }
`;

const Layout = (props: IPropsLayout) => {
  const router = useRouter();
  const isHideSidebar = HIDE_SIDEBAR.includes(router.asPath);
  const pathname = router.pathname.split('/')[1];
  console.log('pathname');
  console.log(pathname);
  return (
    <Wrapper>
      <Header />
      <BodyWrapper pathname={pathname}>
        <Body pathname={pathname}>
          {!isHideSidebar && <Sidebar />}
          {props.children}
        </Body>
      </BodyWrapper>
      <BottomBar />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
