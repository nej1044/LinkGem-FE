import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as S from '../gembox.styles';
import GemCard from './gemcard';
import { IDataType, IPropsGemboxModal } from '../gembox.types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const GemboxModal = (props: IPropsGemboxModal) => {
  const [editId, setEditId] = useState<number>(0);

  const openEdit = (id: number) => () => {
    props.setIsEdit(true);
    setEditId(id);
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
            <S.ModalTitle>
              {props.isEdit ? '잼박스 수정' : 'MY GEMBOX'}
            </S.ModalTitle>
            <S.GemWrapper>
              {props.data?.map((el: IDataType) => (
                <GemCard
                  key={uuidv4()}
                  el={el}
                  setIsEdit={props.setIsEdit}
                  isEdit={props.isEdit}
                  openEdit={openEdit}
                  editId={editId}
                  setOpen={props.setOpen}
                />
              ))}
            </S.GemWrapper>
          </S.GembaxWrapper>
          {!props.isEdit && (
            <S.ModalButton>
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
