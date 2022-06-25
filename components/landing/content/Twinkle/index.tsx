import React from 'react';
import Star from 'components/landing/content/Twinkle/Star';

import TwinkleBlock from './Twinkle.styled';

export default function Index() {
  return (
    <TwinkleBlock>
      <div className="wrapper">
        <Star
          svgName="star-171"
          className="star171"
          figmaSize={55}
          figmaLeft={235}
          figmaTop={431}
          fill="#DEFF81"
        />

        <Star
          svgName="star-84"
          className="star171"
          figmaSize={66}
          figmaLeft={500}
          figmaTop={200}
          fill="#DEFF81"
        />
      </div>
    </TwinkleBlock>
  );
}
