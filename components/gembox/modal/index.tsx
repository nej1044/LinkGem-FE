import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as S from '../gembox.styles';
import GemCard from './gemcard';
import { IDataType, IPropsGemboxModal } from '../gembox.types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import {
  createState,
  deleteState,
  editState,
  modalTitleState,
} from 'store/store';
import { useRecoilState } from 'recoil';

const GemboxModal = (props: IPropsGemboxModal) => {
  const [isCreate] = useRecoilState(createState);
  const [isEdit, setIsEdit] = useRecoilState(editState);
  const [isDelete, setIsDelete] = useRecoilState(deleteState);
  const [modalTitle, setModalTitle] = useRecoilState(modalTitleState);
  const [selectedId, setSelectedId] = useState<number>(0);

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
          <S.ModalClose onClick={props.handleClose} />
          <S.GembaxWrapper>
            <S.ModalTitle>{modalTitle}</S.ModalTitle>
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
          </S.GembaxWrapper>
          {!isEdit && !isDelete && !isCreate && (
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
