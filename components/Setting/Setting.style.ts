import styled from 'styled-components';

interface INickNameErrorMessageProps {
  isErrorNickName: boolean;
}

interface IButton {
  bgColor: string;
  color: string;
}

export const SettingContainer = styled.main`
  width: 100%;
  background-color: #faf5ff;
  padding-top: 80px;
  padding-left: 80px;
  padding-bottom: 160px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
`;

export const SettingInfoContainer = styled.main`
  width: 900px;
`;

export const SettingTitle = styled.section`
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* gray/gray3 */

    color: #3c3c3f;
  }
`;

export const SettingBasicInfo = styled.section`
  width: 900px;
  margin-top: 32px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 20px;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* text/black */

    color: #1a1b1d;
  }
  hr {
    margin: 16px 0 0 0;
    border: 0.5px solid #cecece;
    width: 90%;
    background-color: #cecece;
  }
`;

export const SettingLineBox = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

export const SettingCategory = styled.div`
  width: 150px;
`;

export const SettingInfo = styled.input`
  width: 520px;
  height: 56px;
  display: flex;
  align-items: center;
  text-indent: 12px;
  background-color: #ffffff;
  /* gray/gray2 */

  border: 1px solid #0f0223;
  border-radius: 16px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
`;
export const SettingNinkName = styled.input<INickNameErrorMessageProps>`
  width: 520px;
  height: 56px;
  display: flex;
  align-items: center;
  text-indent: 12px;
  background-color: #ffffff;
  /* gray/gray2 */

  border: 1px solid;
  border-color: ${(props) => props.isErrorNickName && 'red'};
  border-radius: 16px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
  &:focus {
    outline: ${(props) => (props.isErrorNickName ? 'red' : 'black')};
  }
`;

export const SettingDisabledInfo = styled.div<{ type: string }>`
  width: 520px;
  height: 56px;
  display: flex;
  align-items: center;
  text-indent: 12px;
  background-color: #ededed;
  /* gray/gray2 */

  border: 1px solid #cecece;
  border-radius: 16px;

  letter-spacing: -0.02em;
  color: ${(props) => props.type === 'ready' && '#8E8E8E'};

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;
  img {
    width: 24px;
    height: 24px;
    margin-left: 12px;
  }
`;

export const SettingImageBox = styled.div`
  position: relative;
  img {
    transition: 0.4s;
  }
`;

export const SettingImage = styled.img`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 16px;
  opacity: 1;
  /* &:hover {
    cursor: pointer;
    opacity: 0;
  } */
`;

export const SettingImageHover = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  div {
    position: absolute;
    opacity: 1;
    z-index: 3;
    img {
      width: 32px;
      height: 32px;
      opacity: 1;
      z-index: 1;
      filter: brightness(100%);
    }
  }
  img {
    width: 140px;
    height: 140px;
    border-radius: 16px;
    filter: brightness(0.5);
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const InfoBox = styled.div`
  position: relative;
  top: 10px;
  left: 150px;
  color: #8e8e8e;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

  letter-spacing: -0.02em;
`;

export const SettingButtonContontainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 80px;
`;

export const SettingButton = styled.button<IButton>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 16px 53px;
  border-radius: 8px;
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const EtcContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 64px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: -0.02em;

    /* gray/gray3 */

    color: #3c3c3f;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NickNameErrorMessage = styled.span<INickNameErrorMessageProps>`
  /* display: ${(props) => (props.isErrorNickName ? 'block' : 'none')}; */
  position: absolute;
  top: 65px;
  left: 160px;
  font-size: 14px;
  color: red;
`;
