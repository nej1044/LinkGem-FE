import React from 'react';
import { JoinButtonContainer } from './JoinButton.style';

type joinButtonProps = {
  color: string;
  width: string;
  height: string;
  text: string;
  backgroundColor: string;
  onClick: () => void;
  fontSize: string;
};

function JoinButton({
  onClick,
  color,
  width,
  height,
  text,
  backgroundColor,
  fontSize,
}: joinButtonProps) {
  return (
    <JoinButtonContainer
      onClick={onClick}
      color={color}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
    >
      {text}
    </JoinButtonContainer>
  );
}

export default JoinButton;
