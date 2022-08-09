import * as S from './gembox.styles';
import * as React from 'react';

import { IPropsGemBoxUI, IDataType, ILinkDataType } from './gembox.types';
import { v4 as uuidv4 } from 'uuid';
import {
  EllipsisOutlined,
  StarOutlined,
  FileTextOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { getGemCount } from 'utils/getGemCount';
import { getDate } from 'utils/getDate';
import { onError } from 'utils/onError';
import GemboxModal from './modal';

const GemboxUI = (props: IPropsGemBoxUI) => {
  return (
    <>
      <S.Wrapper>
        <S.Sidebar>
          <S.GemboxList>
            <S.GemboxListTitle>
              MY GEM BOX
              <EllipsisOutlined
                style={{
                  fontSize: '1.8vw',
                  color: '#8E8E8E',
                  cursor: 'pointer',
                }}
                onClick={props.handleOpen}
              />
            </S.GemboxListTitle>
            <S.GemboxItem>
              <S.GemboxTitle onClick={props.setGembox()}>
                전체<span>({props.totalCount})</span>
              </S.GemboxTitle>
              {props.data?.map((el: IDataType) => (
                <S.GemboxText key={uuidv4()} onClick={props.setGembox(el)}>
                  {el?.name}
                  <span>({getGemCount(el?.id)})</span>
                </S.GemboxText>
              ))}
              <S.GemboxButton>+ 잼박스 만들기</S.GemboxButton>
            </S.GemboxItem>
          </S.GemboxList>
          <S.FilterList>
            <S.FilterTitle>Filters</S.FilterTitle>
            <ul>
              <S.GemboxText>
                <StarOutlined
                  style={{ fontSize: '1.1vw', marginRight: '0.3vw' }}
                  color="#0F0223"
                />
                즐겨찾기
              </S.GemboxText>
              <S.GemboxText>
                <FileTextOutlined
                  style={{ fontSize: '1vw', marginRight: '0.3vw' }}
                  color="#0F0223"
                />
                메모
              </S.GemboxText>
            </ul>
          </S.FilterList>
        </S.Sidebar>
        <S.GemboxSection>
          <S.GexboxSectionTitle>
            {props.gemboxTitle}
            <span>({props.linkData?.totalCount})</span>
          </S.GexboxSectionTitle>
          <S.LinkBoxWrapper>
            {props.linkData?.contents?.map((el: ILinkDataType) => (
              <S.LinkBox key={uuidv4()}>
                <S.LinkBoxImg onError={onError} src={el?.imageUrl} />
                <S.LinBoxContents>
                  <S.LinkBoxTitle>{el?.title}</S.LinkBoxTitle>
                  <S.LinkBoxRemark>{el?.description}</S.LinkBoxRemark>
                  <S.LinkSubInfo>
                    <S.LinkDate>{getDate(el?.createDate)}</S.LinkDate>
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
            ))}
          </S.LinkBoxWrapper>
        </S.GemboxSection>
      </S.Wrapper>
      <GemboxModal
        open={props.open}
        setOpen={props.setOpen}
        handleClose={props.handleClose}
        data={props.data}
        setIsEdit={props.setIsEdit}
        isEdit={props.isEdit}
      />
    </>
  );
};

export default GemboxUI;
