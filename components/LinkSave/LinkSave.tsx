import Image from 'next/image';
import React, { memo, useState } from 'react';
import {
  LinkSaveContainer,
  LinkTextContainer,
  LinkText,
  LinkSaveButton,
  LinkSaveSuccessBar,
  // SuccessMessage,
  FailMessage,
  XIconImage,
} from './LinkSave.style';

function Link() {
  const [isVisibleMessage, setIsVisibleMessage] = useState(true);
  // const [opacity, setOpacity] = useState(100);

  const onClickLinkSaveButton = () => {
    setIsVisibleMessage(true);
    setTimeout(() => {
      setIsVisibleMessage(false);
    }, 3000);
  };

  const onCloseMessage = () => {
    setIsVisibleMessage(false);
  };

  // const softRemover = useCallback(() => {
  //   if (opacity > 96) {
  //     setTimeout(() => {
  //       setOpacity(opacity - 1);
  //     }, 100);
  //   } else if (opacity > 5)
  //     setTimeout(() => {
  //       setOpacity(opacity - 8);
  //     }, 50);
  // }, [opacity]);

  // useEffect(() => {
  //   softRemover(); // 해당 컴포넌트가 나타나면 함수가 바로실행됨.
  // }, [softRemover]);
  return (
    <LinkSaveContainer>
      <div>
        <LinkTextContainer>
          <Image
            src="/icons/plus-icon.svg"
            alt="plus-icon"
            width={15}
            height={16}
          />
          <LinkText placeholder="링크를 넣어 저장하세요 Https://..." />
        </LinkTextContainer>
        <LinkSaveButton onClick={onClickLinkSaveButton}>
          링크 저장
        </LinkSaveButton>
      </div>
      {isVisibleMessage && (
        <LinkSaveSuccessBar isVisibleMessage={isVisibleMessage}>
          {/* <SuccessMessage>링크 저장 완료!</SuccessMessage> */}
          <FailMessage>
            링크 저장 실패. 링크를 다시 한번 확인해 주세요
          </FailMessage>
          <XIconImage onClick={onCloseMessage}>
            <Image
              src="/icons/link-x.svg"
              alt="plus-icon"
              width={12}
              height={11}
            />
          </XIconImage>
        </LinkSaveSuccessBar>
      )}
    </LinkSaveContainer>
  );
}

export default memo(Link);
