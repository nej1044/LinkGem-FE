import Image from 'next/image';
import React, { memo } from 'react';
import {
  LinkCopyContainer,
  LinkCopySuccess,
  XIconImage,
} from './LinkCopy.style';

function LinkCopy() {
  return (
    <LinkCopyContainer>
      <LinkCopySuccess>링크가 복사되었습니다.</LinkCopySuccess>

      <XIconImage>
        <Image
          src="/images/icons/x-icon-white.svg"
          alt="plus-icon"
          width={12}
          height={11}
        />
      </XIconImage>
    </LinkCopyContainer>
  );
}

export default memo(LinkCopy);
