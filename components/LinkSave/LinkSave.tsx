import { ILinkSaveProps } from 'types/Link.types';
import Image from 'next/image';

import React, { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import {
  LinkSaveContainer,
  LinkTextContainer,
  LinkText,
  LinkSaveButton,
  LinkSaveSuccessBar,
  SuccessMessage,
  FailMessage,
  XIconImage,
} from './LinkSave.style';
import Axios from 'utils/Axios';
import { useRecoilState } from 'recoil';
import { linkSaveState } from 'store/store';

function Link({ getLink, recentLink }: ILinkSaveProps) {
  // const [isVisibleMessage, setIsVisibleMessage] = useState(false);
  // const [isSuccessLink, setIsSuccessLink] = useState(false);
  const [linkSaveBar, setLinkSaveBar] = useRecoilState(linkSaveState);
  const [urlText, setUrlText] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      onClickLinkSaveButton();
    }
  };
  const onClickLinkSaveButton = async () => {
    try {
      await Axios('/api/v1/links', {
        method: 'post',
        data: {
          url: urlText.includes('https://') ? urlText : `https://${urlText}`,
        },
      });
      getLink();
      setLinkSaveBar({ isVisible: true, isSuccess: true });
      setUrlText('');
    } catch (error) {
      console.error(error);
      setLinkSaveBar({ isVisible: true, isSuccess: false });
      // setIsSuccessLink(false);
    }
    // setLinkSaveBar({ ...linkSaveBar, isVisible: true });
    // setIsVisibleMessage(true);
    setTimeout(() => {
      // setIsVisibleMessage(false);
      setLinkSaveBar({ isVisible: false, isSuccess: false });
    }, 3000);
  };

  const onCloseMessage = () => {
    // setIsVisibleMessage(false);
    setLinkSaveBar({ ...linkSaveBar, isSuccess: false });
  };

  const handleInputUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlText(e.target.value);
  };

  return (
    <LinkSaveContainer>
      <div>
        <LinkTextContainer>
          <Image
            src="/images/icons/plus-icon.svg"
            alt="plus-icon"
            width={15}
            height={16}
          />
          <LinkText
            placeholder="https://"
            onChange={handleInputUrl}
            value={urlText}
            onKeyPress={handleKeyPress}
          />
        </LinkTextContainer>
        <LinkSaveButton onClick={onClickLinkSaveButton}>
          링크 저장
        </LinkSaveButton>
      </div>
      {linkSaveBar.isVisible && (
        <LinkSaveSuccessBar
          isVisibleMessage={linkSaveBar.isVisible}
          isSuccessLink={linkSaveBar.isSuccess}
        >
          {linkSaveBar.isSuccess ? (
            <SuccessMessage>
              링크 저장 완료!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <XIconImage onClick={onCloseMessage}>
                <Image
                  src="/images/icons/link-x.svg"
                  alt="plus-icon"
                  width={12}
                  height={11}
                />
              </XIconImage>
            </SuccessMessage>
          ) : (
            <>
              <FailMessage>
                링크 저장 실패. 링크를 다시 한번 확인해 주세요.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <XIconImage onClick={onCloseMessage}>
                  <Image
                    src="/images/icons/link-x.svg"
                    alt="plus-icon"
                    width={12}
                    height={11}
                  />
                </XIconImage>
              </FailMessage>
            </>
          )}
        </LinkSaveSuccessBar>
      )}
    </LinkSaveContainer>
  );
}

export default memo(Link);
