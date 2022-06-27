import styled from 'styled-components';

interface NickNameErrorMessageProps {
  isErrorNickName: boolean;
}

export const JoinTextInputContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 60px;
`;
export const JoinTextInputTextContainer = styled.div`
  width: 422px;
  height: 68px;
  padding-left: 24px;
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
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  border-style: none;
  &:focus {
    outline: none;
  }
`;

export const NickNameErrorMessage = styled.p<NickNameErrorMessageProps>`
  display: ${(props) => (props.isErrorNickName ? 'block' : 'none')};
  position: absolute;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: red;
`;
