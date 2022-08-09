import axios from 'axios';
import { IPropsGemCard } from '../gembox.types';
import { ChangeEvent, useState } from 'react';
import { onErrorGembox } from 'utils/onError';
import * as S from '../gembox.styles';

export const GemCard = (props: IPropsGemCard) => {
  const [name, setName] = useState<string>('');

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // const onClickSubmit = async () => {
  //   try {
  //     const result = await axios.post('api/v1/gemboxes', {
  //       headers: {
  //         Authorization:
  //           'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
  //       },
  //       linkIds: [0],
  //       name,
  //     });
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onClickEdit = async () => {
    try {
      await axios.patch(
        `api/v1/gemboxes/${props.editId}`,
        {
          id: Number(props.editId),
          name,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
        }
      );
      alert('잼박스 이름이 수정되었습니다.');
      props.setOpen(false);
      props.setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {props.isEdit && props.el.id === props.editId && (
        <S.WriteWrapper>
          <S.WriteList>
            <S.GemModalText>현재 잼박스</S.GemModalText>
            <S.GemModalInput
              type="text"
              defaultValue={props.el.name}
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
          <button onClick={onClickEdit}>저장</button>
        </S.WriteWrapper>
      )}
      {!props.isEdit && (
        <S.GemCard>
          <S.GemImg src={props.el?.imageUrl} onError={onErrorGembox} />
          <S.GemInfo>
            <S.GemName>{props.el?.name}</S.GemName>
            <div>
              <S.GemText onClick={props.openEdit(props.el.id)}>수정</S.GemText>
              <S.GemText>삭제</S.GemText>
            </div>
          </S.GemInfo>
        </S.GemCard>
      )}
    </>
  );
};

export default GemCard;
