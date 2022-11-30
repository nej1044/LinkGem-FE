import React, { ReactNode, useEffect, useState } from 'react';
import {
  Background,
  ModalContainer,
  Title,
  CloseButton,
  ImageButton,
  Content,
} from './MobileModal.style';

interface MobileModalProps {
  /** 모달에 들어갈 컴포넌트 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  handleModal: () => void;
  setIsOpenModal: (any: boolean) => void;
  isCloseButton: boolean;
  children: ReactNode;
}

export default function MobileModal({
  visible,
  handleModal,
  setIsOpenModal,
  isCloseButton,
  children,
}: MobileModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (visible) {
      setOpen(true);
    } else {
      timeoutId = setTimeout(() => setOpen(false), 1500);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!open) {
    return null;
  }

  return (
    <>
      <Background visible={visible} onClick={() => setIsOpenModal(false)} />
      <ModalContainer visible={visible}>
        <Title>
          {isCloseButton && (
            <CloseButton type="button" onClick={() => handleModal()}>
              <ImageButton src="/icons/Home-X-black.svg" alt="close" />
            </CloseButton>
          )}
        </Title>
        <Content>
          {children}
          {/* <h2>{title}</h2>
          <LinkTextContainer>
            <Image
              src="/images/icons/plus-icon.svg"
              alt="plus-icon"
              width={15}
              height={16}
            />
            <LinkText
              placeholder="https://..."
              onChange={handleInputUrl}
              value={urlText}
              onKeyPress={handleKeyPress}
            />
          </LinkTextContainer>
          <LinkSaveButton onClick={() => onClickLinkSaveButton()}>
            링크 저장
          </LinkSaveButton> */}
        </Content>
      </ModalContainer>
    </>
  );
}
