import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getTotalLinkCount } from 'utils/getTotalLinkCount';
import GemboxUI from './gembox.presenter';
import { IDataType } from './gembox.types';

const Gembox = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [data, setDate] = useState<IDataType[] | any>([]);
  const [linkData, setLinkData] = useState([]);
  const [gemBoxId, setGemBoxId] = useState<string | number>('');
  const [gemboxTitle, setGemboxTitle] = useState('전체');

  const fetchData = async () => {
    try {
      const result = await axios.get('/api/v1/gemboxes', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaXNzIjoiTElOS19HRU0iLCJpYXQiOjE2NTc3MTQ3NzV9.PLAL9te0_Tszon7MMMPzMmDj7Cumt4nJGSVbx_6UT0g',
        },
      });
      setDate(result?.data?.result);
    } catch (error) {
      console.log(error);
      router.push('/error');
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
      router.push('/error');
    }
  };

  useEffect(() => {
    fetchData();
    fetchLinkData();
  }, [gemBoxId]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const setGembox = (el: IDataType) => () => {
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
      setGembox={setGembox}
      totalCount={totalCount}
      gemboxTitle={gemboxTitle}
    />
  );
};

export default Gembox;
