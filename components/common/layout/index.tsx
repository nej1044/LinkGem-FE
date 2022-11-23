import Header from './Header';
import Footer from './Footer';
import Sidebar from './sidebar';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ReactChild } from 'react';

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
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) =>
    props.pathname === 'setting' ? '#faf5ff' : '#ffffff'};
`;

const Body = styled.section`
  width: 100%;
  padding-top: 8vh;
`;

const Layout = (props: IPropsLayout) => {
  const router = useRouter();
  const isHideSidebar = HIDE_SIDEBAR.includes(router.asPath);
  const pathname = router.pathname.split('/')[1];

  return (
    <Wrapper>
      <Header />
      <BodyWrapper pathname={pathname}>
        {!isHideSidebar && <Sidebar />}
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
