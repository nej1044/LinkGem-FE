import * as S from './gembox.styles';
import { onError } from 'utils/onError';
import { getDate } from 'utils/getDate';
import {
  EllipsisOutlined,
  StarOutlined,
  LinkOutlined,
} from '@ant-design/icons';

const LinkCard = (props) => {
  return (
    <S.LinkBox>
      <S.LinkBoxImg onError={onError} src={props.el?.imageUrl} />
      <S.LinBoxContents>
        <S.LinkBoxTitle>{props.el?.title}</S.LinkBoxTitle>
        <S.LinkBoxRemark>{props.el?.description}</S.LinkBoxRemark>
        <S.LinkSubInfo>
          <S.LinkDate>{getDate(props.el?.createDate)}</S.LinkDate>
          <div>
            <StarOutlined
              style={{
                fontSize: '17px',
                marginRight: '12px',
                cursor: 'pointer',
              }}
              color="#0F0223"
            />
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
      </S.LinBoxContents>
    </S.LinkBox>
  );
};

export default LinkCard;
