import styled from 'styled-components';
export const SettingContainer = styled.main`
  width: 100%;
  background-color: #faf5ff;

  padding-top: 80px;
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
    background: #cecece;
  }
`;

export const SettingLineBox = styled.div`
  display: flex;
  margin-top: 24px;
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
  background: #ffffff;
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
  div {
    opacity: 0;
  }
  img:hover div {
    opacity: 1;
  }
`;

export const SettingImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const SettingImageHover = styled.div`
  position: absolute;
  top: 0px;
  width: 140px;
  height: 140px;
  border-radius: 16px;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  background-color: rgba(0, 0, 0, 0.6);
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
  position: relative;
  margin-top: 80px;
  padding-left: 300px;
`;

export const SettingButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 16px 24px 16px 24px;
  margin-right: 16px;
  border-radius: 50px;
  color: #ffffff;
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;

  &:hover {
    cursor: pointer;
  }
`;

export const EtcContainer = styled.div`
  position: relative;
  left: 400px;
  margin-top: 64px;

  span {
    margin-left: 24px;
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
