import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const JoinButtonContainer = styled.button`
  width: 120px;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: ${(props) => props.color};
  font-size: 18px;
  color: black;
  cursor: pointer;
`;
