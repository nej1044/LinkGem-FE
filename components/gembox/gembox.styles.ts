import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10vh 10vw;
`;

export const Sidebar = styled.ul`
  width: 13vw;
  min-width: 100px;
`;

export const GemboxList = styled.li`
  border-bottom: 1px solid #cecece;
`;

export const FilterTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  min-height: 30px;
  min-height: 16px;
  color: #1a1b1d;
  font-size: 1.35vw;
  font-weight: 500;
  letter-spacing: -0.02em;

  font-family: 'Poppins', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
`;

export const GemboxListTitle = styled(FilterTitle)`
  font-size: 1.2vw;
  padding: 0vh 1.6vw;
  border-radius: 1vw;
  background-color: #f3edff;
`;

export const GemboxItem = styled.ul`
  padding: 4vh 1.8vw;
`;

export const GemboxTitle = styled.li`
  cursor: pointer;
  padding-bottom: 2.1vh;
  font-size: 1.2vw;
  font-weight: 500;
  span {
    font-size: 0.9vw;
  }
`;

export const GemboxText = styled.li`
  cursor: pointer;
  padding-bottom: 2.6vh;
  font-size: 1.2vw;
  span {
    font-size: 0.9vw;
  }
`;

export const FilterText = styled(GemboxText)`
  display: flex;
  align-items: center;
`;

export const GemboxButton = styled.button`
  width: 100%;
  height: 4.6vh;
  min-height: 30px;
  border: none;
  border-radius: 0.8vw;
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1vw;
  font-weight: 500;
  color: #3c3c3f;
  letter-spacing: -0.02em;
`;

export const FilterList = styled.li`
  padding: 4vh 1.8vw;
`;

export const GemboxSection = styled.div`
  width: 60vw;
`;

export const GexboxSectionTitle = styled.h1`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 1.3vw;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  span {
    margin-left: 0.1vw;
    font-size: 0.9vw;
  }
`;

export const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35vw',
  minWidth: '400px',
  height: '55vh',
  minHeight: '300px',
  bgcolor: 'background.paper',
  borderRadius: '2vw',
  boxShadow: 24,
  overflow: 'hidden',
};

export const GembaxWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 43vh;
  padding: 5vh 2vw 0vh 2vw;
`;

export const ModalTitle = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1.8vw;
  text-align: center;
  color: #1a1b1d;
`;

export const ModalButton = styled.button`
  width: 100%;
  height: 7vh;
  border: none;
  background-color: #f3edff;
  color: #0f0223;
  font-size: 1vw;
  letter-spacing: -0.02em;
  cursor: pointer;
  span {
    margin-left: 0.5vw;
    font-weight: 500;
    font-size: 1.2vw;
    color: #5200ff;
  }
`;

export const ModalClose = styled(CloseOutlined)`
  position: absolute;
  top: 2.5vh;
  right: 1.8vw;
  color: #1a1b1d;
  font-size: 1.5vw;
`;
