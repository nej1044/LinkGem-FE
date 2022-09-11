import { IEditBoxProps } from './gemboxModal.types';
import { ChangeEvent, useState } from 'react';
import { useMutation } from 'utils/useMutation';
import { useQuery } from 'utils/useQuery';
import * as S from '../gembox.styles';

const EditBox = (props: IEditBoxProps) => {
  const { data } = useQuery(`gemboxes/${props.selectedId}`);
  const [editBox] = useMutation('patch');

  const [name, setName] = useState<string>('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickEdit = async () => {
    if (name.length >= 8 || name.length <= 0) {
      alert('잼박스 이름은 0자 이하, 8자 이상일 수 없습니다.');
      return;
    }
    await editBox(`gemboxes/${props.selectedId}`, {
      id: props.selectedId,
      name,
    });
    props.setIsEdit(false);
    props.refetch();
  };

  return (
    <S.WriteWrapper>
      <S.WriteList>
        <S.GemModalText>현재 잼박스</S.GemModalText>
        <S.GemModalInput
          type="text"
          defaultValue={data?.name}
          disabled={props.isEdit}
        />
      </S.WriteList>
      <S.WriteList>
        <S.GemModalText>수정할 잼박스 이름</S.GemModalText>
        <S.GemModalInput
          type="text"
          placeholder="수정할 잼박스 이름을 적어주세요"
          onChange={onChangeName}
        />
      </S.WriteList>
      <S.GemBoxButton
        style={{ width: '97px', height: '55px', padding: '16px 32px' }}
        onClick={onClickEdit}
      >
        저장
      </S.GemBoxButton>
    </S.WriteWrapper>
  );
};

export default EditBox;
