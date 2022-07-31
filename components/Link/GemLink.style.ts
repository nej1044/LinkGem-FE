import styled from 'styled-components';

export const LinkContainer = styled.section`
  width: 320px;
  height: 376px;
  margin-right: 24px;

  background: #ffffff;
  /* shadow */

  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 16px;
  transition: transform 0.35s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 16px 16px 0px 0px;
`;

export const LinkDetailContainer = styled.div`
  padding: 24px;
`;

export const LinkDetailTitle = styled.div`
  width: 272px;
  height: 24px;

  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
`;
export const LinkDetailDescription = styled.div`
  width: 272px;
  height: 60px;
  margin-top: 12px;
  margin-bottom: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  ::-webkit-scrollbar {
    display: none;
  }
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  letter-spacing: -0.02em;

  /* gray/gray3 */

  color: #3c3c3f;
`;
export const LinkDetailSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LinkDetailSettingDate = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  letter-spacing: -0.02em;

  /* gray/gray3 */

  color: #3c3c3f;
`;
export const LinkDetailSettingOption = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span:hover {
    cursor: pointer;
  }
`;
export const EtcButton = styled.button`
  background: white;
  border: none;
  padding: 0px;
  letter-spacing: 3px;

  &:hover {
    cursor: pointer;
  }
`;