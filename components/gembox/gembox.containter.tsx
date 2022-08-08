import axios from 'axios';
import { useEffect, useState } from 'react';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import GemboxUI from './gembox.presenter';
import { IDataType } from './gembox.types';

const Gembox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setDate] = useState<IDataType[] | any>([]);
  const [linkData, setLinkData] = useState<object[]>([]);
  const [gemBoxId, setGemBoxId] = useState<string | number>('');
  const [gemboxTitle, setGemboxTitle] = useState<string>('전체');

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

  useEffect(() => {
    fetchData();
    fetchLinkData();
  }, [gemBoxId]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

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

  return (
    <GemboxUI
      data={data}
      linkData={linkData}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      totalCount={totalCount}
      gemboxTitle={gemboxTitle}
      setGembox={setGembox}
    />
  );
};

export default Gembox;
