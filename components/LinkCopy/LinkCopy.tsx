import Image from 'next/image';
import React, { memo } from 'react';
import {
  LinkCopyContainer,
  LinkCopySuccess,
  XIconImage,
} from './LinkCopy.style';

interface ILinkCopy {
  setIsCopy: (boo: boolean) => void;
}

function LinkCopy({ setIsCopy }: ILinkCopy) {
  return (
    <LinkCopyContainer>
      <LinkCopySuccess>링크가 복사되었습니다.</LinkCopySuccess>

      <XIconImage>
        <Image
          src="/images/icons/x-icon-white.svg"
          alt="x-icon"
          width={12}
          height={11}
          onClick={() => setIsCopy(false)}
        />
      </XIconImage>
    </LinkCopyContainer>
  );
}

export default memo(LinkCopy);
