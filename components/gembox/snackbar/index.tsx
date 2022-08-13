import { CloseOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction } from 'react';
import { useRecoilValue } from 'recoil';
import copyState from 'store/store';
import styled, { keyframes } from 'styled-components';

interface IPropsSnackBarStyles {
  isLinkCopy: boolean;
}

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LinkCopyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  position: fixed;
  width: 200px;
  height: 24px;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 88px;

  background: ${(props: IPropsSnackBarStyles) =>
    props.isLinkCopy ? '#252730' : '#FFF1F1'};
  border-radius: 16px;
  animation: ${boxFade} 3s;
  animation-iteration-count: 1;
`;

const LinkCopyText = styled.div`
  height: 11px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 16px;
  color: ${(props: IPropsSnackBarStyles) =>
    props.isLinkCopy ? '#ffffff' : '#ff0000'};
`;

export const XIconImage = styled(CloseOutlined)`
  width: 11px;
  height: 11px;
  color: ${(props: IPropsSnackBarStyles) =>
    props.isLinkCopy ? '#ffffff' : '#000000'};
  &:hover {
    cursor: pointer;
  }
`;

const Snackbar = (props: { setIsCopy: Dispatch<SetStateAction<boolean>> }) => {
  const isLinkCopy = useRecoilValue(copyState);

  return (
    <LinkCopyContainer isLinkCopy={isLinkCopy}>
      <LinkCopyText isLinkCopy={isLinkCopy}>
        {isLinkCopy ? '링크가 복사되었습니다.' : '오류가 발생했습니다.'}
      </LinkCopyText>
      <XIconImage
        alt="plus-icon"
        width={12}
        height={11}
        isLinkCopy={isLinkCopy}
        onClick={() => props.setIsCopy(false)}
      />
    </LinkCopyContainer>
  );
};

export default Snackbar;
