import styled from 'styled-components';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { IPropsGemboxStyles } from './gembox.types';

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

export const LinkBoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

export const LinkBox = styled.article`
  width: 13.6vw;
  min-width: 280px;
  height: 32.5vh;
  min-height: 320px;
  margin-right: 24px;
  margin-top: 32px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
`;

export const LinkBoxImg = styled.img`
  width: 100%;
  height: 50%;
`;

export const LinkBoxContents = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  padding: 24px 16px;
`;

export const LinkBoxTitle = styled.span`
  display: block;
  width: 100%;
  height: 20px;
  color: #1a1b1d;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const LinkBoxRemark = styled.span`
  display: block;
  width: 100%;
  height: 40px;
  color: #3c3c3f;
  font-size: 14px;
  line-height: 19.6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LinkSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
`;

export const LinkDate = styled.span`
  color: #3c3c3f;
  font-size: 14px;
  letter-spacing: -0.02em;
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

export const GemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0.7vw 0;
`;

export const GemCard = styled.div`
  width: 6.85vw;
  min-width: 85px;
  height: 16vh;
  min-height: 105px;
  margin-right: 0.8vw;
`;

export const GemImg = styled.img`
  width: 100%;
  height: 11.5vh;
  min-height: 65px;
  border-radius: 8px;
`;

export const GemInfo = styled.div`
  box-sizing: border-box;
  padding: 0.5vh 0.5vw;
`;

export const GemName = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 0.78vw;
  letter-spacing: -0.02em;
`;

export const GemText = styled.span`
  margin-right: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 0.58vw;
  letter-spacing: -0.02em;
  color: #3c3c3f;
  cursor: pointer;
`;

export const WriteWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4vh 4vw;
`;

export const CreateWrapper = styled(WriteWrapper)`
  padding: 1.5vh 3vw;
`;

export const WriteList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GemModalText = styled.span`
  margin-bottom: 8px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 0.78vw;
  letter-spacing: -0.02em;
  color: #3c3c3f;
`;

export const GemModalInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 6vh;
  padding: 1vw;
  border-radius: 8px;
  outline: none;
  border: ${(props: IPropsGemboxStyles) =>
    props.error ? '1px solid #FF0000' : '1px solid #cecece'};
  font-size: 0.9vw;
  letter-spacing: -0.02em;
  color: #8e8e8e;
  :focus {
    border: 1px solid #1a1b1d;
    color: #1a1b1d;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.7vw;
  color: #ff0000;
`;

export const GemBoxButton = styled.button`
  padding: 2vh 2vw;
  background-color: #5200ff;
  border-radius: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.2vw;
  letter-spacing: -0.02em;
  color: #ffffff;
  border: none;
  cursor: pointer;
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

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 7vh;
`;

export const DeleteTitle = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 2.1vw;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const DeleteText = styled.span`
  display: inline-block;
  width: 100%;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 1.05vw;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

export const GemLinkWrapper = styled.ul`
  box-sizing: border-box;
  width: 100%;
  height: 13.5vh;
  border: 1px solid #cecece;
  border-radius: 8px;
  overflow: auto;
  padding: 1vh 0.6vw;
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2px 0;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.9vw;
  letter-spacing: -0.02em;
  color: #252730;
  cursor: pointer;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.3vw;
  height: 2.7vh;
  margin-right: 5px;
  background-color: ${(props: IPropsGemboxStyles) =>
    props.isChecked ? '#5200ff' : '#cecece'};
  border-radius: 5px;
`;

export const CheckIcon = styled(CheckOutlined)`
  font-size: 0.8vw;
  font-weight: 900;
  color: white;
`;
