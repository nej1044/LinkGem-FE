import { EllipsisOutlined, StarOutlined } from '@ant-design/icons';
import GemCount from '../../../gemCount';
import * as S from '../sidebar.styles';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import { useQuery } from 'utils/useQuery';
import { useEffect, useState } from 'react';
import { boxNameState, gemboxRefetch } from 'store/store';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import GemboxModal from '../../../../gembox/modal';
import GemCard from '../../../../gembox/modal/gemcard';
import DeleteBox from '../../../../gembox/modal/deleteBox';
import EditBox from '../../../../gembox/modal/editBox';
import AddIcon from '../../../../gembox/moreIcons/add';
import MemoIcon from '../../../../../public/icons/memoIcon.svg';

export type IDataType = {
  id: number;
  name: string;
  imageUrl: string;
  title: string;
};

interface IGemBoxSideBarProps {
  selectMenu: (menu: string, url?: string | number) => () => void;
}

const GemboxSidebar = (props: IGemBoxSideBarProps) => {
  const router = useRouter();
  const totalCount = getTotalLinkCount();
  console.log(router);

  const { data, refetch } = useQuery('gemboxes');

  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [boxRefetch] = useRecoilState(gemboxRefetch);
  const [, setBoxName] = useRecoilState(boxNameState);

  const setClose = () => {
    setOpen(false);
    setOpenAdd(false);
    setIsDelete(false);
    setIsEdit(false);
  };

  const openCreate = () => {
    if (data.totalCount === 8) {
      alert('잼박스를 더 이상 추가할 수 없습니다.');
      return;
    }
    setOpenAdd(true);
  };

  const openEdit = (id: number) => () => {
    setSelectedId(id);
    setIsEdit(true);
  };

  const openDelete = (id: number) => () => {
    setIsDelete(true);
    setSelectedId(id);
  };

  const selectMenu = (menu: string, el?: any) => () => {
    if (el?.id) {
      router.push(`/${menu}/${el.id}`);
      setBoxName(el.name);
    } else {
      router.push(`/${menu}`);
      if (menu.includes('favorite')) {
        setBoxName('즐겨찾기');
      } else if (menu.includes('memo')) {
        setBoxName('메모');
      } else {
        setBoxName('전체');
      }
    }
  };

  useEffect(() => {
    refetch();
  }, [boxRefetch]);

  return (
    <>
      <S.Sidebar>
        <S.GemboxList>
          <S.GemboxListTitle onClick={() => setOpen(true)}>
            MY GEM BOX
            <EllipsisOutlined
              style={{
                fontSize: '20px',
                color: '#8E8E8E',
              }}
            />
          </S.GemboxListTitle>
          <S.GemboxItem>
            <S.GemboxTitle onClick={selectMenu('gembox')}>
              전체
              <span>({totalCount || 0})</span>
            </S.GemboxTitle>
            {data?.contents?.map((el: IDataType) => (
              <S.GemboxText key={uuidv4()} onClick={selectMenu('gembox', el)}>
                {el?.name}
                <GemCount id={el.id} />
              </S.GemboxText>
            ))}
            <S.GemboxButton onClick={openCreate}>
              + 잼박스 만들기
            </S.GemboxButton>
          </S.GemboxItem>
        </S.GemboxList>
        <S.FilterList>
          <S.FilterTitle>Filters</S.FilterTitle>
          <ul>
            <S.GemboxText onClick={selectMenu('gembox/favorite')}>
              <StarOutlined
                style={{ fontSize: '16px', marginRight: '4px' }}
                color="#0F0223"
              />
              즐겨찾기
              <GemCount isFavorites={true} />
            </S.GemboxText>
            <S.GemboxText onClick={selectMenu('gembox/memo')}>
              <MemoIcon
                style={{ marginLeft: '3px', marginRight: '5px' }}
                color="#0F0223"
              />
              메모
              <GemCount hasMemo={true} />
            </S.GemboxText>
          </ul>
        </S.FilterList>
      </S.Sidebar>
      <GemboxModal
        open={open}
        setOpen={setOpen}
        onClose={setClose}
        title={(isDelete && !'') || (isEdit && '잼박스 수정') || 'My Gem Box'}
        Component={
          <>
            {isDelete && !isEdit && (
              <DeleteBox
                setIsDelete={setIsDelete}
                selectedId={selectedId}
                refetch={refetch}
              />
            )}
            {!isDelete && isEdit && (
              <EditBox
                selectedId={selectedId}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                refetch={refetch}
              />
            )}
            {!isEdit && !isDelete && (
              <>
                <S.GemWrapper>
                  {data?.contents.map((el: IDataType, i: number) => (
                    <GemCard
                      key={uuidv4()}
                      el={el}
                      i={i}
                      openEdit={openEdit}
                      openDelete={openDelete}
                    />
                  ))}
                </S.GemWrapper>
                <S.ModalButton onClick={openCreate}>
                  + 추가할 수 있는 잼박스
                  <span>{`${8 - data?.totalCount}개`}</span>
                </S.ModalButton>
              </>
            )}
          </>
        }
      />
      <div style={{ display: 'none' }}>
        <AddIcon
          open={openAdd}
          setOpen={setOpenAdd}
          onClose={setClose}
          refetch={refetch}
        />
      </div>
    </>
  );
};

export default GemboxSidebar;
