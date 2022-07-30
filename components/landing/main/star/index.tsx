import dynamic from 'next/dynamic';
import { IconLocation } from './star.styles';

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

  return (
    <IconLocation left={figmaLeft} top={figmaTop}>
      <StarComponent
        className={isTwinkle ? 'star' : 'not-star'}
        width={figmaSize}
        height={figmaSize}
        fill={fill}
      />
    </IconLocation>
  );
}
