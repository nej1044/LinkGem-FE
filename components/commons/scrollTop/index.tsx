import styled from 'styled-components';
import TopIcon from '../../../public/icons/scroll-top.svg';

const ScrollTopIcon = styled.div`
  position: fixed;
  bottom: 3vh;
  right: 2vw;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5vw;
  height: 7vh;
  border-radius: 50%;
  background-color: #3c3c3f;
`;

const ScrollTop = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ScrollTopIcon onClick={goUp}>
      <TopIcon width="1.2vw" height="2.7vh" />
    </ScrollTopIcon>
  );
};

export default ScrollTop;
