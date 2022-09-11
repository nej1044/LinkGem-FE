import { IDeleteBoxProps } from './gemboxModal.types';
import { useRecoilState } from 'recoil';
import { gemboxRefetch } from 'store/store';
import { useMutation } from 'utils/useMutation';
import * as S from '../gembox.styles';

const DeleteBox = (props: IDeleteBoxProps) => {
  const [deleteBox] = useMutation('delete');
  const [, setBoxRefetch] = useRecoilState(gemboxRefetch);

  const onClickDelete = async () => {
    await deleteBox(`gemboxes/${props.selectedId}`, {
      id: props.selectedId,
    });
    props.setIsDelete(false);
    setBoxRefetch(true);
    props.refetch();
  };

  return (
    <S.DeleteWrapper>
      <S.DeleteTitle>정말 잼박스를 삭제할까요?</S.DeleteTitle>
      <div>
        <S.DeleteText>
          잼박스를 삭제하면 안에 보관된 링크도 함께 사라집니다.
        </S.DeleteText>
        <S.DeleteText style={{ fontWeight: 500 }}>
          삭제된 잼박스, 링크는 복구되지 않습니다.
        </S.DeleteText>
      </div>
      <S.ButtonWrapper>
        <S.GemBoxButton
          onClick={() => props.setIsDelete(false)}
          style={{ padding: '16px 24px', backgroundColor: '#0F0223' }}
        >
          다시 생각 할게요
        </S.GemBoxButton>
        <S.GemBoxButton
          onClick={onClickDelete}
          style={{ padding: '16px 24px' }}
        >
          네, 삭제할게요
        </S.GemBoxButton>
      </S.ButtonWrapper>
    </S.DeleteWrapper>
  );
};

export default DeleteBox;
