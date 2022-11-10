import { useState, useEffect } from 'react';
import Axios from './Axios';

export const getTotalLinkData = () => {
  const [totalData, setTotalData] = useState([]);
  const fetchLinkData = async () => {
    try {
      const result = await Axios({
        url: 'api/v1/links',
        method: 'get',
      });
      setTotalData(result?.data?.result?.contents);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, []);

  return totalData;
};
