import * as S from './gembox.styles';
import { onError } from 'utils/onError';
import { getDate } from 'utils/getDate';
import {
  EllipsisOutlined,
  StarOutlined,
  LinkOutlined,
  StarFilled,
  CloseOutlined,
} from '@ant-design/icons';
import { IPropsLinkCard } from './gembox.types';
import { useState } from 'react';

const LinkCard = (props: IPropsLinkCard) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  return (
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
            <S.MoreItem>
              <S.MemoIcon /> 메모
            </S.MoreItem>
            <S.MoreItem>
              <S.AddIcon /> 잼박스추가
            </S.MoreItem>
            <S.MoreItem>
              <S.ChangeIcon /> 잼박스변경
            </S.MoreItem>
            <S.MoreItem>
              <S.DeleteIcon /> 삭제
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
            <S.LinkDate>{getDate(props.el?.createDate)}</S.LinkDate>
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
  );
};

export default LinkCard;
