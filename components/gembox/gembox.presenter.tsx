import * as S from './gembox.styles';
import * as React from 'react';
import { IPropsGemBoxUI, ILinkDataType } from './gembox.types';
import { v4 as uuidv4 } from 'uuid';
import GemboxModal from './modal';
import LinkCard from './gemboxItem.presenter';
import Snackbar from './snackbar';
import { useState, memo } from 'react';
import Pagination from '../common/pagination/pagination.container';

const GemboxUI = (props: IPropsGemBoxUI) => {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onClickCopyLink = (url: string) => async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isCopy ? <Snackbar setIsCopy={setIsCopy} isLinkCopy={isCopy} /> : <></>}
      <S.Wrapper>
        <S.GemboxSection>
          <S.GexboxSectionTitle>
            {props.isFavorMenu && '즐겨찾기'}
            {!props.isFavorMenu &&
              props.gemboxData?.name &&
              `${props.gemboxData?.name}`}
            {!props.isFavorMenu && !props.gemboxData.name && '전체'}
            <span>({props.linkData?.totalCount})</span>
          </S.GexboxSectionTitle>
          <S.LinkBoxWrapper>
            {props.linkData?.contents?.map((el: ILinkDataType) => (
              <LinkCard
                key={uuidv4()}
                el={el}
                onClickPick={props.onClickPick}
                onClickCopyLink={onClickCopyLink}
                openMemo={props.openMemo}
                data={props.data}
                openCreate={props.openCreate}
                deleteLink={props.deleteLink}
              />
            ))}
          </S.LinkBoxWrapper>
          <Pagination
            count={props.totalCount}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
            setCurrent={props.setCurrent}
            current={props.current}
          />
        </S.GemboxSection>
      </S.Wrapper>
      <GemboxModal
        onClickMemo={props.onClickMemo}
        data={props.data}
        openCreate={props.openCreate}
        defaultMemo={props.defaultMemo}
      />
    </>
  );
};

export default memo(GemboxUI);
