import * as S from './gembox.styles';
import { IPropsGemBoxUI } from './gembox.types';
import { v4 as uuidv4 } from 'uuid';
import LinkCard from './gemboxItem.presenter';
import Snackbar from './snackbar';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { boxNameState } from 'store/store';
import Pagination from '../common/pagination/pagination.container';

const GemboxUI = (props: IPropsGemBoxUI) => {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const boxName = useRecoilValue(boxNameState);
  const count = props.data?.totalCount;

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
      <S.Wrapper>
        <S.GexboxSectionTitle>
          {boxName}
          <span>({props.data?.totalCount})</span>
        </S.GexboxSectionTitle>
        <S.LinkBoxWrapper>
          {props.data?.contents?.map((el: any) => (
            <LinkCard
              key={uuidv4()}
              el={el}
              onClickPick={props.onClickPick}
              onClickCopyLink={onClickCopyLink}
              refetch={props.refetch}
              setIsDelete={props.setIsDelete}
            />
          ))}
        </S.LinkBoxWrapper>
        {count >= 24 && (
          <Pagination
            count={count}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
            current={props.current}
            setCurrent={props.setCurrent}
          />
        )}
      </S.Wrapper>
      {isCopy ? <Snackbar setIsCopy={setIsCopy} isLinkCopy={isCopy} /> : <></>}
      {props.isDelete ? (
        <Snackbar setIsCopy={props.setIsDelete} isDelete={props.isDelete} />
      ) : (
        <></>
      )}
    </>
  );
};

export default GemboxUI;
