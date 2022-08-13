import { ILinkSaveProps } from 'types/Link.types';
import Image from 'next/image';
import React, { ChangeEvent, memo, useState } from 'react';
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

function Link({ setRecentLink, recentLink }: ILinkSaveProps) {
  const [isVisibleMessage, setIsVisibleMessage] = useState(false);
  const [urlText, setUrlText] = useState('');
  // const [opacity, setOpacity] = useState(100);
  const [isSuccessLink, setIsSuccessLink] = useState(false);
  const onClickLinkSaveButton = async () => {
    try {
      const response = await Axios('/api/v1/links', {
        method: 'post',
        data: {
          url: urlText,
        },
      });
      const saveLink = await response?.data?.result;
      const _recentLink = recentLink.slice(0, 3);
      setRecentLink([{ ...saveLink }, ..._recentLink]);
      setIsSuccessLink(true);
      setUrlText('');
    } catch (error) {
      console.log('정보가 없습니다');
      setIsSuccessLink(false);
    }
    setIsVisibleMessage(true);
    setTimeout(() => {
      setIsVisibleMessage(false);
    }, 3000);
  };

  const onCloseMessage = () => {
    setIsVisibleMessage(false);
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
            placeholder="링크를 넣어 저장하세요 Https://..."
            onChange={handleInputUrl}
            value={urlText}
          />
        </LinkTextContainer>
        <LinkSaveButton onClick={onClickLinkSaveButton}>
          링크 저장
        </LinkSaveButton>
      </div>
      {isVisibleMessage && (
        <LinkSaveSuccessBar isVisibleMessage={isVisibleMessage}>
          {isSuccessLink ? (
            <SuccessMessage>링크 저장 완료!</SuccessMessage>
          ) : (
            <>
              <FailMessage>
                링크 저장 실패. 링크를 다시 한번 확인해 주세요
              </FailMessage>
              <XIconImage onClick={onCloseMessage}>
                <Image
                  src="/images/icons/link-x.svg"
                  alt="plus-icon"
                  width={12}
                  height={11}
                />
              </XIconImage>
            </>
          )}
        </LinkSaveSuccessBar>
      )}
    </LinkSaveContainer>
  );
}

export default memo(Link);
