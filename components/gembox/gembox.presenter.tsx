import * as S from './gembox.styles';
import * as React from 'react';
import { IPropsGemBoxUI, IDataType, ILinkDataType } from './gembox.types';
import { v4 as uuidv4 } from 'uuid';
import {
  EllipsisOutlined,
  StarOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import GemCount from '../common/gemCount';
import GemboxModal from './modal';
import LinkCard from './gemboxItem.presenter';

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
                  <GemCount id={el.id} />
                </S.GemboxText>
              ))}
              <S.GemboxButton onClick={props.openCreate}>
                + 잼박스 만들기
              </S.GemboxButton>
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
              <LinkCard key={uuidv4()} el={el} />
            ))}
          </S.LinkBoxWrapper>
        </S.GemboxSection>
      </S.Wrapper>
      <GemboxModal
        open={props.open}
        setOpen={props.setOpen}
        handleClose={props.handleClose}
        data={props.data}
        totalData={props.totalData}
        openCreate={props.openCreate}
      />
    </>
  );
};

export default GemboxUI;
