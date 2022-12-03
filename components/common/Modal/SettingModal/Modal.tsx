import React, { ReactChild, useEffect, useState } from 'react';
import { Background, ModalContainer, Content } from './Modal.style';

interface ModalProps {
  children: ReactChild;
  /** 모달에 들어갈 컴포넌트 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  handleModal: () => void;
  isType: boolean;
}

export default function Modal({
  children,
  visible,
  handleModal,
  isType,
}: ModalProps) {
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
      <Background visible={visible} onClick={() => handleModal()} />
      <ModalContainer visible={visible}>
        <Content>
          {isType ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#FFE0E0" />
              <path
                d="M15.52 18.96H17.44L17.86 10.78L17.96 8H15L15.1 10.78L15.52 18.96ZM15.04 23.48H17.96V20.64H15.04V23.48Z"
                fill="#FF3C3C"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#F3EDFF" />
              <path
                d="M8 16L14 22L25 11"
                stroke="#5200FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {children}
        </Content>
      </ModalContainer>
    </>
  );
}
