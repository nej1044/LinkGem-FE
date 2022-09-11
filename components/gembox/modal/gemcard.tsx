import { IPropsGemCard } from '../gembox.types';
import { onErrorGembox } from 'utils/onError';
import * as S from '../gembox.styles';

export const GemCard = (props: IPropsGemCard) => {
  return (
    <>
      <S.GemCard>
        <S.GemImg src={props.el?.imageUrl} onError={onErrorGembox} />
        <S.GemInfo>
          <S.GemName>{props.el?.name}</S.GemName>
          <div>
            <S.GemText onClick={props.openEdit(props.el.id)}>수정</S.GemText>
            <S.GemText onClick={props.openDelete(props.el.id)}>삭제</S.GemText>
          </div>
        </S.GemInfo>
      </S.GemCard>
    </>
  );
};

export default GemCard;
