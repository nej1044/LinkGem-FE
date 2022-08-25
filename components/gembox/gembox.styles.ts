import styled from 'styled-components';

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { IPropsGemboxStyles } from './gembox.types';
import MemoOutlined from '../../public/icons/MemoOutlined.svg';
import AddOutlined from '../../public/icons/AddOutlined.svg';
import ChangeOutlined from '../../public/icons/ChangeOutlined.svg';
import DeleteOutlined from '../../public/icons/DeleteOutlined.svg';
import { Select } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 76.1vh;
  padding: 10vh 3vw;
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
  position: relative;
  width: 13.6vw;
  min-width: 280px;
  height: 32.5vh;
  min-height: 320px;
  margin-right: 24px;
  margin-top: 32px;
  border-radius: 16px;
  background-color: ${(props: IPropsGemboxStyles) =>
    props.isMore ? '#a0a0a0' : 'white'};
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
`;

export const LinkBoxImg = styled.img`
  width: 100%;
  height: 50%;
  filter: ${(props: IPropsGemboxStyles) =>
    props.isMore ? 'brightness(60%)' : 'brightness(100%)'};
`;

export const LinkBoxContents = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  padding: ${(props: IPropsGemboxStyles) => (props.isMore ? '28px' : '24px')};
  border-radius: 16px;
  background-color: white;
  border-radius: ${(props: IPropsGemboxStyles) =>
    props.isMore ? '16px' : '0px'};
`;

export const MoreItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MoreItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  height: 40%;
  min-height: 55px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const MemoIcon = styled(MemoOutlined)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 8px;
  fill: #ffffff;
  font-size: 900;
  text-align: center;
  background-color: #0f0223;
  border-radius: 50%;
  cursor: pointer;
`;

export const AddIcon = styled(AddOutlined)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 9px;
  fill: #ffffff;
  font-size: 900;
  text-align: center;
  background-color: #0f0223;
  border-radius: 50%;
`;

export const ChangeIcon = styled(ChangeOutlined)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 8px;
  fill: #ffffff;
  font-size: 900;
  text-align: center;
  background-color: ${(props) => (props.isEdit ? '#5200FF' : '#0f0223')};
  border-radius: 50%;
`;

export const DeleteIcon = styled(DeleteOutlined)`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  padding: 8px;
  fill: #ffffff;
  font-size: 900;
  text-align: center;
  background-color: #0f0223;
  border-radius: 50%;
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
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 46px;
  padding: 10px 0;
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
  height: 100%;
  padding: 5vh 2vw 6.5vh 2vw;
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
  margin-top: 1.5vh;
`;

export const GemCard = styled.div`
  width: 6.85vw;
  min-width: 85px;
  height: 16vh;
  min-height: 105px;
  margin-right: 0.4vw;
  margin-left: 0.4vw;
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
  :hover {
    text-decoration: underline;
  }
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
  height: 120px;
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
  top: 3.5vh;
  right: 3vw;
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

export const MemoWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 40px 20px 0px 20px;
`;

export const MemoDeleteWrapper = styled(MemoWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 18% 20px;
`;

export const MemoArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  padding: 20px 16px;
  border: 1px solid #cecece;
  border-radius: 8px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 0.98vw;
  letter-spacing: -0.02em;
  resize: none;
  :focus {
    border: 2px solid #cecece;
    outline: none;
  }
`;

export const MemoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 20%;
`;

export const LeftSubInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;
`;

export const Memobox = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: -70px;
  left: 100px;
  z-index: 2;
  width: 212px;
  max-height: 158px;
  padding: 20px 36px 10px 16px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 8px;
`;

export const MemoText = styled.div`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const MemoOption = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  line-height: 140%;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #3c3c3f;
  cursor: pointer;
`;

export const MemoClose = styled(ModalClose)`
  top: 15px;
  right: 15px;
  font-size: 13px;
  font-weight: 900;
`;

export const Changebox = styled(Memobox)`
  bottom: -80px;
  left: 145px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 212px;
  height: 220px;
  max-height: 231px;
  padding: 24px 24px 24px 20px;
`;

export const ChangeList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

export const ChangeItem = styled.li`
  height: 50%;
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  letter-spacing: -0.02em;
  color: #1a1b1d;
`;

export const ChagneInput = styled.input`
  box-sizing: border-box;
  padding: 11px;
  border: 1px solid #ededed;
  border-radius: 8px;
  font-size: 13px;
`;

export const DataTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ItemBox = styled.input`
  box-sizing: border-box;
  width: 152px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #ededed;
  margin-top: 4px;
  padding-left: 8px;
  font-size: 12px;
`;

export const ItemSelect = styled(Select)`
  box-sizing: border-box;
  width: 85%;
  height: 36px;
  margin-top: 4px;
  border-radius: 8px;
  /* border: 1px solid #ededed; */
  /* padding-left: 8px; */
  font-size: 12px;
`;
