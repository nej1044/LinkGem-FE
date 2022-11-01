import styled from 'styled-components';

interface INickNameErrorMessage {
  isErrorNickName: boolean;
}
interface IJoinTextInputText {
  isErrorNickName: boolean;
}

export const JoinTextInputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const JoinTextInputTextContainer = styled.div`
  width: 376px;
  height: 56px;
  padding-left: 24px;
  background: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* transition: 0.5ms; */
  border-radius: 8px;
  text-indent: 5%;
  &:hover {
    transition: 0.5s;
  }
`;

export const JoinTextInputText = styled.input<IJoinTextInputText>`
  width: 100%;
  font-family: 'Spoqa Han Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */
  color: ${(props) => props.isErrorNickName && ' #FF0000'};
  letter-spacing: -0.02em;
  border-style: none;
  &:focus {
    outline: none;
  }
`;

export const NickNameErrorMessage = styled.p<INickNameErrorMessage>`
  display: ${(props) => (props.isErrorNickName ? 'block' : 'none')};
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  letter-spacing: -0.02em;

  /* text/error */

  color: #ff0000;
`;
