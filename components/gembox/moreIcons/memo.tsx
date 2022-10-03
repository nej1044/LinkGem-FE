import * as S from '../gembox.styles';
import GemboxModal from '../modal';
import { useMutation } from 'utils/useMutation';
import { ChangeEvent, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { IMemoIconProps } from './gemboxIcon.types';

const MemoIcon = (props: IMemoIconProps) => {
  const [memo, setMemo] = useState('');
  const [isMemoDelete, setIsMemoDelete] = useState(false);

  const [updateMemo] = useMutation('patch');

  const onChangeMemo = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(event.target.value);
  };

  const onClickMemo = async () => {
    await updateMemo(`links/${props.el.id}`, {
      id: props.el.id,
      memo: memo || '',
    });
    props.setOpen(false);
    setIsMemoDelete(false);
    props.refetch();
  };

  return (
    <>
      <S.MoreItem onClick={() => props.setOpen(true)}>
        <S.MemoIcon
          src="/icons/memoIcon.png"
          style={{ width: '34px', height: '34px', padding: 0 }}
        />{' '}
        메모
      </S.MoreItem>
      <GemboxModal
        open={props.open}
        setOpen={props.setOpen}
        title={!isMemoDelete && '잼키퍼 메모장'}
        Component={
          isMemoDelete ? (
            <S.MemoDeleteWrapper>
              <S.DeleteTitle>정말 메모를 삭제할까요?</S.DeleteTitle>
              <div>
                <S.DeleteText>삭제한 메모는 복구 할 수 없어요</S.DeleteText>
              </div>
              <S.ButtonWrapper>
                <S.GemBoxButton
                  onClick={() => setIsMemoDelete(false)}
                  style={{ padding: '2vh 1.2vw', backgroundColor: '#0F0223' }}
                >
                  다시 생각 해볼게요
                </S.GemBoxButton>
                <S.GemBoxButton
                  onClick={onClickMemo}
                  style={{ padding: '2vh 1.2vw' }}
                >
                  네, 삭제할게요
                </S.GemBoxButton>
              </S.ButtonWrapper>
            </S.MemoDeleteWrapper>
          ) : (
            <S.MemoWrapper>
              <S.MemoArea
                onChange={onChangeMemo}
                defaultValue={props.el?.memo !== '' ? props.el.memo : ''}
                placeholder="이 링크와 관련된 내용이나 나만의 아이디어를 기록해 보세요
분명 소중히 쓰일 순간이 생길거에요"
              ></S.MemoArea>
              <S.MemoFooter>
                <DeleteOutlined
                  style={{ fontSize: '36px' }}
                  onClick={() => setIsMemoDelete(true)}
                />
                <S.GemBoxButton
                  onClick={onClickMemo}
                  style={{ fontSize: '18px', padding: '18px 32px' }}
                >
                  저장
                </S.GemBoxButton>
              </S.MemoFooter>
            </S.MemoWrapper>
          )
        }
      />
    </>
  );
};

export default MemoIcon;
