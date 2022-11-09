import styled from 'styled-components';

export const LinkContainer = styled.div`
  position: relative;
  max-width: 320px;
  max-height: 376px;

  background: #ffffff;

  /* shadow */

  box-shadow: 0px 4px 10px rgba(78, 78, 78, 0.15);
  border-radius: 16px;
  transition: transform 0.35s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageBox = styled.div<{ isEtcCon: boolean }>`
  overflow: hidden;
  border-radius: 16px 16px 0px 0px;
  img {
    filter: ${(props) => props.isEtcCon && 'brightness(60%)'};
    object-fit: cover;
    width: 100%;
  }
`;

export const LinkDetailBox = styled.div<{ isEtcCon: boolean }>`
  padding: 24px;
  filter: ${(props) => props.isEtcCon && 'brightness(60%)'};
`;

export const LinkDetailTitle = styled.div`
  width: 272px;
  height: 24px;

  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  /* or 25px */

  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
  a {
    color: #1a1b1d;
    text-decoration: none;
  }
  a:visited {
    color: #1a1b1d;
  }
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
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */

  letter-spacing: -0.02em;

  /* gray/gray3 */

  color: #3c3c3f;
  a {
    color: #3c3c3f;
    text-decoration: none;
  }
  a:visited {
    color: #3c3c3f;
  }
`;
export const LinkDetailSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;
export const LinkDetailSettingDate = styled.div`
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

export const LinkEtcBox = styled.div`
  width: 269px;
  height: 120px;
  position: absolute;
  top: 175px;
  display: flex;
  justify-content: space-between;
  padding: 70px 25px 7px 25px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px -4px 10px rgba(196, 196, 196, 0.15);
`;

export const LinkEtcButtonBox = styled.div`
  display: flex;
  /* width: 80px; */
  flex-direction: column;
  align-items: center;
  span {
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    /* identical to box height, or 17px */

    text-align: center;
    letter-spacing: -0.02em;
  }
`;
export const LinkEtcButton = styled.img`
  width: 32px;
  height: 32px;
  transition: all ease 0.8s;

  &:hover {
    cursor: pointer;
    transform: rotate(-90deg);
  }
`;

export const LinkEtcXButton = styled.img`
  position: absolute;
  top: 20px;
  right: 24px;
  width: 16px;
  height: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const GemCrewLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: -0.02em;

  /* text/black */

  color: #1a1b1d;
`;

export const MemoImage = styled.img`
  width: 24px;
  height: 24px;
  padding: 7px;
  cursor: pointer;
`;
