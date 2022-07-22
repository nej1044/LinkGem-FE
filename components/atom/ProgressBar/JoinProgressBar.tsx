import React from 'react';
import { Container, Progress, DotContainer } from './JoinProgressBar.style';

interface ProgressBarProps {
  width: string;
  stage: string;
}

function ProgressBar({ width, stage }: ProgressBarProps) {
  return (
    <Container>
      <Progress width={width} />
      <DotContainer stage={stage}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </DotContainer>
    </Container>
  );
}

export default ProgressBar;
