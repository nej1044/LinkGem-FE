import axios from 'axios';
import { useEffect, useState, memo } from 'react';
import { useRecoilState } from 'recoil';
import {
  createState,
  deleteState,
  editState,
  modalTitleState,
} from 'store/store';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import { getTotalLinkData } from 'utils/getTotalLinkData';
import GemboxUI from './gembox.presenter';
import { IDataType, ILinkDataType, ILinkParams } from './gembox.types';

const Gembox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useRecoilState(createState);
  const [isEdit, setIsEdit] = useRecoilState(editState);
  const [isDelete, setIsDelete] = useRecoilState(deleteState);
  const [, setModalTitle] = useRecoilState(modalTitleState);
  const [data, setDate] = useState<IDataType[] | any>([]);
  const [linkData, setLinkData] = useState<object[]>([]);
  const [gemBoxId, setGemBoxId] = useState<string | number>('');
  const [gemboxTitle, setGemboxTitle] = useState<string>('전체');
  const [isFavorites, setIsFavorites] = useState<boolean>(false);
  const [isFavorMenu, setIsFavorMenu] = useState<boolean>(false);

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

  useEffect(() => {
    fetchLinkData();
  }, [isFavorites, isFavorMenu]);

  useEffect(() => {
    fetchData();
    fetchLinkData();
  }, [gemBoxId, isEdit, isDelete, isCreate]);

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
    />
  );
};

export default memo(Gembox);
