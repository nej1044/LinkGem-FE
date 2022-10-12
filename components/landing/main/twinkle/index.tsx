import Star from '../star/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import * as S from './twinkle.styles';

const nonStarList = [
  {
    svg: 'star-101',
    figmaSize: 24,
    figmaLeft: 301,
    figmaTop: 135,
    color: '#FF04C8',
  },
  {
    svg: 'star-15',
    figmaSize: 28,
    figmaLeft: 425,
    figmaTop: 380,
    color: '#FFFFFF',
  },
  {
    svg: 'star-104',
    figmaSize: 25,
    figmaLeft: 485,
    figmaTop: 430,
    color: '#FFF504',
  },
  {
    svg: 'star-102',
    figmaSize: 25,
    figmaLeft: 1550,
    figmaTop: 50,
    color: '#FF5F05',
  },
  {
    svg: 'star-18',
    figmaSize: 25,
    figmaLeft: 1601,
    figmaTop: 78,
    color: '#CECECE',
  },
  {
    svg: 'star-14',
    figmaSize: 68,
    figmaLeft: 1350,
    figmaTop: 210,
    color: '#07FF6A',
  },
  {
    svg: 'star-161',
    figmaSize: 13,
    figmaLeft: 1465,
    figmaTop: 382,
    color: '#DFB750',
  },
  {
    svg: 'star-103',
    figmaSize: 25,
    figmaLeft: 1508,
    figmaTop: 453,
    color: '#220EFC',
  },
  {
    svg: 'star-160',
    figmaSize: 26,
    figmaLeft: 1410,
    figmaTop: 522,
    color: '#FF04C8',
  },
];

const starList = [
  {
    svg: 'star-159',
    figmaSize: 31,
    figmaLeft: 474,
    figmaTop: 0,
    color: '#220EFC',
  },
  {
    svg: 'star-171',
    figmaSize: 55,
    figmaLeft: 204,
    figmaTop: 231,
    color: '#DEFF81',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 214,
    figmaTop: 406,
    color: '#F9F9F9',
  },
  {
    svg: 'star-19',
    figmaSize: 28,
    figmaLeft: 158,
    figmaTop: 420,
    color: '#D2D2D2',
  },
  {
    svg: 'star-16',
    figmaSize: 47,
    figmaLeft: 325,
    figmaTop: 498,
    color: '#FF5F05',
  },
  {
    svg: 'star-162',
    figmaSize: 17,
    figmaLeft: 1631,
    figmaTop: 280,
    color: '#E6E6E6',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 1680,
    figmaTop: 305,
    color: '#F9F9F9',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 1354,
    figmaTop: 497,
    color: '#FFF2F2',
  },
  {
    svg: 'star-170',
    figmaSize: 55,
    figmaLeft: 1207,
    figmaTop: 388,
    color: '#CF73A5',
  },
];

const Twinkle = () => {
  const [num, setNum] = useState(0);
  const getNum = () => {
    setNum(Math.ceil(Math.random() * 9));
  };

  useEffect(() => {
    const twinkle = setInterval(() => {
      getNum();
    }, 500);
    return () => {
      clearInterval(twinkle);
    };
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
