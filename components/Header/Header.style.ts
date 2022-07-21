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
    color: #41fb6a;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: -0.02em;

    @media screen and (max-width: 500px) {
      font-size: 8px;
      color: #41fb6a;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
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

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: -0.02em;
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
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  /* identical to box height */

  letter-spacing: -0.02em;
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

export const LinkSaveButton = styled.button`
  width: 120px;
  height: 40px;

  background: #5200ff;
  border: 0;
  border-radius: 4px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  /* text/white */

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

export const AlarmImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-left: 26px;
  margin-right: 26px;
  display: flex;
`;

export const Initial = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  /* gray/gray2 */

  background: #cecece;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: -0.02em;

  /* main/purple */

  color: #29115b;
`;