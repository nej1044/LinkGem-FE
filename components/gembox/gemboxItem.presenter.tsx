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
      <S.LinkBoxImg onError={onError} src={props.el?.imageUrl} />
      <S.LinkBoxContents>
        <S.LinkBoxTitle>{props.el?.title}</S.LinkBoxTitle>
        <S.LinkBoxRemark>{props.el?.description}</S.LinkBoxRemark>
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
