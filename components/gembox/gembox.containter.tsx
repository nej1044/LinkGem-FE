import axios from 'axios';
import { useEffect, useState, memo } from 'react';
import { useRecoilState } from 'recoil';
import {
  createState,
  deleteState,
  editState,
  modalTitleState,
  memoState,
  deleteMemoState,
} from 'store/store';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import { getTotalLinkData } from 'utils/getTotalLinkData';
import GemboxUI from './gembox.presenter';
import { IDataType, ILinkDataType, ILinkParams } from './gembox.types';

const Gembox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useRecoilState<boolean>(createState);
  const [isEdit, setIsEdit] = useRecoilState<boolean>(editState);
  const [isDelete, setIsDelete] = useRecoilState<boolean>(deleteState);
  const [, setModalTitle] = useRecoilState<string>(modalTitleState);
  const [isMemo, setIsMemo] = useRecoilState<boolean>(memoState);
  const [, setIsMemoDelete] = useRecoilState(deleteMemoState);
  const [data, setDate] = useState<IDataType[] | any>([]);
  const [linkData, setLinkData] = useState<object[]>([]);
  const [gemBoxId, setGemBoxId] = useState<string | number>('');
  const [gemboxTitle, setGemboxTitle] = useState<string>('전체');
  const [isFavorites, setIsFavorites] = useState<boolean>(false);
  const [isFavorMenu, setIsFavorMenu] = useState<boolean>(false);
  const [startPage, setStartPage] = useState<number>(1);
  const [current, setCurrent] = useState<number>(1);
  const [id, setId] = useState<number>(0);
  const [defaultMemo, setDefaultMemo] = useState<string>('');

  const fetchData = async () => {
    try {
      const result = await axios.get('/api/v1/gemboxes', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
      });
      setDate(result?.data?.result.contents);
    } catch (error) {
      console.log(error);
    }
  };

  const params: ILinkParams = {
    size: 24,
    page: current - 1,
  };

  const onClickFavor = () => {
    setGemBoxId('');
    setIsFavorMenu(true);
    setGemboxTitle('즐겨찾기');
  };

  if (gemBoxId) params.gemBoxId = gemBoxId;
  if (isFavorMenu) params.isFavorites = true;

  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params,
      });
      setLinkData(result?.data?.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    if (open) setOpen(false);
    if (isEdit) setIsEdit(false);
    if (isDelete) setIsDelete(false);
    if (isCreate) setIsCreate(false);
    if (isMemo) setIsMemo(false);
    setModalTitle('MY GEMBOX');
  };

  const setGembox = (el?: IDataType) => () => {
    if (el) {
      setGemBoxId(el?.id);
      setGemboxTitle(el?.name);
      params.isFavorites = false;
      setIsFavorMenu(false);
    } else {
      setGemBoxId('');
      setGemboxTitle('전체');
      params.isFavorites = false;
      setIsFavorMenu(false);
    }
  };

  const totalCount = getTotalLinkCount();
  const totalData = getTotalLinkData();

  const openCreate = () => {
    if (data.length === 8) return;
    setOpen(true);
    setModalTitle('잼박스 추가');
    setIsCreate(true);
  };

  const openMemo = (el: ILinkDataType) => () => {
    if (el?.memo !== 'string') {
      setDefaultMemo(el?.memo);
    } else {
      setDefaultMemo('');
    }
    setId(el?.id);
    setModalTitle('잼키퍼 메모장');
    setIsMemo(true);
    setOpen(true);
  };

  const onClickPick = (el: ILinkDataType) => async () => {
    setIsFavorites((prev) => !prev);
    try {
      await axios.patch(
        `api/v1/links/${el?.id}`,
        {
          id: el?.id,
          isFavorites: !el?.isFavorites,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onClickMemo = (memo: string) => async () => {
    try {
      await axios.patch(
        `api/v1/links/${id}`,
        {
          id,
          memo,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
          },
        }
      );
      setOpen(false);
      setIsMemo(false);
      setIsMemoDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = (id: number) => async () => {
    const ids = [id];
    try {
      await axios.delete('api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        data: {
          ids,
        },
      });
      setIsMemo(!isMemo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, [isFavorites, isFavorMenu, current, isMemo]);

  useEffect(() => {
    fetchData();
    fetchLinkData();
  }, [gemBoxId, isEdit, isDelete, isCreate]);

  console.log(linkData);
  return (
    <GemboxUI
      data={data}
      linkData={linkData}
      open={open}
      setOpen={setOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      totalCount={totalCount}
      gemboxTitle={gemboxTitle}
      setGembox={setGembox}
      openCreate={openCreate}
      totalData={totalData}
      onClickPick={onClickPick}
      onClickFavor={onClickFavor}
      current={current}
      setCurrent={setCurrent}
      startPage={startPage}
      setStartPage={setStartPage}
      openMemo={openMemo}
      setId={setId}
      onClickMemo={onClickMemo}
      defaultMemo={defaultMemo}
      deleteLink={deleteLink}
    />
  );
};

export default memo(Gembox);
