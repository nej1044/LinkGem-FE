import styled from 'styled-components';

export const LinkCopyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 24px;
  z-index: 100;

  position: fixed;
  width: 247px;
  height: 56px;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 88px;

  background: #252730;
  border-radius: 16px;
`;

export const LinkCopySuccess = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* text/white */

  color: #ffffff;
`;
export const LinkCopyFail = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  /* text/error */

  color: #ff0000;
`;

export const XIconImage = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
