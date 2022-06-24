import React from 'react';
import { JoinButtonContainer } from './JoinButton.style';

type joinButtonProps = {
  text: string;
  color: string;
  onClick: () => void;
};

function JoinButton({ onClick, text, color }: joinButtonProps) {
  return (
    <JoinButtonContainer onClick={onClick} color={color}>
      {text}
    </JoinButtonContainer>
  );
}

export default JoinButton;
