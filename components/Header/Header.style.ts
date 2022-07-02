import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0f0223;
  width: 100%;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  color: white;
  margin-left: 240px;
  @media screen and (max-width: 500px) {
    margin-left: 80px;
  }

  span {
    font-size: 12px;
    color: #41fb6a;

    @media screen and (max-width: 500px) {
      font-size: 8px;
      color: #41fb6a;
    }
  }
`;

export const ButtonContainer = styled.div`
  color: white;
  margin-right: 240px;
  @media screen and (max-width: 500px) {
    margin-right: 80px;
  }
`;

export const LoginButton = styled.button`
  width: 70px;
  height: 48px;
  margin-right: 32px;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
  text-align: right;
  cursor: pointer;
`;

export const JoinButton = styled.button`
  width: 120px;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: #41fb6a;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;

export const LogoImage = styled.img``;

export const StarImage = styled.div`
  position: absolute;
  left: 30%;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  margin-right: 8px;
`;
