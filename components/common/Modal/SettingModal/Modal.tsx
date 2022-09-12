import React, { useEffect, useState } from 'react';
import {
  Background,
  ModalContainer,
  Title,
  CloseButton,
  ImageButton,
  LinkTextContainer,
  LinkSaveButton,
  Content,
  ButtonBox,
} from './Modal.style';

interface ModalProps {
  /** 모달에 들어갈 컴포넌트 */
  visible: boolean;
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  handleModal: () => void;
}

export default function Modal({ visible, handleModal }: ModalProps) {
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
      <Background visible={visible} />
      <ModalContainer visible={visible}>
        <Title>
          <CloseButton type="button" onClick={handleModal}>
            <ImageButton src="/icons/Home-X-black.svg" alt="close" />
          </CloseButton>
        </Title>
        <Content>
          <h2>키퍼님, 정말 탈퇴하시겠어요?</h2>
          <LinkTextContainer>
            탈퇴하시면 회원님의 모든 정보와 활동기록이 삭제됩니다.
            <br />
            삭제된 정보는 복구할 수 없으니 신중히 생각해주세요.
          </LinkTextContainer>
          <ButtonBox>
            <LinkSaveButton bgColor="#252730">
              <a
                href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=GaA68400epOsIRyJ4C3r&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}oauth/naver/withdrawal`}
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                네, 탈퇴할게요
              </a>
            </LinkSaveButton>
            <LinkSaveButton bgColor="#5200FF" onClick={handleModal}>
              다시 생각할게요
            </LinkSaveButton>
          </ButtonBox>
        </Content>
      </ModalContainer>
    </>
  );
}
