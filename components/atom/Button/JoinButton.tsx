import React from 'react';
import { joinState } from 'store/store';
import { useRecoilValue } from 'recoil';
import { JoinButtonContainer } from './JoinButton.style';

type joinButtonProps = {
  color: string;
  width: string;
  height: string;
  text: string;
  backgroundColor: string;
  onClick: () => void;
  fontSize: string;
  hoverColor: string;
  type: string;
};

function JoinButton({
  onClick,
  color,
  width,
  height,
  text,
  backgroundColor,
  fontSize,
  hoverColor,
  type,
}: joinButtonProps) {
  const joinUserInfo = useRecoilValue(joinState);
  const nextStep = () => {
    if (type === 'nickname' && !joinUserInfo.nickname) {
      alert('닉네임을 입력해주세요');
    } else {
      onClick();
    }
  };
  return (
    <JoinButtonContainer
      onClick={() => nextStep()}
      color={color}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      hoverColor={hoverColor}
    >
      {text}
    </JoinButtonContainer>
  );
}

export default JoinButton;
