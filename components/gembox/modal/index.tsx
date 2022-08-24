import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as S from '../gembox.styles';
import GemCard from './gemcard';
import { IDataType, IPropsGemboxModal } from '../gembox.types';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useState } from 'react';
import {
  createState,
  deleteMemoState,
  deleteState,
  editState,
  memoState,
  modalTitleState,
} from 'store/store';
import { useRecoilState } from 'recoil';
import { DeleteOutlined } from '@ant-design/icons';

const GemboxModal = (props: IPropsGemboxModal) => {
  const [isCreate] = useRecoilState(createState);
  const [isEdit, setIsEdit] = useRecoilState(editState);
  const [isDelete, setIsDelete] = useRecoilState(deleteState);
  const [modalTitle, setModalTitle] = useRecoilState(modalTitleState);
  const [isMemo] = useRecoilState(memoState);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [memo, setMemo] = useState('');
  const [isMemoDelete, setIsMemoDelete] = useRecoilState(deleteMemoState);

  const openEdit = (id: number) => () => {
    setIsEdit(true);
    setModalTitle('잼박스 수정');
    setSelectedId(id);
  };

  const openDelete = (id: number) => () => {
    setIsDelete(true);
    setModalTitle('');
    setSelectedId(id);
  };

  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={S.style}>
          <S.ModalClose
            onClick={() => {
              props.handleClose();
              setIsMemoDelete(false);
            }}
          />
          <S.GembaxWrapper>
            <S.ModalTitle>{modalTitle}</S.ModalTitle>
            {isMemo && !isMemoDelete && (
              <S.MemoWrapper>
                <S.MemoArea
                  onChange={onChangeMemo}
                  defaultValue={props.defaultMemo || ''}
                  placeholder="이 링크와 관련된 내용이나 나만의 아이디어를 기록해 보세요
분명 소중히 쓰일 순간이 생길거에요"
                ></S.MemoArea>
                <S.MemoFooter>
                  <DeleteOutlined
                    style={{ fontSize: '1.6vw' }}
                    onClick={() => {
                      setModalTitle('');
                      setIsMemoDelete(true);
                    }}
                  />
                  <S.GemBoxButton
                    onClick={props.onClickMemo(memo)}
                    style={{ fontSize: '1vw', padding: '1.2vh 1.4vw' }}
                  >
                    저장
                  </S.GemBoxButton>
                </S.MemoFooter>
              </S.MemoWrapper>
            )}
            {isMemoDelete && (
              <S.MemoDeleteWrapper>
                <S.DeleteTitle>정말 메모를 삭제할까요?</S.DeleteTitle>
                <div>
                  <S.DeleteText>삭제한 메모는 복구 할 수 없어요</S.DeleteText>
                </div>
                <S.ButtonWrapper>
                  <S.GemBoxButton
                    onClick={() => {
                      setIsMemoDelete(false);
                      setModalTitle('잼키퍼 메모장');
                    }}
                    style={{ padding: '2vh 1.2vw', backgroundColor: '#0F0223' }}
                  >
                    다시 생각 해볼게요
                  </S.GemBoxButton>
                  <S.GemBoxButton
                    onClick={props.onClickMemo('string')}
                    style={{ padding: '2vh 1.2vw' }}
                  >
                    네, 삭제할게요
                  </S.GemBoxButton>
                </S.ButtonWrapper>
              </S.MemoDeleteWrapper>
            )}
            {!isMemo && (
              <S.GemWrapper>
                {props.data?.map((el: IDataType, i: number) => (
                  <GemCard
                    key={uuidv4()}
                    el={el}
                    i={i}
                    openEdit={openEdit}
                    openDelete={openDelete}
                    selectedId={selectedId}
                    setOpen={props.setOpen}
                    totalData={props.totalData}
                  />
                ))}
              </S.GemWrapper>
            )}
          </S.GembaxWrapper>
          {!isEdit && !isDelete && !isCreate && !isMemo && (
            <S.ModalButton onClick={props.openCreate}>
              + 추가할 수 있는 잼박스
              <span>{`${8 - props.data?.length}개`}</span>
            </S.ModalButton>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default GemboxModal;
