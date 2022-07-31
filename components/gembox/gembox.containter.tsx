// import axios from 'axios';
import { useState } from 'react';
import GemboxUI from './gembox.presenter';

const Gembox = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [data, setDate] = useState({});

  // const fetchData = async () => {
  //   const result = await axios.get('http://dev.linkgem.co.kr/v1/gemboxes');
  //   setDate(result);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <GemboxUI open={open} handleOpen={handleOpen} handleClose={handleClose} />
  );
};

export default Gembox;
