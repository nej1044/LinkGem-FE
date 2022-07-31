import * as S from './gembox.styles';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import {
  EllipsisOutlined,
  StarOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const GemboxUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.GemboxList>
            <S.GemboxListTitle>
              MY GEM BOX
              <EllipsisOutlined
                style={{
                  fontSize: '1.8vw',
                  color: '#8E8E8E',
                  cursor: 'pointer',
                }}
                onClick={props.handleOpen}
              />
            </S.GemboxListTitle>
            <S.GemboxItem>
              <S.GemboxTitle>
                전체<span>(8)</span>
              </S.GemboxTitle>
              <S.GemboxText>
                기본 잼박스<span>(8)</span>
              </S.GemboxText>
              <S.GemboxButton>+ 잼박스 만들기</S.GemboxButton>
            </S.GemboxItem>
          </S.GemboxList>
          <S.FilterList>
            <S.FilterTitle>Filters</S.FilterTitle>
            <ul>
              <S.GemboxText>
                <StarOutlined
                  style={{ fontSize: '1.1vw', marginRight: '0.3vw' }}
                  color="#0F0223"
                />
                즐겨찾기
              </S.GemboxText>
              <S.GemboxText>
                <FileTextOutlined
                  style={{ fontSize: '1vw', marginRight: '0.3vw' }}
                  color="#0F0223"
                />
                메모
              </S.GemboxText>
            </ul>
          </S.FilterList>
        </S.Sidebar>
        <S.GemboxSection>
          <S.GexboxSectionTitle>
            전체<span>(3)</span>
          </S.GexboxSectionTitle>
        </S.GemboxSection>
      </S.Wrapper>
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
        {/* <Fade in={props.open}> */}
        <Box sx={S.style}>
          <S.ModalClose onClick={props.handleClose} />
          <S.GembaxWrapper>
            <S.ModalTitle>MY GEMBOX</S.ModalTitle>
          </S.GembaxWrapper>
          <S.ModalButton>
            + 추가할 수 있는 잼박스
            <span>{`${8 - 1}개`}</span>
          </S.ModalButton>
        </Box>
        {/* </Fade> */}
      </Modal>
    </>
  );
};

export default GemboxUI;
