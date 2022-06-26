import styled from 'styled-components';

export const JoinTextInputContainer = styled.div`
  width: 422px;
  height: 68px;
  margin-top: 16px;
  margin-bottom: 60px;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* transition: 0.5ms; */
  border-radius: 8px;
  &:hover {
    transition: 0.5s;
  }
`;

export const JoinTextInputText = styled.input`
  font-size: 20px;
  font-weight: 400;
  text-indent: 20px;
`;
