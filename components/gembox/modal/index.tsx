import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as S from '../gembox.styles';
import GemCard from './gemcard';
import { IDataType, IPropsGemboxModal } from '../gembox.types';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useEffect, useState } from 'react';
import { gemboxModalState } from 'store/store';
import { useRecoilState } from 'recoil';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const GemboxModal = (props: IPropsGemboxModal) => {
  const [data, setDate] = useState<IDataType[] | any>([]);
  const [modalState, setModalState] = useRecoilState(gemboxModalState);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [memo, setMemo] = useState('');

  const fetchData = async () => {
    try {
      const result = await axios.get('/api/v1/gemboxes', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
      });
      setDate(result?.data?.result.contents);
    } catch (error) {
      console.log(error);
    }
  };

  const openEdit = (id: number) => () => {
    setSelectedId(id);
    setModalState({
      ...modalState,
      boxState: 'isEdit',
      modalTitle: '잼박스 수정',
    });
  };

  const openDelete = (id: number) => () => {
    setModalState({
      ...modalState,
      boxState: 'isDelete',
      modalTitle: '',
    });
    setSelectedId(id);
  };

  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [modalState]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalState.open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalState.open}>
        <Box sx={S.style}>
          <S.ModalClose
            onClick={() =>
              setModalState({
                ...modalState,
                open: false,
                boxState: '',
                modalTitle: 'MY GEMBOX',
              })
            }
          />
          <S.GembaxWrapper>
            <S.ModalTitle>{modalState.modalTitle}</S.ModalTitle>
            {modalState.boxState === 'isMemo' && (
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
                      setModalState({
                        ...modalState,
                        boxState: 'isMemoDelete',
                      });
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
            {modalState.boxState === 'isMemoDelete' && (
              <S.MemoDeleteWrapper>
                <S.DeleteTitle>정말 메모를 삭제할까요?</S.DeleteTitle>
                <div>
                  <S.DeleteText>삭제한 메모는 복구 할 수 없어요</S.DeleteText>
                </div>
                <S.ButtonWrapper>
                  <S.GemBoxButton
                    onClick={() => {
                      setModalState({ ...modalState, boxState: 'isMemo' });
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
            <S.GemWrapper>
              {data?.map((el: IDataType, i: number) => (
                <GemCard
                  key={uuidv4()}
                  el={el}
                  i={i}
                  openEdit={openEdit}
                  openDelete={openDelete}
                  selectedId={selectedId}
                  totalData={props.totalData}
                />
              ))}
            </S.GemWrapper>
          </S.GembaxWrapper>
          {modalState.boxState === '' && (
            <S.ModalButton onClick={props.openCreate()}>
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
