import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { IconLocation } from '../Twinkle.styled';

const figmaWidth = 1920;
const figmaHeight = 1018;

interface IStar {
  className: string;
  width: number;
  height: number;
  fill: string;
}

export default function Index({
  svgName,
  className,
  figmaSize,
  figmaLeft,
  figmaTop,
  fill,
}: {
  svgName: string;
  className: string;
  figmaSize: number;
  figmaLeft: number;
  figmaTop: number;
  fill: string;
}) {
  const [iconState, setIconState] = useState({ size: 0, left: 0, top: 0 });

  const StarComponent = dynamic<IStar>(() => {
    switch (svgName) {
      case 'star-171':
        return import(`public/icons/star-171.svg`);
      case 'star-84':
        return import(`public/icons/star-84.svg`);
      default:
        return import(`public/icons/star-171.svg`);
    }
  });

  useEffect(() => {
    setIconState({
      size: window.innerWidth * (figmaSize / figmaWidth),
      left: (figmaLeft / figmaWidth) * 100,
      top: (figmaTop / figmaHeight) * 100,
    });
  }, []);

  return (
    <IconLocation left={iconState.left} top={iconState.top}>
      {/* <Star171
        className="star171"
        width={iconState.size}
        height={iconState.size}
        fill="#DEFF81"
      /> */}

      <StarComponent
        className={className}
        width={iconState.size}
        height={iconState.size}
        fill={fill}
      />
    </IconLocation>
  );
}
