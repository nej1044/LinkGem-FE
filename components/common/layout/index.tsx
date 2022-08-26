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

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Body = styled.section``;

const Layout = (props: IPropsLayout) => {
  const router = useRouter();
  const isHideSidebar = HIDE_SIDEBAR.includes(router.asPath);

  return (
    <Wrapper>
      <Header />
      <BodyWrapper>
        {!isHideSidebar && <Sidebar />}
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
