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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3c3c3f;
  cursor: pointer;
`;

const ScrollTop = () => {
  const goUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <ScrollTopIcon onClick={goUp}>
      <TopIcon width="15px" height="15px" />
    </ScrollTopIcon>
  );
};

export default ScrollTop;
