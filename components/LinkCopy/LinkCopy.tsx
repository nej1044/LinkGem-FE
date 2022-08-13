import Image from 'next/image';
import React, { memo } from 'react';
import { useRecoilValue } from 'recoil';
import copyState from 'store/store';
import {
  LinkCopyContainer,
  LinkCopySuccess,
  LinkCopyFail,
  XIconImage,
} from './LinkCopy.style';

function LinkCopy() {
  const isLinkCopy = useRecoilValue(copyState);
  return (
    <LinkCopyContainer>
      {isLinkCopy ? (
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
