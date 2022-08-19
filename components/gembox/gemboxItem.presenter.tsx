import * as S from './gembox.styles';
import { v4 as uuidv4 } from 'uuid';
import { onError } from 'utils/onError';
import { getDate } from 'utils/getDate';
import {
  EllipsisOutlined,
  StarOutlined,
  LinkOutlined,
  StarFilled,
  CloseOutlined,
} from '@ant-design/icons';
import { IDataType, IPropsLinkCard } from './gembox.types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const LinkCard = (props: IPropsLinkCard) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isMemoView, setIsMemoView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [boxName, setBoxName] = useState('');

  const fetchBoxName = async () => {
    if (!props.el?.gemboxId) return;
    try {
      const result = await axios.get(`api/v1/gemboxes/${props.el?.gemboxId}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          id: props.el?.gemboxId,
        },
      });
      setBoxName(result?.data?.result.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoxName();
  });

  return (
    <div style={{ position: 'relative' }}>
      <S.LinkBox isMore={isMore}>
        <a target="_blank" href={props.el?.url} rel="noreferrer">
          <S.LinkBoxImg
            onError={onError}
            src={props.el?.imageUrl}
            isMore={isMore}
          />
        </a>
        {isMore ? (
          <S.LinkBoxContents isMore={isMore}>
            <S.MoreItems>
              <S.MoreItem onClick={props.openMemo(props.el)}>
                <S.MemoIcon /> 메모
              </S.MoreItem>
              <S.MoreItem onClick={props.openCreate()}>
                <S.AddIcon /> 잼박스추가
              </S.MoreItem>
              <S.MoreItem onClick={() => setIsEdit(true)}>
                <S.ChangeIcon isEdit={isEdit} /> 잼박스변경
              </S.MoreItem>
              <S.MoreItem>
                <S.DeleteIcon onClick={props.deleteLink(props.el?.id)} /> 삭제
              </S.MoreItem>
            </S.MoreItems>
            <CloseOutlined
              style={{ fontSize: '20px', textAlign: 'right' }}
              onClick={() => setIsMore(false)}
            />
          </S.LinkBoxContents>
        ) : (
          <S.LinkBoxContents>
            <a
              target="_blank"
              href={props.el?.url}
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <S.LinkBoxTitle>{props.el?.title}</S.LinkBoxTitle>
              <S.LinkBoxRemark>{props.el?.description}</S.LinkBoxRemark>
            </a>
            <S.LinkSubInfo>
              <S.LeftSubInfo>
                <S.LinkDate>{getDate(props.el?.createDate)}</S.LinkDate>
                {props.el?.memo !== 'string' && (
                  <S.MemoIcon
                    onClick={() => setIsMemoView(true)}
                    style={{ width: '24px', height: '24px', padding: '5px' }}
                  />
                )}
              </S.LeftSubInfo>
              <div>
                {props.el?.isFavorites ? (
                  <StarFilled
                    style={{
                      fontSize: '17px',
                      marginRight: '12px',
                      cursor: 'pointer',
                    }}
                    color="#0F0223"
                    onClick={props.onClickPick(props.el)}
                  />
                ) : (
                  <StarOutlined
                    style={{
                      fontSize: '17px',
                      marginRight: '12px',
                      cursor: 'pointer',
                    }}
                    color="#0F0223"
                    onClick={props.onClickPick(props.el)}
                  />
                )}

                <LinkOutlined
                  style={{
                    fontSize: '17px',
                    marginRight: '12px',
                    cursor: 'pointer',
                  }}
                  color="#0F0223"
                  onClick={props.onClickCopyLink(props.el?.url)}
                />
                <EllipsisOutlined
                  style={{
                    fontSize: '17px',
                    color: '#0F0223',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsMore(true)}
                />
              </div>
            </S.LinkSubInfo>
          </S.LinkBoxContents>
        )}
      </S.LinkBox>
      {isMemoView && (
        <S.Memobox>
          <S.MemoText>{props.el?.memo}</S.MemoText>
          <S.MemoOption onClick={props.openMemo(props.el)}>
            {props.el?.memo.length >= 215 ? '전체보기' : '수정'}
          </S.MemoOption>
          <S.MemoClose onClick={() => setIsMemoView(false)} />
        </S.Memobox>
      )}
      {isEdit && (
        <S.Changebox>
          <S.ChangeList>
            <S.ChangeItem>
              현재 잼박스
              <input type="text" value={boxName || '기본'} disabled />
            </S.ChangeItem>
            <S.ChangeItem>
              변경할 잼박스
              <select>
                <option disabled>잼박스 선택</option>
                {props.data?.map((box: IDataType) => (
                  <option key={uuidv4()} value={box.id}>
                    {box.name}
                  </option>
                ))}
              </select>
            </S.ChangeItem>
          </S.ChangeList>

          <S.GemBoxButton style={{ padding: '8px 16px', fontSize: '14px' }}>
            변경
          </S.GemBoxButton>
          <S.MemoClose onClick={() => setIsEdit(false)} />
        </S.Changebox>
      )}
    </div>
  );
};

export default LinkCard;
