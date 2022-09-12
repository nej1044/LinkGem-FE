import styled from 'styled-components';

export const NaverLoginButton = styled.button`
  width: 240px;
  height: 56px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  background-color: #48484b;
  color: white;
  border: 0px;
  @media screen and (max-width: 500px) {
    width: 312px;
  }
  p {
    margin-left: 12px;
    font-size: 16px;
    font-weight: 400;
    color: #a5a5a7;
  }

  &:hover {
    cursor: pointer;
    background-color: #03c75a;
    p {
      color: #ffffff;
    }
  }
`;

export const NaverLoginImg = styled.img``;
