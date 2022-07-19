import Star from '../star/index';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import * as S from './twinkle.styles';

const starList = [
  {
    svg: 'star-159',
    figmaSize: 30,
    figmaLeft: 552,
    figmaTop: 181,
    color: '#220EFC',
  },
  {
    svg: 'star-171',
    figmaSize: 55,
    figmaLeft: 235,
    figmaTop: 431,
    color: '#DEFF81',
  },
  {
    svg: 'star-101',
    figmaSize: 24,
    figmaLeft: 297,
    figmaTop: 346,
    color: '#FF04C8',
  },
  {
    svg: 'star-15',
    figmaSize: 18,
    figmaLeft: 430,
    figmaTop: 700,
    color: '#FFFFFF',
  },
  {
    svg: 'star-104',
    figmaSize: 24,
    figmaLeft: 500,
    figmaTop: 732,
    color: '#FFFFFF',
  },
  {
    svg: 'star-84',
    figmaSize: 8,
    figmaLeft: 254,
    figmaTop: 686,
    color: '#F9F9F9',
  },
  {
    svg: 'star-19',
    figmaSize: 28,
    figmaLeft: 193,
    figmaTop: 704,
    color: '#D2D2D2',
  },
  {
    svg: 'star-16',
    figmaSize: 47,
    figmaLeft: 325,
    figmaTop: 784,
    color: '#FF5F05',
  },
  {
    svg: 'star-102',
    figmaSize: 25,
    figmaLeft: 1621,
    figmaTop: 232,
    color: '#FF5F05',
  },
  {
    svg: 'star-18',
    figmaSize: 25,
    figmaLeft: 1689,
    figmaTop: 258,
    color: '#CECECE',
  },
  {
    svg: 'star-14',
    figmaSize: 68,
    figmaLeft: 1470,
    figmaTop: 437,
    color: '#07FF6A',
  },
  {
    svg: 'star-162',
    figmaSize: 17,
    figmaLeft: 1731,
    figmaTop: 490,
    color: '#E6E6E6',
  },
  {
    svg: 'star-85',
    figmaSize: 8,
    figmaLeft: 1775,
    figmaTop: 513,
    color: '#F9F9F9',
  },
  {
    svg: 'star-161',
    figmaSize: 13,
    figmaLeft: 1530,
    figmaTop: 630,
    color: '#DFB750',
  },
  {
    svg: 'star-103',
    figmaSize: 25,
    figmaLeft: 1595,
    figmaTop: 742,
    color: '#220EFC',
  },
  {
    svg: 'star-160',
    figmaSize: 29,
    figmaLeft: 1457,
    figmaTop: 842,
    color: '#FF04C8',
  },
  {
    svg: 'star-87',
    figmaSize: 8,
    figmaLeft: 1434,
    figmaTop: 829,
    color: '#FFF2F2',
  },
  {
    svg: 'star-170',
    figmaSize: 55,
    figmaLeft: 1337,
    figmaTop: 718,
    color: '#FF04C8',
  },
];

const Twinkle = () => {
  const [num, setNum] = useState(0);
  const getNum = () => {
    setNum(Math.ceil(Math.random() * 18));
  };

  useEffect(() => {
    setInterval(() => {
      getNum();
    }, 5000);
  }, []);

  return (
    <>
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
      <S.Stroke1 />
      <S.Stroke2 />
      <S.Stroke3 />
    </>
  );
};

export default Twinkle;
