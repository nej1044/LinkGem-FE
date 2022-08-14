import Image from 'next/image';
import React, { memo } from 'react';
import {
  LinkCopyContainer,
  LinkCopySuccess,
  LinkCopyFail,
  XIconImage,
} from './LinkCopy.style';

function LinkCopy() {
  const isCopy = true;
  console.log('isLinkCopy11');
  console.log(isCopy);
  return (
    <LinkCopyContainer>
      {isCopy ? (
        <LinkCopySuccess>링크가 복사되었습니다.</LinkCopySuccess>
      ) : (
        <LinkCopyFail>오류가 발생했습니다.</LinkCopyFail>
      )}
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
