import Star from '../star/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import * as S from './twinkle.styles';

const nonStarList = [
  {
    svg: 'star-101',
    figmaSize: 24,
    figmaLeft: 147,
    figmaTop: 188,
    color: '#FF04C8',
  },
  {
    svg: 'star-15',
    figmaSize: 28,
    figmaLeft: 250,
    figmaTop: 395,
    color: '#FFFFFF',
  },
  {
    svg: 'star-104',
    figmaSize: 25,
    figmaLeft: 305,
    figmaTop: 435,
    color: '#FFF504',
  },
  {
    svg: 'star-102',
    figmaSize: 25,
    figmaLeft: 1200,
    figmaTop: 117,
    color: '#FF5F05',
  },
  {
    svg: 'star-18',
    figmaSize: 25,
    figmaLeft: 1250,
    figmaTop: 146,
    color: '#CECECE',
  },
  {
    svg: 'star-14',
    figmaSize: 68,
    figmaLeft: 1030,
    figmaTop: 260,
    color: '#07FF6A',
  },
  {
    svg: 'star-161',
    figmaSize: 13,
    figmaLeft: 1155,
    figmaTop: 362,
    color: '#DFB750',
  },
  {
    svg: 'star-103',
    figmaSize: 25,
    figmaLeft: 1205,
    figmaTop: 448,
    color: '#220EFC',
  },
  {
    svg: 'star-160',
    figmaSize: 26,
    figmaLeft: 1095,
    figmaTop: 532,
    color: '#FF04C8',
  },
];

const starList = [
  {
    svg: 'star-159',
    figmaSize: 31,
    figmaLeft: 322,
    figmaTop: 71,
    color: '#220EFC',
  },
  {
    svg: 'star-171',
    figmaSize: 55,
    figmaLeft: 84,
    figmaTop: 251,
    color: '#DEFF81',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 104,
    figmaTop: 436,
    color: '#F9F9F9',
  },
  {
    svg: 'star-19',
    figmaSize: 28,
    figmaLeft: 63,
    figmaTop: 450,
    color: '#D2D2D2',
  },
  {
    svg: 'star-16',
    figmaSize: 47,
    figmaLeft: 175,
    figmaTop: 504,
    color: '#FF5F05',
  },
  {
    svg: 'star-162',
    figmaSize: 17,
    figmaLeft: 1231,
    figmaTop: 280,
    color: '#E6E6E6',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 1280,
    figmaTop: 295,
    color: '#F9F9F9',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 1054,
    figmaTop: 497,
    color: '#FFF2F2',
  },
  {
    svg: 'star-170',
    figmaSize: 55,
    figmaLeft: 987,
    figmaTop: 418,
    color: '#CF73A5',
  },
];

const Twinkle = () => {
  const [num, setNum] = useState(0);
  const getNum = () => {
    setNum(Math.ceil(Math.random() * 9));
  };

  useEffect(() => {
    setInterval(() => {
      getNum();
    }, 800);
  }, []);

  return (
    <S.Wrapper>
      {starList.map((item, i) => (
        <Star
          key={uuidv4()}
          isTwinkle={i === num}
          svgName={item.svg}
          figmaSize={item.figmaSize}
          figmaLeft={item.figmaLeft}
          figmaTop={item.figmaTop}
          fill={item.color}
        />
      ))}
      {nonStarList.map((item) => (
        <Star
          key={uuidv4()}
          isTwinkle={false}
          svgName={item.svg}
          figmaSize={item.figmaSize}
          figmaLeft={item.figmaLeft}
          figmaTop={item.figmaTop}
          fill={item.color}
        />
      ))}
      <S.Stroke1 />
      <S.Stroke2 />
      <S.Stroke3 />
    </S.Wrapper>
  );
};

export default Twinkle;
