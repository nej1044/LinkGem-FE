import Star from '../star/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import * as S from './twinkle.styles';

const nonStarList = [
  {
    svg: 'star-101',
    figmaSize: 24,
    figmaLeft: 147,
    figmaTop: 158,
    color: '#FF04C8',
  },
  {
    svg: 'star-15',
    figmaSize: 28,
    figmaLeft: 250,
    figmaTop: 365,
    color: '#FFFFFF',
  },
  {
    svg: 'star-104',
    figmaSize: 25,
    figmaLeft: 305,
    figmaTop: 405,
    color: '#FFF504',
  },
  {
    svg: 'star-102',
    figmaSize: 25,
    figmaLeft: 1200,
    figmaTop: 87,
    color: '#FF5F05',
  },
  {
    svg: 'star-18',
    figmaSize: 25,
    figmaLeft: 1250,
    figmaTop: 116,
    color: '#CECECE',
  },
  {
    svg: 'star-14',
    figmaSize: 68,
    figmaLeft: 1030,
    figmaTop: 230,
    color: '#07FF6A',
  },
  {
    svg: 'star-161',
    figmaSize: 13,
    figmaLeft: 1155,
    figmaTop: 332,
    color: '#DFB750',
  },
  {
    svg: 'star-103',
    figmaSize: 25,
    figmaLeft: 1205,
    figmaTop: 418,
    color: '#220EFC',
  },
  {
    svg: 'star-160',
    figmaSize: 26,
    figmaLeft: 1095,
    figmaTop: 502,
    color: '#FF04C8',
  },
];

const starList = [
  {
    svg: 'star-159',
    figmaSize: 31,
    figmaLeft: 322,
    figmaTop: 41,
    color: '#220EFC',
  },
  {
    svg: 'star-171',
    figmaSize: 55,
    figmaLeft: 84,
    figmaTop: 221,
    color: '#DEFF81',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 104,
    figmaTop: 406,
    color: '#F9F9F9',
  },
  {
    svg: 'star-19',
    figmaSize: 28,
    figmaLeft: 63,
    figmaTop: 420,
    color: '#D2D2D2',
  },
  {
    svg: 'star-16',
    figmaSize: 47,
    figmaLeft: 175,
    figmaTop: 474,
    color: '#FF5F05',
  },
  {
    svg: 'star-162',
    figmaSize: 17,
    figmaLeft: 1231,
    figmaTop: 250,
    color: '#E6E6E6',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 1280,
    figmaTop: 265,
    color: '#F9F9F9',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 1054,
    figmaTop: 467,
    color: '#FFF2F2',
  },
  {
    svg: 'star-170',
    figmaSize: 55,
    figmaLeft: 987,
    figmaTop: 388,
    color: '#CF73A5',
  },
];

const Twinkle = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const getNum = () => {
    setNum(Math.ceil(Math.random() * 9));
  };
  const getNum2 = () => {
    setNum2(Math.ceil(Math.random() * 9));
  };

  useEffect(() => {
    setInterval(() => {
      getNum();
    }, 1500);
    setInterval(() => {
      getNum2();
    }, 1000);
  }, []);

  return (
    <S.Wrapper>
      {starList.map((item, i) => (
        <Star
          key={uuidv4()}
          isStar={true}
          isTwinkle={i === num || i === num2}
          svgName={item.svg}
          figmaSize={item.figmaSize}
          figmaLeft={item.figmaLeft}
          figmaTop={item.figmaTop}
          fill={item.color}
        />
      ))}
      {nonStarList.map((item, i) => (
        <Star
          key={uuidv4()}
          isStar={false}
          isTwinkle={i === num || i === num2}
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
