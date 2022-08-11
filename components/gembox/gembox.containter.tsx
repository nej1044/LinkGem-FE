import axios from 'axios';
import { useEffect, useState } from 'react';
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
import { IDataType } from './gembox.types';

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

  useEffect(() => {
    fetchData();
    fetchLinkData();
  }, [gemBoxId, isEdit, isDelete, isCreate]);

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

  const fetchLinkData = async () => {
    try {
      const result = await axios.get('/api/v1/links', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
        params: {
          gemBoxId,
          size: 48,
        },
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
    } else {
      setGemBoxId('');
      setGemboxTitle('전체');
    }
  };

  const totalCount = getTotalLinkCount();
  const totalData = getTotalLinkData();

  const openCreate = () => {
    setOpen(true);
    setModalTitle('잼박스 추가');
    setIsCreate(true);
  };

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
    />
  );
};

export default Gembox;
