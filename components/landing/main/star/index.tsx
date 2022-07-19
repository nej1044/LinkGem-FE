import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { IconLocation } from './star.styles';

const figmaWidth = 1920;
const figmaHeight = 1018;

interface IStar {
  className: string;
  width: number;
  height: number;
  fill: string;
  // ref: (ref: never) => MutableRefObject<never[]>;
}

export default function Index({
  svgName,
  figmaSize,
  figmaLeft,
  figmaTop,
  fill,
  isTwinkle,
}: {
  svgName: string;
  isTwinkle: boolean;
  figmaSize: number;
  figmaLeft: number;
  figmaTop: number;
  fill: string;
  // starListRef: MutableRefObject<never[]>;
}) {
  const [iconState, setIconState] = useState({ size: 0, left: 0, top: 0 });

  const StarComponent = dynamic<IStar>(() => {
    switch (svgName) {
      case 'star-14':
        return import(`public/icons/star-14.svg`);
      case 'star-15':
        return import(`public/icons/star-15.svg`);
      case 'star-16':
        return import(`public/icons/star-16.svg`);
      case 'star-18':
        return import(`public/icons/star-18.svg`);
      case 'star-19':
        return import(`public/icons/star-19.svg`);
      case 'star-84':
        return import(`public/icons/star-84.svg`);
      case 'star-101`':
        return import(`public/icons/star-101.svg`);
      case 'star-102':
        return import(`public/icons/star-102.svg`);
      case 'star-103':
        return import(`public/icons/star-103.svg`);
      case 'star-104':
        return import(`public/icons/star-104.svg`);
      case 'star-159':
        return import(`public/icons/star-159.svg`);
      case 'star-160':
        return import(`public/icons/star-160.svg`);
      case 'star-161':
        return import(`public/icons/star-161.svg`);
      case 'star-162':
        return import(`public/icons/star-162.svg`);
      case 'star-169':
        return import(`public/icons/star-169.svg`);
      case 'star-170':
        return import(`public/icons/star-170.svg`);
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
      <StarComponent
        className={isTwinkle ? 'star' : 'not-star'}
        width={iconState.size}
        height={iconState.size}
        fill={fill}
      />
    </IconLocation>
  );
}
