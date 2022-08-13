import * as S from './gembox.styles';
import { onError } from 'utils/onError';
import { getDate } from 'utils/getDate';
import {
  EllipsisOutlined,
  StarOutlined,
  LinkOutlined,
  StarFilled,
} from '@ant-design/icons';
import { IPropsLinkCard } from './gembox.types';

const LinkCard = (props: IPropsLinkCard) => {
  return (
    <S.LinkBox>
      <a target="_blank" href={props.el?.url} rel="noreferrer">
        <S.LinkBoxImg onError={onError} src={props.el?.imageUrl} />
      </a>
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
            />
          </div>
        </S.LinkSubInfo>
      </S.LinkBoxContents>
    </S.LinkBox>
  );
};

export default LinkCard;
