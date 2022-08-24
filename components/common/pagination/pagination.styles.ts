import styled from '@emotion/styled';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { IPaginationStyled } from './pagination.types';

export const ListFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 200px;
  margin: 0 auto;
`;

export const PrevArrow = styled(LeftOutlined)`
  color: ${(props) => (props.disabled ? '#CECECE' : '#1A1B1D')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const NextArrow = styled(RightOutlined)`
  color: ${(props) => (props.disabled ? '#CECECE' : '#1A1B1D')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const Pages = styled.button`
  width: 40px;
  height: 40px;
  color: ${(props: IPaginationStyled) =>
    props.current === true ? 'white' : 'black'};
  border: ${(props: IPaginationStyled) =>
    props.current === true ? '1px solid #0F0223' : '1px solid #fbdea2'};
  border-radius: 50%;
  background-color: ${(props: IPaginationStyled) =>
    props.current === true ? '#0F0223' : 'white'};
  :hover {
    color: white;
    background-color: #0f0223;
    border: 1px solid #0f0223;
  }
  cursor: pointer;
`;
