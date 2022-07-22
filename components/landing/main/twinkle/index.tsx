import Star from '../star/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import * as S from './twinkle.styles';

const nonStarList = [
  {
    svg: 'star-101',
    figmaSize: 16,
    figmaLeft: 149,
    figmaTop: 188,
    color: '#FF04C8',
  },
  {
    svg: 'star-15',
    figmaSize: 19,
    figmaLeft: 225,
    figmaTop: 345,
    color: '#FFFFFF',
  },
  {
    svg: 'star-104',
    figmaSize: 17,
    figmaLeft: 265,
    figmaTop: 375,
    color: '#FFF504',
  },
  {
    svg: 'star-102',
    figmaSize: 17,
    figmaLeft: 980,
    figmaTop: 120,
    color: '#FF5F05',
  },
  {
    svg: 'star-18',
    figmaSize: 17,
    figmaLeft: 1018,
    figmaTop: 140,
    color: '#CECECE',
  },
  {
    svg: 'star-14',
    figmaSize: 30,
    figmaLeft: 880,
    figmaTop: 227,
    color: '#07FF6A',
  },
  {
    svg: 'star-161',
    figmaSize: 9,
    figmaLeft: 948,
    figmaTop: 395,
    color: '#DFB750',
  },
  {
    svg: 'star-103',
    figmaSize: 17,
    figmaLeft: 985,
    figmaTop: 458,
    color: '#220EFC',
  },
  {
    svg: 'star-160',
    figmaSize: 19,
    figmaLeft: 905,
    figmaTop: 512,
    color: '#FF04C8',
  },
];

const starList = [
  {
    svg: 'star-159',
    figmaSize: 20,
    figmaLeft: 352,
    figmaTop: 101,
    color: '#220EFC',
  },
  {
    svg: 'star-171',
    figmaSize: 37,
    figmaLeft: 84,
    figmaTop: 251,
    color: '#DEFF81',
  },
  {
    svg: 'star-84',
    figmaSize: 5,
    figmaLeft: 104,
    figmaTop: 436,
    color: '#F9F9F9',
  },
  {
    svg: 'star-19',
    figmaSize: 19,
    figmaLeft: 63,
    figmaTop: 450,
    color: '#D2D2D2',
  },
  {
    svg: 'star-16',
    figmaSize: 31,
    figmaLeft: 175,
    figmaTop: 504,
    color: '#FF5F05',
  },
  {
    svg: 'star-162',
    figmaSize: 11,
    figmaLeft: 1031,
    figmaTop: 280,
    color: '#E6E6E6',
  },
  {
    svg: 'star-85',
    figmaSize: 5,
    figmaLeft: 1000,
    figmaTop: 295,
    color: '#F9F9F9',
  },
  {
    svg: 'star-87',
    figmaSize: 8,
    figmaLeft: 884,
    figmaTop: 497,
    color: '#FFF2F2',
  },
  {
    svg: 'star-170',
    figmaSize: 37,
    figmaLeft: 807,
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
